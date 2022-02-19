<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HistoricoController extends Controller
{
    public function show($pet_id, $agenda_id)
    {
        // return view('pet.historico.index', compact('pet_id'));
        // return view('pet.prontuario.index', compact('pet_id'));
        return redirect('/prontuario/index/'.$pet_id.'/'.$agenda_id);
    }
}
