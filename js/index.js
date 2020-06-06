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

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//Nav Insert
// document.body.children[0].children[1].setAttribute('href', 'foo')





// var navBar = document.body.children[0].children[1]
// navBar.children[0].textContent = potato







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

const navBar = document.querySelector('nav').querySelectorAll('a');
console.log(navBar)
navBar.forEach((element, i) => {
  // if (i !== 0 && i !== 7)
    element.textContent = siteContent.nav[`nav-item-${i+1}`];
  element.style.color = "green";
});






// const links = document.querySelector('nav').querySelectorAll('a')
// let links = .map((url, i) `<a href="${navBar}">Link#${i + 1}</a>`);




// // my two nav items
// let nav = document.getElementsByTagName('nav')[0];

// let navItem1 = document.createElement('a');
// navItem1.textContent = 'FAQ';
// navItem1.style.color = 'green';
// nav.prepend(navItem1);

// let navItem2 = document.createElement('a');
// navItem2.textContent = 'Help';
// navItem2.style.color = 'green';
// nav.appendChild(navItem2);