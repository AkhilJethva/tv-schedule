import React, { Component} from 'react';
import './styles.scss';

class Thumbnail extends Component{
    render(){
        const {imageUrl, caption} = this.props; 
        return (
            <div className="thumbnail">
                <img src={imageUrl} className="thumbnail_image"/>
                <h3 className="thumbnail_caption">{caption}</h3>

               
            </div>
        );
    }
}



export default Thumbnail;