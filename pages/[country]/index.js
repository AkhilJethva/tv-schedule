import React, {Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import Header from '../../components/Header';
import Error from 'next/error';



class CountryTest extends Component{

    static async getInitialProps(props){
        try{
            const country = props.query.country;
            const response = await axios.get(`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
            return {shows: response.data, country: country};
        }catch(err){
            return { statusCode: err.response ? err.response.status : 500 };
        }
        
    }

    renderShows = () => {

        if(this.props.statusCode){
            return <Error statusCode={this.props.statusCode} >There is an error</Error>;
        }

        const shows = this.props.shows;
        return shows.map((showItem, index) => {
            const {show} = showItem;
            
            return(
                <li key={index}>
                    <Thumbnail 
                        imageUrl={(show.image && show.image.medium) || undefined} 
                        caption={show.name}
                        herf = "/[country]/[showid]"
                        as = {`/${this.props.country}/${show.id}`}
                    />
                </li>
            );
        });

    }

    render(){
        return(
        <div className="home">
           
            <ul className="tvshows-grid">
                {this.renderShows()}

                <style jsx>{`
                    .tvshows-grid{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        gap: 20px;
                        padding: 0;
                        margin: 0;
                        background-color: ciyan;
                        list-style-type: none;
                    }
                `}</style>
            </ul>
        </div>
        );
    }
    
}
export default CountryTest;
