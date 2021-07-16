import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Gallery = ({ albumArray, pictures }) => {

    const location = useLocation().pathname;
    let albumTitle = '';
    let albumDescription = '';

    const gallery = albumArray.map((pic) => {
        return(
            <figure key={pic.id} className="col-sm-2 d-flex flex-row justify-content-center gallery-figure">
                <Link to={`/${pic.path}/${pic.id}`} className="d-flex justify-content-center align-items-center">
                    <img src={pic.src} alt={pic.alt} className=""></img>
                </Link>
            </figure>
        );
    });

    pictures.map((album) => {
        if (`/${album.path}` === location) {
            albumTitle += album.album;
            albumDescription += album.description;
            return true;
        } else {
            return false;
        }
    });

    return(
        <div>
            <div className="text-center">
                <h1 className="mb-0">{albumTitle}</h1>
                <p className="mb-3">{albumDescription}</p>
            </div>

            <div className="container px-5 d-flex justify-content-center">
                <div className="row gallery-row d-flex justify-content-center">
                    {gallery}
                </div>
            </div>
        </div>
        
    )
}

export default Gallery;