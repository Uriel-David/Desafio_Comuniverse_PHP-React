<?php

namespace Database\Seeders;

//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductBase extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'product_name'          => 'Product 1',
            'product_price'         => 10.99,
            'product_stock'         => 10,
            'product_description'   => 'Description product 1',
            'created_at'            => date('Y-m-d H:i:s'),
            'updated_at'            => date('Y-m-d H:i:s')
        ]);

        DB::table('products')->insert([
            'product_name'          => 'Product 2',
            'product_price'         => 18.43,
            'product_stock'         => 40,
            'product_description'   => 'Description product 2',
            'created_at'            => date('Y-m-d H:i:s'),
            'updated_at'            => date('Y-m-d H:i:s')
        ]);

        DB::table('products')->insert([
            'product_name'          => 'Product 3',
            'product_price'         => 27.78,
            'product_stock'         => 20,
            'product_description'   => 'Description product 3',
            'created_at'            => date('Y-m-d H:i:s'),
            'updated_at'            => date('Y-m-d H:i:s')
        ]);
    }
}
