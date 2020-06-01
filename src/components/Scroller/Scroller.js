import React, { useEffect } from 'react';

import '../../scss/bem/Scroller.scss';

/*

Scroller calculation notes:
===========================

1. The 'scroller' div is 790px in total height.
2. The 'scroller__thumb' div can reach a maximum of 788px in height.
3. At the smallest point, the 'scroller__thumb' div will need a minimum height
   of 40px (ideally, but this can be improved later if necessary).
4. The 'galleryRows' prop will determine how tall (in rows) the ImageGallery will be. It is
   rounded up to the nearest integer.
5. Using the 'galleryRows' prop, the 'scroller__thumb' div will need some 'dynamic styles'
   adding to it upon rendering. The default height of 40px can be replaced with this
   new calculation.

Scroller event notes:
=====================

1. The 'scroller__thumb' div will need a dynamic position, based on props passed down
   from the Favourites and ImageGallery component.
2. In return, the 'scroller__thumb' div will need to control the scrolling of the
   ImageGallery when it is clicked and dragged up and down, sending the coordinates back
   to the parent element.
3. In summary, this is a two-way communication. The Redux store may come in handy here.

*/


const Scroller = ({ scrollTop }) => {

   useEffect(() => {
      // Calculate scroller__thumb height after render:
      const gallery = document.querySelector('.image-gallery__gallery');
      const visibleArea = 790;
      const contentHeight = gallery.scrollHeight;
      const scrollerPercentage = (visibleArea / contentHeight) * 100;
      // Height is calculated from this resulting percentage minus 2px.
      // The scroller__thumb is always 2px less in height than its container:
      const scrollerThumb = document.querySelector('.scroller__thumb');
      scrollerThumb.style.height = `calc(${scrollerPercentage}% - 2px)`;

      // what is the contentHeight percentage of the visibleArea;
      // once the scale 
   }, [scrollTop]);

   console.log(scrollTop);

   return (
      <div className="scroller">
         {/*
            Style Note - scrollTop determines the position of the scroller__thumb.
            1px added to keep a 1px margin from the top of its container:
         */}
         <div className="scroller__thumb" style={{ top: `calc(${scrollTop + 1}px)` }}></div>
      </div>
   );
};

export default Scroller;