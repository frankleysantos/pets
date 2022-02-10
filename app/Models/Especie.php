<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Especie extends Model 
{

    protected $table = 'especies';
    protected $fillable = ['nome'];
    public $timestamps = true;

    public function racas() {
        return $this->hasMany(Raca::class);
    }
}