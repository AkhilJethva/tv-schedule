import React, {Component} from 'react';
import Thumbnail from '../Thumbnail';

class Cast extends Component{

    renderCast = () =>{
        const {cast} = this.props;
        return cast.map((castItem, index)=>{
            const {image, name} = castItem.person;
            return(
                <li key={index}>
                    <Thumbnail
                          imageUrl={(image && image.medium) || undefined} 
                          caption={name}
                          small={true}
                    />
                </li>
            );
        })
    };


    render(){
        return(
            <div className="cast">
                <h3>Cast</h3>
                <ul className="cast_list">
                    {this.renderCast()}
                </ul>
                <style jsx>{`
                    .cast_list{
                        
                        display: flex;                      
                        padding: 0;
                        overflow-x: auto;
                        width: 1400px;
                        margin: 0;
                        background-color: ciyan;
                        list-style-type: none;
                    }
                    .cast_list > :global(li){
                        margin-right: 10px;
                    }
                `}</style>
                
            </div>
        );
    }
}

export default Cast;