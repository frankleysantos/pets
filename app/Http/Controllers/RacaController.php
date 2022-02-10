<?php

namespace App\Http\Controllers;

use App\Models\Raca;
use Illuminate\Http\Request;

class RacaController extends Controller
{
    public function show($especie_id) {
        $racas = Raca::where('especie_id', $especie_id)->get();
        return response()->json($racas);
    }
}
