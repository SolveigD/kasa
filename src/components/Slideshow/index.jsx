import ArrowLeft from '../../assets/ArrowLeft.svg';
import ArrowRight from '../../assets/ArrowRight.svg';
import { useState } from "react";
import '../../sass/components/Slideshow.scss'

function Slideshow({logementData}) {
    console.log(logementData);
    
    const totalImages = logementData.pictures.length;
    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
    };
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container">
            <div className='arrow_container'>
                <img src={ArrowLeft}  className='arrow_left' onClick={prevSlide} />
                <img src={ArrowRight}  className='arrow_right' onClick={nextSlide} />
            </div>

            {logementData.pictures.map((picture, index) => (
                index === currentIndex && (
                    <img key={index} src={picture} className='currentImage' alt={`Image ${index}`} />
                )
            ))}

            <div className='page_counter'><span>{currentIndex + 1}</span>/<span></span>{totalImages}</div>
        </div>
            
    )
}

export default Slideshow;