import React from 'react';
import './style.css'
import ImageGallery from 'react-image-gallery';

class ProductGallery extends React.Component {

    render() {

        const images = [
            {
                original: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg',
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: 'https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg',
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
            {
                original: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
                thumbnail: "https://paintballs.pl/wp-content/uploads/2016/10/GNTPLEGRIP-2-680x680.jpg",
            },
        ];

        return (

            <div className="container" >
                <ImageGallery
                    showNav={true}
                    thumbnailPosition={"left"}
                    items={images} />
            </div>
        )
    }
}

export default ProductGallery;