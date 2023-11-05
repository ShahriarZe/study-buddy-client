
const Gallery = () => {
    const imageUrls = [
        'https://i.ibb.co/2vV6Twj/g1.jpg',
        'https://i.ibb.co/4fCnYrq/g2.jpg',
        'https://i.ibb.co/72Dg5wr/g3.jpg',
        'https://i.ibb.co/L8cCXRV/g4.jpg',
        'https://i.ibb.co/tBF4LNJ/g5.jpg',
        'https://i.ibb.co/QQPsFkC/g6.jpg',
      ];
      return (
       <div>
        <h1 className='text-4xl font-extrabold mb-5 max-w-7xl mx-auto mt-20 '>Our Student Groups</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 masonry max-w-7xl mx-auto mb-20 lg:mb-40" >
          {imageUrls.map((url, index) => (
            <div key={index} className="w-full relative overflow-hidden rounded-lg masonry-item" data-aos="fade-down" data-aos-duration="3000">
              <img src={url} alt={`Image ${index + 1}`} className="object-cover w-full" />
            </div>
          ))}
        </div>
       </div>
      );
    };

export default Gallery;