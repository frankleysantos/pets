<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RelatorioController extends Controller
{
    public function index(){
        return view('relatorio.index');
    }

    public function vacinados(){
        return response()->json('vacinados');
    }
}
