@extends('layouts.app')
@section('content')
<pet-prontuario-component :pet_id="{{$pet_id}}" :agenda_id="{{$agenda_id}}"></pet-prontuario-component>
@endsection