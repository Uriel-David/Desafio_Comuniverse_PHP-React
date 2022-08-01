<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class JsonToCsvController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        $products = json_decode($products, true);

        $this->generateAndDownloadFileCSV($products);

        return response()->download('stock.csv');
    }

    private function generateAndDownloadFileCSV($products) {
        $generateFile = fopen('stock.csv', 'w');
        foreach ($products as $line) {
            fputcsv($generateFile, $line);
        }
        fclose($generateFile);
    }
}
