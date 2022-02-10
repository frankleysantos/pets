<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Pet extends Model 
{

    protected $table = 'pets';
    public $timestamps = true;
    protected $fillable = ['nome','cliente_id', 'raca_id'];

    public function raca()
    {
        return $this->hasOne(Raca::class, 'id');
    }
}