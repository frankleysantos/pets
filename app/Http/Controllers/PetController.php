<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use App\Models\Raca;

class PetController extends Controller
{
    public function store(Request $request) {
        $cadPet = Pet::create([
            'nome' => $request->nome,
            'raca_id' => $request->raca,
            'cliente_id' => $request->cliente_id
        ]);
        $raca = Raca::find($request->raca);
        $pet = [
            'nome' => $request->nome,
            'raca' => $raca['nome'],
            'pet_id' => $cadPet->id
        ];
        return response()->json($pet);
    }

    public function show($id) {
        // $pets = Pet::where('cliente_id', $id)->with(['raca'])->get();
        $pets = Pet::join('racas as r', 'r.id', 'pets.raca_id')
                    ->where('cliente_id', $id)
                    ->select('r.nome as raca', 'pets.nome as nome', 'pets.id as pet_id')
                    ->get();
        return response()->json($pets);
    }
}
