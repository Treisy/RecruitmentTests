/**
 * Created by treisyjimenez on 22/8/15.
 */
'use strict';

appServices.factory('SongsService', function ($http) {
    var list = [
        {
            "Url": "http://www.google.com",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        },
        {
            "Url": "http://tinysong.com/vb2H",
            "SongID": 25479197,
            SongName: "Johnny B. Goode",
            "ArtistID": 45,
            "ArtistName": "Chuck Berry",
            "AlbumID": 235469,
            "AlbumName": "Roll Over Beethoven"
        }
    ];

    var listSongs = function() {
        return list;
    };

    var allSongs = function(){
        var songs;
        $http.get('../songs', {

        }).success(function (data) {
            return data;
        });

        console.log(songs);

        return songs;
    };

    return {
        list: listSongs,
        songs: allSongs
    };
});