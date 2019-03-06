import React from 'react'
import{connect} from "react-redux"

class ArtistDetail extends React.Component{
    render(){
        if(this.props.yangDiselect ==null){
            return <div><h1>Select Artist</h1></div>
        }

        return(
            <div>
                <h1>{this.props.yangDiselect.artist}</h1>
                <h1>{this.props.yangDiselect.personel}</h1>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{yangDiselect: state.selectedArtist}
}


export default connect(mapStateToProps)(ArtistDetail)