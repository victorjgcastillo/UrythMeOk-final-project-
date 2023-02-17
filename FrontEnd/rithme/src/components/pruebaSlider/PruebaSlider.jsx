// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// // import "./Slider.scss";

// function PruebaSlider() {
//   const [artists, setArtists] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const sliderRef = useRef();

//   useEffect(() => {
//     axios.get("http://localhost:5000/artists")
//       .then(response => {
//         setArtists(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handlePrevious = () => {
//     const index = currentIndex === 0 ? artists.length - 1 : currentIndex - 1;
//     setCurrentIndex(index);
//   };

//   const handleNext = () => {
//     const index = currentIndex === artists.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(index);
//   };

//   const handleTouchStart = e => {
//     setIsDragging(true);
//     setStartX(e.touches[0].clientX);
//   };
// const handleTouchMove = e => {
//     if (!isDragging) return;
//     const currentX = e.touches[0].clientX;
//     const diff = currentX - startX;
//     sliderRef.current.style.transform = translateX(${diff}px);
//   };

//   const handleTouchEnd = e => {
//     setIsDragging(false);
//     const currentX = e.changedTouches[0].clientX;
//     const diff = currentX - startX;
//     if (diff > 100 && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else if (diff < -100 && currentIndex < artists.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//     sliderRef.current.style.transform = "";
//   };

//   return (
//     <div className="slider">
//       <button className="previous" onClick={handlePrevious}>
//         Previous
//       </button>
//       <button className="next" onClick={handleNext}>
//         Next
//       </button>
//       <div
//         className="slides"
//         ref={sliderRef}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {artists.map((artist, index) => (
//           <div
//             key={artist.id}
//             className={slide ${index === currentIndex ? "active" : ""}}>
//             <img src={artist.img} alt={artist.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PruebaSlider;