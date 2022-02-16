<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Raca extends Model 
{

    protected $table = 'racas';
    protected $fillable = ['id', 'nome', 'especie_id'];
    public $timestamps = true;

}