<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProntuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prontuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pet_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('agenda_id');
            $table->text('descricao')->nullable();
            $table->text('html')->nullable();
            $table->timestamps();

            $table->foreign('pet_id', 'prontuario_pet_id_foreign')->references('id')->on('pets')->onDelete('cascade');
            $table->foreign('user_id', 'prontuario_user_id_foreign')->references('id')->on('users');
            $table->foreign('agenda_id', 'prontuario_agenda_id_foreign')->references('id')->on('agendas');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prontuarios');
    }
}
