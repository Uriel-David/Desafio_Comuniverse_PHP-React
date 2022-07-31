<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        if (empty($products)) {
            return response('Not found products or not exists products in Database.', 400);
        }

        return response()->json($products, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $request->validate($request->rules());

        $product = new Product();

        $product->product_name = $request->product_name;
        $product->product_price = $request->product_price;
        $product->product_stock = $request->product_stock;
        $product->product_description = $request->product_description;

        $product->save();
        return response()->json($product, 200);
    }

    /**
     * Display the specified resource.
     * 
     * @param  int  $id
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product, $id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return response('Not found products or not exists products in Database.', 400);
        }

        return response()->json($product, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product, $id)
    {
        $request->validate($request->rules());

        $product = Product::find($id);
        $product->update($request->all());

        return response()->json($product, 200);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param  int  $id
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product, $id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json($product, 200);
    }
}
