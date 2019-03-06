import React from 'react'
import{connect} from "react-redux"

class SongDetail extends React.Component{
    render(){
        if(this.props.yangDiselect ==null){
            return <div><h1>Select Song</h1></div>
        }

        return(
            <div>
                <h1>{this.props.yangDiselect.title}</h1>
                <h1>{this.props.yangDiselect.artist}</h1>
                <h1>{this.props.yangDiselect.duration}</h1>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{yangDiselect: state.selectedSong}
}


export default connect(mapStateToProps)(SongDetail)