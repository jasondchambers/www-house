

const containers = document.querySelectorAll('.container');
containers.forEach((container, index) => {
   container.querySelector('.slider').addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
   });
});

/*
const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
*/

/* 


    <script>
        // Get references to the range input elements and the before image elements
        const sliders = document.querySelectorAll('.slider');
        const beforeImages = document.querySelectorAll('.before-img');

        // Loop through all sliders and add event listeners
        sliders.forEach((slider, index) => {
            slider.addEventListener('input', function () {
                // Update the width of the corresponding before image based on the slider value
                beforeImages[index].style.width = slider.value + "%";
*/
