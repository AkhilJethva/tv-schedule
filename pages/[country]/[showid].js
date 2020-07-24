import React, {Component} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast'; 
import Error from 'next/error';

class ShowDetails extends Component{

    static async getInitialProps(props){
        try{
            const showid = props.query.showid; 
            const res = await axios.get(`https://api.tvmaze.com/shows/${showid}?embed=cast`);
            console.log(res.data);
            return { show: res.data};
        }catch(err){
            return { errorCode: err.response ? err.response.status : 500 };
        }
        
    }

    render(){
        const errorCode = this.props.errorCode;
        
        if(errorCode){
            return <Error statusCode={errorCode} >There is an error</Error>;
        }
        const {name, summary, _embedded} = this.props.show;
        const image = (this.props.show.image.original || undefined);
       
        return(
            <div className="showdetails container">
                
                <div className="row">
                    <img src={image} className="showdetails_poster col-4" ></img>
                    <div className="col-8">
                        <h1 className="showdetails_name">{name}</h1>
                        { parse(summary)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">

                     { _embedded.cast.length> 0 && <Cast cast={_embedded.cast} />}
                    </div>
                </div>    
                  
                <style jsx>{`
                    
                    .container{ 
                        margin:auto;
                        display: grid;
                        width: 95%;
                       
                      
                    }
                    .col-4{
                        width: 30%;
                        float: left;
                        padding:10px;
                       
                        
                    }
                    .col-8{
                        flaot: left;
                        width: 66%;
                        padding-left : 10px;
                        margin: auto;
                        
                    }
                    .row::after {
                        content: "";
                        clear: both;
                        display: table;
                      }
                    @media screen and (max-width: 500px) {
                        .col-8{
                            flaot: bottom;
                            width: 100%;
                            padding-left : 10px;
                            margin: auto;
                            
                        }
                    }
                                    
                `}</style> 
            </div>
        );
    }
}

export default ShowDetails;
