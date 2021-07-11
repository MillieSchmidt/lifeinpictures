import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import Footer from '../components/Footer';
import Gallery from './Gallery';
import Slider from './Slider';
import About from '../views/About';
import { PICTURES } from '../assets/pictures';
import { GALLERIES } from '../assets/galleries';

const Main = () => {
    
    const galleriesArray = Object.entries(GALLERIES);

    const renderSlider = ({ match }) => {
        
        const album = galleriesArray.filter((m) => m[0] === match.params.albumName);
        const clickedPicId = album[0][1].filter((a) => a.id === parseInt(match.params.picId))[0].id;
        let selectedAlbum = '';

        PICTURES.filter((album) => album.path === match.params.albumName)
                                    .map((album) => {
                                        selectedAlbum = album.path;
                                        return true;
                                    }); // gives back string with album path
        
        return(
            <Slider clickedPicId={clickedPicId} album={album[0][1]} selectedAlbum={selectedAlbum} />
        );
    }

    const renderAlbum = ({ match }) => {

        const album = galleriesArray.filter((m) => m[0] === match.params.albumName);

        if (album.length > 0) {
            return(
                <Gallery albumArray={album[0][1]} pictures={PICTURES} /> // general component receives array of selected album
            );
        } else {
            return(
                <About />
            );
        }
    }

    return (
        <div>
            <Header gallery={PICTURES} />
            <Switch>
                <Route exact path='/home'>
                    <Home pictures={PICTURES} />
                </Route>
                <Route exact path='/:albumName/' component={renderAlbum} />
                <Route exact path='/:albumName/:picId' component={renderSlider} />
                <Route exact path='/about' />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;