<?php

namespace App\Http\Controllers;

use App\Models\Especie;
use Illuminate\Http\Request;

class EspecieController extends Controller
{
    public function show()
    {
        $especies = Especie::with(['racas'])->get();
        return response()->json($especies);
    }
}
