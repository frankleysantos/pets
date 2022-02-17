<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsumosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumos', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('categoria_insumo_id');
            $table->string('nome')->unique();
            $table->float('valor')->nullable();
            $table->timestamps();

            $table->foreign('categoria_insumo_id', 'prontuario_categoria_insumos_id_foreign')->references('id')->on('categoria_insumos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insumos');
    }
}
