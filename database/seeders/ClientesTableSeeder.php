<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('clientes')->insert([
            'nome' => 'Frankley da Silva Santos',
            'rua' => 'Rua Marcos Ananias Soares, 52',
            'bairro' => 'Jardim Iracema',
            'cep' => '39801-126',
            'cidade' => 'Teófilo Otoni',
            'estado' => 'MG',
            'email' => 'frankleysilvasantos@gmai.com',
            'telefone' => '(33) 98765-6128',
        ]);
    }
}
