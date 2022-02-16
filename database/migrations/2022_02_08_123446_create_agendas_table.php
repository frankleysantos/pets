<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pet_id');
            $table->unsignedInteger('servico_id');
            $table->date('data');
            $table->time('hora');
            $table->text('observacao')->nullable();
            $table->enum('status', ['cancelado', 'atendido', 'faltante', 'agendado'])->default('agendado');
            $table->timestamps();
            
            $table->foreign('pet_id', 'agendas_pet_id_foreign')->references('id')->on('pets')->onDelete('cascade');
            $table->foreign('servico_id', 'agendas_servico_id_foreign')->references('id')->on('servicos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agendas');
    }
}
