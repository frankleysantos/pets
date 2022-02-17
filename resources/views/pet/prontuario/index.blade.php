@extends('layouts.app')
@section('content')
<pet-prontuario-component :pet_id="{{$pet_id}}"></pet-prontuario-component>
@endsection