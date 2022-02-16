<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PetTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('pt_BR');

        for ($i=0; $i < 4; $i++) { 
            \DB::table('pets')
            ->insert([
                'raca_id' => rand(1, 6),
                'cliente_id' => 1,
                'nome' => $faker->firstName
            ]);
        }
        
    }
}
