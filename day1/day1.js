// today I am learning some concept required to learn react js kind of revision maybe.
// this includes concepts like dom(document object model), its a js concept kind of reactjs creaes a virtual dom . dom is like a tree structure of html elements. we can access elements in the dom using js . there are different functions that are used in it so lets leran it one by one.

// dom(document object model)- a way to get , delete create and manipulate html elements
// 1. createElement - creates a new element. creates a new element in the dom. it takes a string as an argument which is the name of the element to be created. it returns a new element object.
 

const para = document.createElement('p'); // creates a new paragraph element
para.innerText ="added new text in paragraph";
document.body.appendChild(para); // appends the new paragraph element to the body of the document


// now we need to find html elements and there are a lot of ways 
//2.getElementById
<p id="para1">
  this is paragraph 1

</p>
const para1 = document.getElementById("para1"); // gets the element with the id para1
para1.innerText = "this is the new text in paragraph 1"; // changes the text of the paragraph with id para1
//3.getElementsByTagName
const paragraphs = document.getElementsByTagName("p"); // gets all the paragraph elements in the document

//4. getElementsByClassName
<div class ="diver">
  <p class="para">this is paragraph 2</p>
  <p class="para">this is paragraph 3</p>
</div>
const paras =document.getElementsByClassName("diver"); // gets all the elements with the class name diver
// for css selectorrs query selectors
var paragraph = document.querySelectorAll('p');
// for selecting only paragraph in the div. 
// and only select the p tag by using paragraph.foreach() and if we want to select p with certain classname then we will use p.className;

// for selecting a paragraph with only div as a parent then we do inside querySelectorAll('div>p')

// finding html elements by html object collections
const here = document.p['para'];


//we can also see the elements in the console by using console.log(document.body) and then we can see the elements in the body of the document. we can also see the elements in the console by using console.dir(document.body) which will show us the properties of the body element.
// document.anchors - returns a collection of all the anchor elements in the document
// document.forms - returns a collection of all the form elements in the document
// document.images - returns a collection of all the image elements in the document


//Feature	HTMLCollection(live collections)	NodeList(not live)





// another topic( changing html elements)
//element.innerHTML - change inner html of an element
// element.attribute- change the attribute value og an html element
// element.style.property

<div id="myDiv">Hello</div>

 
  const div = document.getElementById('myDiv');

  // Get current HTML
  console.log(div.innerHTML); // Output: Hello

  // Set new HTML
  div.innerHTML = "<strong>Hi there!</strong>";


 // element.setAttribute(attribute,value)
 // we can change the attribute value of an html element by using setAttribute method
 // like we can change .png to .jpg by using setAttribute method
 //document.getElementById('myImage').setAttribute('src', 'newImage.jpg');
 // dynamic changing of atttribute value
 // document.write(mydate());