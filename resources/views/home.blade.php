@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md">
            <div class="card">
                <div class="card-header">Agendamentos - Selecione a data pra ver os agendamentos do dia</div>
                <div class="card-body">
                    <div class="row form-group">
                        <div class="col-md d-flex justify-content-end">
                          <a href="{{url('cliente')}}" class="btn btn-success">Novo Atendimento</a>
                        </div>
                    </div>
                    <agenda-component :perfil="'{{perfil(Auth::user()->id)->perfil}}'" :status="'{{perfil(Auth::user()->id)->status}}'"></agenda-component>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
