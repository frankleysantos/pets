<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
class ProntuarioController extends Controller
{
    public function index($pet_id, $agenda_id)
    {
        return view('pet.prontuario.index', compact('pet_id', 'agenda_id'));
    }

    public function store(Request $request) 
    {
        $prontuario_id =$request->prontuario_id;
        if ($prontuario_id == null) {
            $prontuario_id = DB::table('prontuarios')->insertGetId([
                'user_id' => Auth::user()->id,
                'agenda_id' => $request->agenda_id,
                'pet_id' => $request->pet_id,
                'descricao' => $request->text,
                'html' => $request->html
            ]);
    
        }else{
            DB::table('prontuarios')->where('id', $prontuario_id)->update([
                'user_id' => Auth::user()->id,
                'agenda_id' => $request->agenda_id,
                'pet_id' => $request->pet_id,
                'descricao' => $request->text,
                'html' => $request->html
            ]);

            DB::table('insumos_pets')->where('prontuario_id', $prontuario_id)->delete();
        }
        
        if($prontuario_id){
            foreach ($request->insumos as $item) {
                DB::table('insumos_pets')->insert([
                    'pet_id' => $request->pet_id,
                    'prontuario_id' => $prontuario_id,
                    'insumo_id' => $item,
                ]);
            }
        }

        $dados = [
            'pet_id' => $request->pet_id,
            'agenda_id' => $request->agenda_id,
            'prontuario_id' => $prontuario_id,
            'insumos' => $request->insumos,
            'descricao' => $request->text,
            'html' => $request->html    
        ];
        
        return response()->json($dados);
    }
}
