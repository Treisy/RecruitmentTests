<?php

use Illuminate\Database\Seeder;

class AlbumTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('albums')->insert(array(
            array(  'albumName' => 'Voy a apagar la luz/',
                    'artist_id' => 1),
            array(  'albumName' => 'El Concierto',
                    'artist_id' => 1),
            array(  'albumName' => 'Fórmula, Vol.2',
                    'artist_id' => 2),
            array(  'albumName' => 'Sueños líquidos',
                    'artist_id' => 3),
            array(  'albumName' => 'Cuando los ángeles lloran',
                    'artist_id' => 3),
            array(  'albumName' => 'High voltage',
                    'artist_id' => 4),
            array(  'albumName' => 'Big ones',
                    'artist_id' => 5),
            array(  'albumName' => 'Tough Love: Best Of The Ballads',
                    'artist_id' => 5),
            array(  'albumName' => 'Cuenta Conmigo',
                    'artist_id' => 6),
            array(  'albumName' => 'Cara de Niño',
                    'artist_id' => 6),
            array(  'albumName' => 'Ironias',
                    'artist_id' => 7),
            array(  'albumName' => 'A pesar de todo',
                    'artist_id' => 7),
            array(  'albumName' => 'Mis favoritas',
                    'artist_id' => 8),
            array(  'albumName' => 'So far so good',
                    'artist_id' => 9),
            array(  'albumName' => 'Trozos de mi alma',
                    'artist_id' => 10),
            array(  'albumName' => 'Historias',
                    'artist_id' => 11),
            array(  'albumName' => 'Quien dijo ayer',
                    'artist_id' => 11),
            array(  'albumName' => 'Mi reflejo',
                    'artist_id' => 12),
            array(  'albumName' => 'King of Kings',
                    'artist_id' => 13),
            array(  'albumName' => 'Globalization',
                    'artist_id' => 14),


        ));
    }
}
