<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsumosPetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumos_pets', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('prontuario_id');
            $table->unsignedInteger('pet_id');
            $table->unsignedInteger('insumo_id');
            $table->timestamps();

            $table->foreign('prontuario_id', 'insumos_pet_prontuario_id_foreign')->references('id')->on('prontuarios')->onDelete('cascade');
            $table->foreign('insumo_id', 'insumos_pet_insumo_id_foreign')->references('id')->on('insumos');
            $table->foreign('pet_id', 'insumos_pet_pet_id_foreign')->references('id')->on('pets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insumos_pets');
    }
}
