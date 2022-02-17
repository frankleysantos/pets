<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategoriaInsumosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categorias = [
            'Vacina', 'Remédios', 'Ração', 
        ];
        foreach ($categorias as $categoria) {
            \DB::table('categoria_insumos')->insert(['nome' => $categoria]);
        }
    }
}
