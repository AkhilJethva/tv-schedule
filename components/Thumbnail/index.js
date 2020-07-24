import React, { Component} from 'react';

import Link from 'next/link';


class Thumbnail extends Component{
    render(){
        const {imageUrl = "https://via.placeholder.com/210x295?text=not%20availble",
                 caption,
                herf = "",
                as = "",
                small = false    
            } 
            = this.props; 
        return (
            <div className="thumbnail">
                <Link href={herf} as={as}><a>
                    <img src={imageUrl} className="thumbnail_image"/>
                    <h3 className="thumbnail_caption">{caption}</h3>
                </a></Link>
                <style jsx>{`
                    .thumbnail_image{
                        width: ${small?'100px':'100%'};
                        
                    }
                    .thumbnail_caption{
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}



export default Thumbnail;