<?php

use Illuminate\Database\Seeder;

class SongTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('songs')->insert(array(
            array(  'songName' => 'Voy a apagar la luz/ Contigo aprendí',
                    'url'      => 'https://www.youtube.com/watch?v=WqjsRVtxPME',
                    'album_id' => 1),
            array(  'songName' => 'Sabor a mi',
                    'url'      => 'https://www.youtube.com/watch?v=CnNFKNdgxXI',
                    'album_id' => 1),
            array(  'songName' => 'Por debajo de la mesa',
                    'url'      => 'https://www.youtube.com/watch?v=giAE7Yz7gHI',
                    'album_id' => 1),
            array(  'songName' => 'La gloria eres tú',
                    'url'      => 'https://www.youtube.com/watch?v=oGVUbUa9TGc',
                    'album_id' => 1),
            array(  'songName' => 'Luz Verde',
                    'url'      => 'https://www.youtube.com/watch?v=c2dr5qjpwAY',
                    'album_id' => 2),
            array(  'songName' => 'Pensar en ti',
                    'url'      => 'https://www.youtube.com/watch?v=jIqJfV8neq0',
                    'album_id' => 2),
            array(  'songName' => 'Dame tu amor',
                    'url'      => 'https://www.youtube.com/watch?v=lrqpWJQP9CM',
                    'album_id' => 2),
            array(  'songName' => 'Hechicera',
                    'url'      => 'www.youtube.com/watch?v=oO4003w-bKI',
                    'album_id' => 3),
            array(  'songName' => 'Un lobo por tu amor',
                    'url'      => 'www.youtube.com/watch?v=JHy3BeBCz_c',
                    'album_id' => 3)
        ));
    }
}
