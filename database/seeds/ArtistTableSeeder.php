<?php

use Illuminate\Database\Seeder;

class ArtistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('artists')->insert(array(
            array('artistName'    => 'Luis Miguel'),
            array('artistName'    => 'Romeo Santos'),
            array('artistName'    => 'Maná'),
            array('artistName'    => 'AC/DC'),
            array('artistName'    => 'Aerosmith'),
            array('artistName'    => 'Jerry Rivera'),
            array('artistName'    => 'Victor Manuelle'),
            array('artistName'    => 'Luis Enrique'),
            array('artistName'    => 'Bryan Adams'),
            array('artistName'    => 'Marco Antonio Solís'),
            array('artistName'    => 'Ricardo Arjona'),
            array('artistName'    => 'Christina Aguilera'),
            array('artistName'    => 'Don Omar'),
            array('artistName'    => 'Pitbull')
        ));
    }
}
