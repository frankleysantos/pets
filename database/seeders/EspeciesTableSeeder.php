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
                'nome' => 'Hamster',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            5 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 6,
            'nome' => 'Rato (Twister ou Mecol)',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            6 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 7,
            'nome' => 'Camundongo (Topolino)',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            7 => 
            array (
                'created_at' => '2022-02-07 15:36:52',
                'id' => 8,
            'nome' => 'Porquinho-da-índia (Cobaia ou Cávia)',
                'updated_at' => '2022-02-07 15:36:52',
            ),
            8 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 9,
            'nome' => 'Porco doméstico (Miniporquinho)',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            9 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 10,
                'nome' => 'Chinchila',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            10 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 11,
            'nome' => 'Gerbil (Esquilo-da-Mongólia)',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            11 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 12,
                'nome' => 'Piriquitos',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            12 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 13,
                'nome' => 'Canário',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            13 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 14,
                'nome' => 'Papagaios',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            14 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 15,
                'nome' => 'Tartarugas',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            15 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 16,
                'nome' => 'Cágados',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            16 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 17,
                'nome' => 'Jabutis',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            17 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 18,
                'nome' => 'Lagartos',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            18 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 19,
            'nome' => 'Cobras (Serpentes)',
                'updated_at' => '2022-02-07 15:36:53',
            ),
            19 => 
            array (
                'created_at' => '2022-02-07 15:36:53',
                'id' => 20,
                'nome' => 'Peixes',
                'updated_at' => '2022-02-07 15:36:53',
            ),
        ));
        
        
    }
}