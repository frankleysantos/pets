<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(EspeciesTableSeeder::class);
        $this->call(RacasTableSeeder::class);
        $this->call(ServicosTableSeeder::class);
    }
}