<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $table = 'songs';

    public function album(){
        return $this->hasOne('App\Models\Album');
    }
}
