<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Carbon\Carbon;
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
                'html' => $request->html,
                'created_at' => Carbon::now()
            ]);
    
        }else{
            DB::table('prontuarios')->where('id', $prontuario_id)->update([
                'user_id' => Auth::user()->id,
                'agenda_id' => $request->agenda_id,
                'pet_id' => $request->pet_id,
                'descricao' => $request->text,
                'html' => $request->html,
                'updated_at' => Carbon::now()
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

    public function historico($pet_id) 
    {
        $historico = DB::table('prontuarios as pr')
                            ->join('insumos_pets as ip', 'ip.pet_id', 'pr.pet_id')
                            ->select(
                                'pr.descricao as descricao', 'pr.html as html', 
                                'ip.prontuario_id as prontuario_id', 'pr.created_at as created_at'
                            )
                            ->where('pr.pet_id', $pet_id)
                            ->groupBy('pr.descricao', 'pr.html', 'ip.prontuario_id', 'pr.created_at')
                            ->get();  
        $historicos = $historico->groupBy(function ($item) {
            return Carbon::parse($item->created_at)->format('d/m/y H:i');
        });   
        $dados = collect();
        foreach ($historicos as $hist) {
            $dados->push($hist->first()); 
        }   

        return response()->json($dados);
    }
}
