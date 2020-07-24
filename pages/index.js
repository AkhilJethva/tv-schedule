import React from 'react';
import Link from 'next/link';


const Home = () => (    
    <div className="homepage" 
        style={{
            backgroundColor: "pink",
            width: "100%",
            height:"300px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
        This is home page

        <Link href="/[country]" as="/us">
            <a>Click to next</a>
        </Link>

    </div>
)

export default Home;