<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'albums';

    public function artist(){
        return $this->hasOne('App\Models\Artist');
    }
}
