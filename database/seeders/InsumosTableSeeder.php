<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class InsumosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$table->unsignedInteger('categoria_insumo_id');
        // $table->string('nome')->unique();
        // $table->float('valor')->nullable();

        $faker = \Faker\Factory::create('pt_BR');

        for ($i=0; $i < 10; $i++) { 
            \DB::table('insumos')
            ->insert([
                'categoria_insumo_id' => rand(1, 3),
                'valor' => rand(1.0, 100.0),
                'nome' => $faker->jobTitle.'-'.$i
            ]);
        }
    }
}
