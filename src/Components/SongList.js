import React,{Component} from 'react'
import{connect} from 'react-redux'

import{selectSong} from "../actions"
import{selectArtist} from '../actions'

class Songlist extends React.Component{
renderList=()=>{
    return this.props.songs.map((song)=>{
        return(
            <div className="d-flex justify-content-between border-bottom mb-1"key={song.title}>
            <div>{song.title}</div>
            <button className="btn btn-outline-primary my-2" 
            onClick={()=>{this.props.selectSong(song)}}
            >Select Song</button>
            <button className="btn btn-outline-primary my-2" 
            onClick={()=>{this.props.selectArtist(song)}}
            >Select Artist</button>
            </div>
            
            
    )

    })
}

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }

}

const mapStatetoProps =(state)=>{
    return {songs:state.songs}
}

export default connect(mapStatetoProps,{selectSong,selectArtist})(Songlist);