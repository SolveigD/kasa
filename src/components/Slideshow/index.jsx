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
                <img src={ArrowLeft}  className='arrow_left' onClick={prevSlide} alt='fleche gauche'/>
                <img src={ArrowRight}  className='arrow_right' onClick={nextSlide} alt='fleche droite' />
            </div>
            <div className='totalimage'>
                            {currentIndex + 1}/{totalImages}
                        </div>

            {logementData.pictures.map((picture, index) => (
                index === currentIndex && (
                    <img key={index} src={picture} className='currentImage' alt={`logement ${index}`} />
                )
            ))}
                        <div className='totalimage'>
                            {currentIndex + 1}/{totalImages}
                        </div>
            
        </div>
            
    )
}

export default Slideshow;