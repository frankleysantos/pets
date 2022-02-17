@extends('layouts.app')
@section('content')
<pet-historico-component :pet_id="{{$pet_id}}"></pet-historico-component>
@endsection