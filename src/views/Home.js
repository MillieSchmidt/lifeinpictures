import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ pictures }) => {

    const albums = pictures.map((pic) => {
        return(
            <figure key={pic.id} className="col-sm-3 col-6 d-flex flex-row justify-content-center" style={ {height: 14 + 'rem'} }>
                <Link to={`/${pic.path}`} className="link mb-3">  
                    <img src={pic.src} alt={pic.alt} style={ {width: 100 + '%', height: 100 + '%'} }
                        className="img-thumbnail expand mx-0"></img>
                    <figcaption className="text-center"><strong>{pic.album}</strong></figcaption>
                </Link>
            </figure>
        );
    });
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row gallery-row">
                    {albums}
                </div>
            </div>
        </div>
    );
}

export default Home;