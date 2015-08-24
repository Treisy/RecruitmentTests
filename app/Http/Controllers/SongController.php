<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Mockery\CountValidator\Exception;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        try{
            $statusCode = 200;
            $songs = DB::table('songs')
                ->join('albums', 'albums.id', '=', 'songs.album_id')
                ->join('artists', 'artists.id', '=', 'albums.artist_id')
                ->get();
        }
        catch (Exception $e){
            $songs = $e;
            $statusCode = 400;
        }

        return response()->json(['data' => $songs], $statusCode);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($data)
    {
        try{
            $statusCode = 200;
            $songs = DB::table('songs')
                ->join('albums', 'albums.id', '=', 'songs.album_id')
                ->join('artists', 'artists.id', '=', 'albums.artist_id')
                ->where('songs.songName', 'LIKE',"%$data%")
                ->orWhere('albums.albumName', 'LIKE', "%$data%")
                ->orWhere('artists.artistName', 'LIKE', "%$data%")
                ->get();
        }
        catch (Exception $e){
            $songs = $e;
            $statusCode = 400;
        }

        return response()->json(['data' => $songs], $statusCode);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
