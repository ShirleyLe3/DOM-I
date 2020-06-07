const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])





// const aNode = document.createElement('a');
// const a = document.createTextNode('New Item 1');
// aNode.appendChild(a);
// document.getElementsByTagName('nav').appendChild(aNode);

// const parent = document.querySelector('nav');
// var b = document.createElement('a');
// parent.prepend('First A', a);

// let h1Cta = document.querySelector("h1");
// h1Cta.textContent = siteContent.cta.h1;
// h1Cta.setAttribute('style', 'width: 40%');
//              alert for changes

// const paragraphs = document.getElementsByTagName("p");
// // paragraphs[0] is the first <p> element
// // paragraphs[1] is the second <p> element, etc.
// alert(paragraphs[0].nodeName);


//Nav Insert
// document.body.children[0].children[1].setAttribute('href', 'foo')

//     Nav Links
const navLinks = document.querySelector('nav').querySelectorAll('a');
console.log(navLinks)
navLinks.forEach((element, i) => {
    element.textContent = siteContent.nav[`nav-item-${i+1}`];
  element.style.color = "green";
});

// Nav image
// const navImg = document.querySelector('nav').querySelectorAll('a');







//        Title Container
const titleText = document.getElementsByClassName('cta-text');
console.log(titleText);

const titleImg = document.getElementsByIdName('cta-img');
titleImg.setAttribute('src', 'header-img.png');



//         Main Content
const content1 = document.getElementsByClassName('top-content').querySelector('div');

const middleImg = document.querySelector('middle-img');
middleImg.setAttribute('src', 'mid-page-accent.jpg');


const content2 = document.getElementsByClassName('bottom-content').querySelector('div');






//          Contact
const contact = document.querySelector('nav').querySelectorAll('a');



//          Footer
const footer = document.querySelector('list-group-item: last-child');

.querySelector('p');