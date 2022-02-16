<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

Route::group(['prefix' => 'cliente', 'middleware' => 'auth'], function(){
    Route::get('/', [App\Http\Controllers\ClienteController::class, 'index']);
    Route::post('store', [App\Http\Controllers\ClienteController::class, 'store']);
    Route::post('show', [App\Http\Controllers\ClienteController::class, 'show']);
});

Route::group(['prefix' => 'pet', 'middleware' => 'auth'], function(){
    Route::get('/', [App\Http\Controllers\PetController::class, 'index']);
    Route::post('store', [App\Http\Controllers\PetController::class, 'store']);
    Route::get('show/{cliente_id}', [App\Http\Controllers\PetController::class, 'show']);
    Route::get('delete/{pet_id}', [App\Http\Controllers\PetController::class, 'delete']);
});

Route::group(['prefix' => 'especie', 'middleware' => 'auth'], function(){
    Route::get('/', [App\Http\Controllers\EspecieController::class, 'index']);
    Route::post('store', [App\Http\Controllers\EspecieController::class, 'store']);
    Route::get('show', [App\Http\Controllers\EspecieController::class, 'show']);
});

Route::group(['prefix' => 'raca', 'middleware' => 'auth'], function(){
    Route::get('/', [App\Http\Controllers\RacaController::class, 'index']);
    Route::post('store', [App\Http\Controllers\RacaController::class, 'store']);
    Route::get('show/{especie_id?}', [App\Http\Controllers\RacaController::class, 'show']);
});

Route::group(['prefix' => 'agenda', 'middleware' => 'auth'], function(){
    Route::get('show/{data}', [App\Http\Controllers\AgendaController::class, 'show']);
    Route::get('pet/{pet_id}', [App\Http\Controllers\AgendaController::class, 'agendaPet']);
    Route::post('store', [App\Http\Controllers\AgendaController::class, 'store']);
    Route::post('update/status', [App\Http\Controllers\AgendaController::class, 'alterarStatus']);
});

Route::group(['prefix' => 'servico', 'middleware' => 'auth'], function(){
    Route::get('show', [App\Http\Controllers\ServicoController::class, 'show']);
});


Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');