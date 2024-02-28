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

import { useState } from "react";

function Gallery(props) {
    const imagesUrls = props.keys.map(key => {
        props.gallery[key].s.u.split('?')[0].replace('preview', 'i')
    });
    const [currentUrl, setCurrentUrl] = useState([0, imagesUrls[0]]);

    return (
        <div>
            {currentUrl[0] < imagesUrls.length - 1 &&
                <img 
                    className="RightArrow"
                    onClick={() => setCurrentUrl(prev => [prev[0] + 1, imagesUrls[prev[0] + 1]])}
                    src='../../../Assets/angle-circle-right-icon.png'
                    alt='next image arrow'
                />
            }
            {
                currentUrl[0] > 0 &&
                    <img
                        className="LeftArrow"
                        onClick={() => setCurrentUrl(prev => [prev[0] - 1, imagesUrls[prev[0] - 1]])}
                        src='../../../Assets/angle-circle-right-icon.png'
                        alt='previous image arrow' 
                    />
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