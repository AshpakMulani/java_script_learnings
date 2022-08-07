/*
We need to create following item in DOM runtime and add it under <div class="getBoundingClientRect">

<div class="tength_container hide">
<img src="https://source.unsplash.com/random/?dark-technology" alt="technology">
<p>
    tength : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices viverra tortor, eu consequat urna porta nec. Duis risus lorem, blandit sed nulla non, consequat porta justo. Nulla feugiat vulputate sagittis. Aliquam vel odio enim. Donec id maximus ante, nec vestibulum urna. Nulla pulvinar iaculis nibh, in vestibulum neque commodo ac. Fusce ac arcu vel felis lobortis hendrerit et a libero. Duis non arcu ex. Suspendisse tempor lectus ac arcu ultrices, vel semper lorem commodo. Donec faucibus vel turpis in ultrices.
</p>
</div>
*/

//new div tag
const mainElement = document.createElement('div');
// add class name to div tag
mainElement.className = 'tength_container hide';

// create image tag with src and alt attributes
const image = document.createElement('img');
image.setAttribute('src','https://source.unsplash.com/random/?dark-technology');
image.setAttribute('alt','technology');

//create p tag with text contents 
const para = document.createElement('p');
para.textContent = "tength : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices viverra tortor, eu consequat urna porta nec. Duis risus lorem, blandit sed nulla non, consequat porta justo. Nulla feugiat vulputate sagittis. Aliquam vel odio enim. Donec id maximus ante, nec vestibulum urna. Nulla pulvinar iaculis nibh, in vestibulum neque commodo ac. Fusce ac arcu vel felis lobortis hendrerit et a libero. Duis non arcu ex. Suspendisse tempor lectus ac arcu ultrices, vel semper lorem commodo. Donec faucibus vel turpis in ultrices."

//add image and p tag to parent div
mainElement.appendChild(image);
mainElement.appendChild(para);

console.log(`create item main_element : ${mainElement.innerHTML}`);

const parentElement = document.querySelector(".getBoundingClientRect");
// add runtime created div element to existing element with class name .getBoundingClientRect"
parentElement.appendChild(mainElement);




