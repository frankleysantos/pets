<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ServicosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $servicos = [
            ['nome' => 'Tosa'],
            ['nome' => 'Banho'],
            ['nome' => 'Banho e Tosa'],
            ['nome' => 'Consultas veterinárias'],
            ['nome' => 'Vacinação'],
            ['nome' => 'Tratamentos alternativos']
        ];
        \DB::table('servicos')->delete();
        foreach ($servicos as $servico) {
            \DB::table('servicos')->insert($servico);
        }
    }
}
