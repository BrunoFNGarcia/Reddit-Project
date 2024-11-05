// {props.isGallery && Object.values(props.gallery).map(image => {
//     return (
//         <div className="PostsSliderGallery" key={image.id}>
//             <img
//                 className="PostsSliderGalleryImages"
//                 src={image.s.u.split('?')[0].replace('preview', 'i')}
//                 alt='Test'
//             />
//         </div>
//     )
// })}

import './Gallery.css';
import React, { useState } from "react";

function Gallery(props) {
    const imagesUrls = props.keys.map(key => props.gallery[key].s.u.split('?')[0].replace('preview', 'i'));
    // const imagesUrls = props.keys.map(key => props.gallery[key].s.u.split('?')[0].replace('preview', 'i'));
    const [currentUrl, setCurrentUrl] = useState([0, imagesUrls[0]]);
    // props.keys.map(key => console.log(props.gallery[key].s.u.split('?')[0].replace('preview', 'i')));
    // console.log(currentUrl);

    return (
        <div>
            {currentUrl[0] > 0 &&
                <svg 
                    id='LeftArrow'
                    onClick={() => setCurrentUrl(prev => [prev[0] - 1, imagesUrls[prev[0] - 1]])}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    class="bi bi-arrow-right-circle" 
                    viewBox="0 0 16 16"
                    alt='previous image arrow'
                >
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            }
            {currentUrl[0] < imagesUrls.length - 1 &&
                <svg 
                    id='RightArrow'
                    onClick={() => setCurrentUrl(prev => [prev[0] + 1, imagesUrls[prev[0] + 1]])}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    class="bi bi-arrow-right-circle" 
                    viewBox="0 0 16 16"
                    alt='next image arrow'
                >
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            }
            <img 
                className="GalleryImage"
                src={currentUrl[1]}
                alt={currentUrl[1]} 
            />
        </div>
    )
};

export default Gallery;