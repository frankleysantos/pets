<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class ServicoController extends Controller
{
    public function show() {
        $servicos = DB::table('servicos')->get();
        return response()->json($servicos);
    }
}
