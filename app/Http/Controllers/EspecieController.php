<?php

namespace App\Http\Controllers;

use App\Models\Especie;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
class EspecieController extends Controller
{
    public function index()
    {
        $user = (new User)->perfil(Auth::user()->id);
        if($user->perfil === 'veterinario'){
            return view('errors.401');
        }

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
