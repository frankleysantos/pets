<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErrorController extends Controller
{
    public function erro($erro_id) 
    {
        if ($erro_id == 404) {
            return view('errors.404');
        }
    }
}
