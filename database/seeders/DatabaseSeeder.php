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
        $this->call(UsersTableSeeder::class);
        $this->call(CategoriaInsumosTableSeeder::class);
        $this->call(InsumosTableSeeder::class);
        $this->call(ClientesTableSeeder::class);
        $this->call(PetTableSeeder::class);
        $this->call(AgendaTableSeeder::class);

    }
}
