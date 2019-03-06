// Bertugas untuk tombol
// type : Register
// payload : (nama:"alvin", uang: 700000)


export const selectSong=(song) =>{
    return({
        type: 'SONG_SELECTED',
        payload :song
    })
        
}

export const selectArtist=(song) =>{
    return({
        type: 'ARTIST_SELECTED',
        payload : song
    })
        
}