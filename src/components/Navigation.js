import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = ({ gallery }) => {

    const location = useLocation().pathname;    
    let albumName = '';
    let albumPath = '';

    gallery.map((album) => {
        if (location.includes(album.path)) {
            albumName += album.album;
            albumPath += album.path;
            return true;
        } else {
            return false;
        }
    });

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>עמוד הבית</Link></BreadcrumbItem>
                <BreadcrumbItem>&nbsp;&nbsp;{albumPath !== '' && location.includes(albumPath) ? <div>{albumName}</div> : "מה רואים פה?"}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default Navigation;