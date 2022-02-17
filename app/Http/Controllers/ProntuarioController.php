<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProntuarioController extends Controller
{
    public function index($pet_id)
    {
        return view('pet.prontuario.index', compact('pet_id'));
    }
}
