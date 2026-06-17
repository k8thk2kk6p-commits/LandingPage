'use strict'

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

sliderImagesArr.forEach((slide) => {

    const selectSlideBtn = document.createElement('div')
    selectSlideBtn.className = "select-slide-button"

    selectSlideBtn.onclick = () => userSelectNewSlide(slide)
    selectSlidePointsArr.push(selectSlideBtn)

})

console.log( Date.now())

const minuteMilliseconds = 1000 * 60
const hourMilliseconds = minuteMilliseconds * 60
const dayMilliseconds = hourMilliseconds * 24

const endSaleTime = Date.now() + 4 * dayMilliseconds
console.log( endSaleTime )

console.log(endSaleTime - Date.now())
