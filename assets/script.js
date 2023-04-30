const container = document.querySelector('.carousel-container');
const paragraphs = document.querySelector('.paragraphs');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const paragraphWidth = paragraphs.firstElementChild.offsetWidth;
let currentLeft = 0;

prevButton.addEventListener('click', () => {
  currentLeft += paragraphWidth;
  if (currentLeft > 0) {
    currentLeft = -paragraphWidth * (paragraphs.children.length - 1);
  }
  paragraphs.style.transform = `translateX(${currentLeft}px)`;
  hideOtherParagraphs();
});

nextButton.addEventListener('click', () => {
  currentLeft -= paragraphWidth;
  if (currentLeft < -paragraphWidth * (paragraphs.children.length - 1)) {
    currentLeft = 0;
  }
  paragraphs.style.transform = `translateX(${currentLeft}px)`;
  hideOtherParagraphs();
});

function hideOtherParagraphs() {
  const visibleIndex = Math.abs(currentLeft / paragraphWidth);
  const paragraphsArray = Array.from(paragraphs.children);
  paragraphsArray.forEach((paragraph, index) => {
    if (index === visibleIndex) {
      paragraph.classList.add('active');
    } else {
      paragraph.classList.remove('active');
    }
  });
}


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
const navUl=document.querySelector(".nav-ul")
const bars =document.querySelector(".bars");

bars.addEventListener('click',()=>{
  navUl.classList.toggle("show");
  navUl.classList.toggle("nav-ul");

})

const fname =document.querySelector(".fname");
const lname =document.querySelector(".lname");
const email =document.querySelector(".email");
const subject =document.querySelector(".subject");
const message = document.querySelector(".message")
const data = JSON.parse(localStorage.getItem("form"))||[];
const submit = document.querySelector(".submit");
submit.addEventListener('click',()=>{
  const next ="The next new data --->"
const formD = `firs name :${fname.value} last name : ${lname.value} email: ${email.value} subject:${subject.value} message:${message.value}`
data.push(formD);
data.push(next);

console.log(data)
localStorage.setItem("form",JSON.stringify(data));
})



