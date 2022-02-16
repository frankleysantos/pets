<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EspeciesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('especies')->delete();
        
        \DB::table('especies')->insert(array (
            0 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 1,
            'nome' => 'Cão (Cachorro)',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            1 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 2,
                'nome' => 'Gato',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            2 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 3,
                'nome' => 'Cavalo',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            3 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 4,
                'nome' => 'Coelho',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            4 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 5,
                'nome' => 'Roedores',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            5 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 6,
                'nome' => 'Peixes',
                'updated_at' => '2022-02-07 15:36:52',
            ),
        ));
        
        
    }
}