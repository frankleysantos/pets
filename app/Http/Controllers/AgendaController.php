<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

class AgendaController extends Controller
{
    public function show($data) 
    {
        $agendados = DB::table('agendas as ag')
                            ->join('pets as p', 'ag.pet_id', 'p.id')
                            ->join('servicos as serv', 'ag.servico_id', 'serv.id')
                            ->where('data', $data)
                            ->select('p.nome as pet', 'serv.nome as servico', 'ag.hora as hora', 'ag.observacao as observacao', 
                                    'ag.status as status', 'ag.data as data', 'ag.pet_id as pet_id', 
                                    'ag.id as agenda_id',   'serv.executado_por as executado_por'
                            )
                            ->orderBy('ag.hora', 'ASC')
                            ->get();
        return response()->json($agendados);
    }

    public function store(Request $request) 
    {
        $agendamento = DB::table('agendas')->insert([
            'pet_id' => $request->pet_id,
            'servico_id' => $request->servico_id,
            'data' => $request->data,
            'hora' => $request->hora,
            'observacao' => $request->observacao, 
        ]);
        return response()->json($agendamento);
    } 

    public function agendaPet($pet_id) 
    {
        $agendamento = DB::table('agendas as ag')
                            ->join('pets as p', 'ag.pet_id', 'p.id')
                            ->join('servicos as serv', 'ag.servico_id', 'serv.id')
                            ->where('p.id', $pet_id)
                            ->select('p.nome as pet', 'serv.nome as servico', 'ag.data as data', 'ag.hora as hora', 'ag.observacao as observacao', 'ag.id as agenda_id', 'ag.status as status')
                            ->orderBy('ag.data', 'desc')
                            ->get();
        return response()->json($agendamento);
    } 

    public function alterarStatus(Request $request) 
    {
        $agendamento = DB::table('agendas')
                            ->where('id', $request->agenda_id)
                            ->update([
                                'status' => $request->status
                            ]);
        return response()->json($request->all());
    }
}
