<?php

namespace App\Http\Controllers;

use App\Models\Raca;
use Illuminate\Http\Request;
use DB;

class RacaController extends Controller
{
    public function index() 
    {
        return view('raca.index');
    }

    public function show($especie_id = null) 
    {
        $racas = DB::table('racas as r')
                    ->join('especies as esp', 'esp.id', 'r.especie_id')
                    ->select(
                        'r.nome as nome', 'r.especie_id as especie_id', 'esp.nome as especie', 'r.id as id'
                    );
        if ($especie_id != null || $especie_id != '') {
            $racas->where('r.especie_id', $especie_id);
        }
        $racas = $racas->get();
        return response()->json($racas);
    }

    public function store(Request $request)
    {
        Raca::create($request->except('especie'));
        $especie = DB::table('especies')->where('id', $request->especie_id)->first();
        $raca = [
            'nome' => $request->nome,
            'especie_id' => $request->especie_id,
            'especie' => $especie->nome
        ];

        return response()->json($raca);
    }
}
