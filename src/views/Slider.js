import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';

const Slider = ({ clickedPicId, album, selectedAlbum }) => {
    
    let [counter, setCounter] = useState(clickedPicId);
    const length = album.length;
    let startPosition = 0;
    let prevPosition = 0;
    let movedBy = 0;

    function touchStart(event) {
        startPosition = event.touches[0].clientX;
    }

    function touchMove(event) {
        const currentPosition = event.touches[0].clientX;
        movedBy = prevPosition + currentPosition - startPosition;
    }

    function touchEnd() {
        if (movedBy < -100 && counter <= length - 1) {
            setCounter(counter === 0 ? counter = length - 1 : counter - 1);
        }

        if (movedBy > 100 && counter >= 0) {
            setCounter(counter === length - 1 ? counter = 0 : counter + 1);
        }
    }

    const picture = album.map((pic) => {
        return(
            <div className={album[counter].id === pic.id ? "pic-container active" : "pic-container"} key={pic.id}>
                <div className="cancel"><Link to={`/${selectedAlbum}`} className="cancel-link"><FaTimes /></Link></div>
                <img src={`../${pic.src}`} alt={pic.alt} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}></img>
                <p className="text-white text-center px-5 pt-2">{pic.caption}</p>
            </div>
        );
    })

    const prevPic = () => {
        setCounter(counter === 0 ? counter = length - 1 : counter - 1);
    }

    const nextPic = () => {
        setCounter(counter === length - 1 ? counter = 0 : counter + 1);
    }

    return(
        <div>
        <div className="wrapper">
            <FaAngleRight className="prev" onClick={prevPic}></FaAngleRight>
            <div className="slider">
                {picture}
            </div>
            <FaAngleLeft className="next" onClick={nextPic}></FaAngleLeft>
        </div>
        </div>
    );
}

export default Slider;