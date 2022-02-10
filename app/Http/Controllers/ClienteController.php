<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    
    public function index()
    {
        return view('cliente.index');
    }


    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {

        if(!$request->id){
            $cliente = Cliente::create($request->all());
        }else{

            $cliente = Cliente::where('id', $request->id)->update([
                'bairro' => $request->bairro,
                'cep' => $request->cep,
                'cidade' => $request->cidade,
                'email' => $request->email,
                'estado' => $request->estado,
                'nome' => $request->nome,
                'rua' => $request->rua,
                'telefone' => $request->telefone,
            ]);
        }
            
        
        return response()->json($cliente, 200);
    }

  
    public function show(Request $request)
    {
        $cliente = Cliente::where('telefone', $request->telefone)->first();
        return response()->json($cliente);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
