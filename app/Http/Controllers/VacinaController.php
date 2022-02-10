<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class VacinaController extends Controller
{
    public function index(){
        return view('vacinas.index');
    }

    public function store(Request $request){
        $vacina = $request->all();
        DB::table('vacinas')->insert($vacina);
        return response()->json($vacina);
    }

    public function showVacinas(){
        $vacinas = DB::table('vacinas')->get();
        return response()->json($vacinas);
    }

    public function deletar($id){
        DB::table('vacinas')->where('id', $id)->delete();
        DB::table('paciente_vacinados')->where('vacina_id', $id)->delete();
        return response()->json($id);
    }
}
