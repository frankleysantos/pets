<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PetCliente extends Model 
{

    protected $table = 'pets_clientes';
    public $timestamps = true;
    protected $fillable = array('pet_id');

}