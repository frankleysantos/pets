<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use App\Models\Raca;

class PetController extends Controller
{
    public function store(Request $request) {
        
        if($request->id){
            // dd($request->all());
            $cadPet = Pet::where('id', $request->id)->update([
                'nome' => $request->nome,
                'raca_id' => $request->raca,
                'cliente_id' => $request->cliente_id
            ]); 
            $pet_id = $request->id;
            $update = true;
        }else{
            $cadPet = Pet::create([
                'nome' => $request->nome,
                'raca_id' => $request->raca,
                'cliente_id' => $request->cliente_id
            ]);
            $pet_id = $cadPet->id;
            $update = false;
        }
        $raca = Raca::find($request->raca);
        $pet = [
            'nome' => $request->nome,
            'raca' => $raca['nome'],
            'pet_id' => $pet_id,
            'update' => $update
        ];
        return response()->json($pet);
    }

    public function show($id) {
        // $pets = Pet::where('cliente_id', $id)->with(['raca'])->get();
        $pets = Pet::join('racas as r', 'r.id', 'pets.raca_id')
                    ->where('cliente_id', $id)
                    ->select('r.nome as raca', 'pets.nome as nome', 'pets.id as pet_id', 'r.id as raca_id', 'r.especie_id as especie_id')
                    ->get();
        return response()->json($pets);
    }

    public function petInfo($pet_id) 
    {
        $pets = Pet::join('racas as r', 'r.id', 'pets.raca_id')
                    ->join('clientes as c', 'c.id', 'pets.cliente_id')
                    ->where('pets.id', $pet_id)
                    ->select('r.nome as raca', 'pets.nome as nome', 'pets.id as pet_id', 
                            'r.id as raca_id', 'r.especie_id as especie_id',
                            'c.nome as cliente'
                            )
                    ->first();

        return response()->json($pets);
    }

    public function delete($pet_id) 
    {
        $removido = Pet::where('id', $pet_id)->delete();
        return response()->json($removido);
    }
}
