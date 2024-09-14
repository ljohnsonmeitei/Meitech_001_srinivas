import React, {useState, useEffect} from 'react'
import './corousel.css'

const images = [
    {src:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', title:'new Slide 1'},
    {src:'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ', title:'new Slide 2'},
    {src:'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w', title:'new Slide 3'}
];

const Carousel = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInteval = 2000;

  const handlePre =()=>{
    setCurrentSlide((previous) => (previous-1 + images.length) % images.length);
  }

  const handleNxt =()=>{
    setCurrentSlide((previous) => (previous+1) % images.length);
  }

  useEffect(() =>{
    const interval = setInterval(() => {
        handleNxt();
    }, slideInteval);

    return() => clearInterval(interval);
  },[]);

  return (
    <div className='carcontent' >
        <div >
            <img
                src={images[currentSlide].src}
                alt={images[currentSlide].title}
                style={{width: '100%', borderRadius: '8px', height: '700px'}} />
        </div>
        

        <div className='buttonNav'>
            <button onClick={handleNxt} className='buttonCar'>Next</button>            
            <button onClick={handlePre} className='buttonCar'>Previous</button>
        </div>
    </div>
  );
}

export default Carousel