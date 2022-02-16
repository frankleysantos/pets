<?php

namespace App\Http\Controllers;

use App\Models\Especie;
use Illuminate\Http\Request;

class EspecieController extends Controller
{
    public function index()
    {
        return view('especie.index');
    }
    public function show()
    {
        $especies = Especie::with(['racas'])->get();
        return response()->json($especies);
    }

    public function store(Request $request)
    {
        Especie::create($request->except(['id']));
        $especie = [
            'nome' => $request->nome,
            'id' => $request->id,
        ];
        return response()->json($request);
    }
}
