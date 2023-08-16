import './less/index.less'

// Your code goes here!
const counterElement = document.getElementById('counter');

let images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('mouseover', (image) => {
        (image.target.classList.add('Big'))
    })
})
images.forEach(image => {
    image.addEventListener('mouseleave', (image) => {
        (image.target.classList.remove('Big'))
    })
})
let counterValue = 0
document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 32) {
        evt.preventDefault()
        counterValue++;
        counterElement.textContent = counterValue;
        if (counterValue > 149){counterValue = 0}
    }
})
let home = document.querySelector('.homelink')
console.log(home)
const targetElh = document.querySelector('header')
const targetposh = targetElh.offsetTop;
home.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: targetposh,
        behavior: 'smooth'
    })
})
const about = document.querySelector('.aboutlink')
const targetEla = document.querySelector('#abouttext')
const targetpoa = targetEla.offsetTop;
about.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: targetpoa,
        behavior: 'smooth'
    })
})
const blog = document.querySelector('.bloglink')
const targetelb = document.querySelector('#blog')
const targetpob = targetelb.offsetTop;
blog.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({
        top: targetpob,
        behavior: 'smooth'
    })
})
const contact = document.getElementsByClassName("contactlink")
console.log(contact[0])
document.addEventListener("DOMContentLoaded", function() {

  
    contact[0].addEventListener("click", function() {
      const recipient = "wearycodes@gmail.com";
      const subject = "Hello from your website!";
      const body = "Write your email content here.";
  
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the default email client with the pre-filled fields
      window.location.href = mailtoLink;
    });
  });