import React, {Component } from 'react';
import {useRouter} from 'next/router';
import {useState} from 'react';

 const countries = [{
    label: 'us',
    name: 'United States'
    },{
        label: 'in',
        name: 'India'
    },
    {
        label: 'br',
        name: 'Brazil'
    }
];


const Header = () => { 

    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState(router.query.country);  

    const onChange = (event) =>{
        event.persist();
        setSelectedCountry(event.target.value);
        router.push(`/[country]`,`/${event.target.value}`); 
    };
    const renderOptions = () =>{
        return countries.map(country =>{
            return <option className="country_option" key={country.label} value={country.label}>{country.name}</option>
        });
    };

    return(
            <div className="header">
                <select value={selectedCountry} onChange={onChange}>
                    {renderOptions()}
                </select>
            
                <style jsx>{`
                    .header{
                        padding: 10px;
                        background-color: #333;
                        color: #fff;
                        text-align: center;
                        margin-bottom: 7px;
                    }

                    .header > :globle(country_option){
                        width: 60px;
                    }

                `}</style>
            </div>
    );
    
} 

export default Header;