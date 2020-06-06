//                 view element

console.log(document.domain);
console.log(document.URL);
console.log(document.title);




//                  get element
var header = document.getElementById('header');
console.log(header);
header.textContent = siteContent;

//                child selector                
var item = document.querySelector('.list-group-item');

var lastItem = document.querySelector('list-group-item: last-child');

var secondItem = document.querySelector('.list-group-item:nth-child(2');
secon



document.body.children[0].children[1].setAttribute('href', 'foo')
                          //or
document.body.children[0].children[1].children[0].href = ''






//                  styling
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.style.borderBottom = 'solid 3px skyblue';

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid';

var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = '2rem';


//             multiple styling
for (var i = 0; i < items.length; i++) {
  items[1].style.backgroundColor = 'light-grey';
}
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "blue";
  even[i].style.backgroundColor = "pink";
}  





//                create element
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.setAttribute('title', 'Hello World');
newDiv.appendChild(newDivText);



//          append multiple DOM Nodes
var divs = Array.from({length:10}) // lets make an array of 10 divs
.map(function(_,i){
var el = document.createElement('div');
    el.textContent = `I am div # ${i}`;
    return el;
});
document.body.append(...divs);
//===================>
//I am div #1
//I am div #2
//I am div #..
//I am div #9



//       Create and place newDiv
var container = document.querySelector('header . container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';







//            Append elements
document.documentElement.lastElementChild.firstElementChild
for (let i=0;i<itemsAll.length;i++) {
     // appending your elements to the body :
     document.body.appendChild(itemsAll[i]);
}

//        Insert arrayofLinks in nav
const arrayofLinks = [{http//:link.com}...{navStuff}]
let links = arrayofLinks.map((url, i) `<a href="${url}">Link#${i + 1}</a>`);
document.write(links);



//              Insert For-each
navBar.forEach((element, i) => {
  if (i !== 0 && i !== 7)
    element.textContent = siteContent.nav[`nav-item-${i}`];
  element.style.color = "green";
});

for (let i = 0; i < navBar.length; i++) {
   navBar[i].style.color = "green";
   navBar[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
 }






 


//              input box
var input = document.querySelector\('input');
input.value = 'Helllo World';

var submit = document.querySelector(input[type="submit"]);
submit.value = "SEND"





//              Nav spacing 
commit cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent["cta"]["img-src"])
console.log(cta);

const ctaH = document.querySelector("h1");
console.log(ctaH);

ctaH.textContent = siteContent.cta.h1;
ctaH.style.wordSpacing = '991px';
ctaH.style.marginLeft = '25%';

const ctaB = document.querySelector("button");
console.log(ctaB)

ctaB.textContent = siteContent.cta.button;
ctaB.style.marginLeft = '22%';