import{combineReducers} from "redux"
// pada aplikasi baru berjalan pertama kali, semua reducer akan dijalankan
// ini hanya bertugas memberikan nilai awal berupa list lagu
const songsReducer = () =>{
    return[
        {title:'I will', artist:'The Beatles',duration:'2:05',personel: ["John,Paul,George,Ringo"]},
        {title:'Best Part', artist:'Daniel Cesar',duration:'2:05',personel:["Daniel"]},
        {title:'Shallow', artist:'Lady Gaga,Bradley Cooper',duration:'2:05',personel:["Lady Gaga"]},
        {title:'Cant Take My Eyes Off You', artist:'Frankie Valli',duration:'2:05',personel:["Frankie"]},
        {title:'Penny Lane',artist:'The Beatles',duration:'2:05',personel:["John,Paul,George,Ringo"]},
    ]
}
// Reducer tidak boleh return undefined
const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}





// Artist Detail

const selectedArtistReducer=(selectedArtist=null,action)=>{
    if(action.type==='ARTIST_SELECTED'){
        return action.payload
    }
    return selectedArtist
}

export default combineReducers({
    // key:reducer
    songs:songsReducer,
    selectedSong:selectedSongReducer,
    selectedArtist:selectedArtistReducer
})