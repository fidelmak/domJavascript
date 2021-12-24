//console.log(document);
// the above code will show every do property
//console.log(document.URL);
//console.log(document.title);
//document.title= 123; // this code changes the title
//console.log(document.title);// this prints the title
//console.log(document.doctype);// this gives the doctype
//console.log(document.body);// shows the body
//console.log(document.all);// displays all the html dom 
//console.log(document.all[10]);// this get a particular index type
//document.all[10].textContent="hello";// to select a thing and it changes the index 10 to hello
//console.log(document.forms);// to get all the forms 
//console.log(document.links);// gets all the link 
//console.log(document.forms[0]);// to get a particular form 
//console.log(document.images);// gets the image 


// SELECTOR WE HAVE TWO TYPES OF SELECTOR THE SINGLE AND THE MULTIPLE SELECTOR
//GETELEMENTBYID
//console.log(document.getElementById('header-title'));// this displays the header-title 
//var headerTitle = document.getElementById('header-title');// this set a variable for header-title 
//console.log(headerTitle);// this display the header-title 
//headerTitle.textContent= "hello";// this changes the content to hello 
//headerTitle.innerHTML ="goodbye";// this is an innerHtml that still changes the text to goodbye 
//console.log(headerTitle.textContent);// this display the actual text in the header-title 
//headerTitle.innerHTML='<h3>hello</h3>';// still the same as above 
//we can do styles
//headerTitle.style.borderBottom= 'solid 3px #000';// this gives the header-html a border style 
// to put border on the actual header
//var header= document.getElementById('main-header');// this set a variable header to main-header 
//header.style.borderBottom='solid 3px #000';// this gives the header i.e the main-header a style 

// getelementbyclassName // this is another form of selector which target only the class 
//var items = document.getElementsByClassName('list-group-items');// this set a variable item to list-group-items
//console.log(items);// this displays the items 
//console.log(items[1]);// this display the item with the value of 1, note javascript counts from 0
//items[1].textContent='hello2';// this changes item 1 to hello2
//items[1].style.fontWeight='bold';// this gives item 1 style and fontweight
// to do backgroundcolor for item 1
//items[1].style.backgroundColor='yellow';// gives it a background color 
// to add styles to all of it 
//items.style.backgroundColor='#f4f4f4';// this wont work rather lets loop through// this add background to all the items but wont work
//for (var i=0; i< items.length; i++ ){
    //items[i].style.backgroundColor="rgb(40 200 172)";// this loops through by geting the lenght and giving it a background color in general 
//}


// GetelementByTagName// this gets by tag name such as li, p, etc 
//var li = document.getElementsByTagName('li');// this assigns a variable to li
//console.log(li);// this displays li
//li[1].textContent='hello3';// this set the li of value one to hello3 
//li[1].style.backgroundColor='yellow';// this changes the background 
//li[1].style.fontWeight='bold';// this gives it a syle 
//for ( var i=0; i < li.length; i++){
    //li[i].style.backgroundColor='rgb(40 200 172)';
//}


// QuerySelector this works just like Jquery
var header = document.querySelector("#main-header");
//console.log(header);
header.style.borderBottom='solid 4px #ccc';
// lets grab the input
//var input = document.querySelector('input');
//input.value= 'hello world';
var submit = document.querySelector('input[type="submit"]');
submit.value='send';
// for list item
//var item= document.querySelector('.list-group');
//item.style.backgroundColor='rgb(40 200 172)';
//item.style.color='red';
//item.style.textDecoration='none';
// lets talk on last item child 
var lastitem =document.querySelector('.list-group-items:last-child');
lastitem.style.color='#000';
//console.log(lastitem);
// lets grab the second itrem
var seconditem = document.querySelector('.list-group-items:nth-child(2)');
//console.log(seconditem);
seconditem.style.color='#000';
// lets look at queryselctorall
var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='hello word fuck';

// to alter the titles 
/**var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='rgb(40 200 172)';

}
var even =document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<even.length; i++){
    even[i].style.backgroundColor='#5c2c5a';
}
**/

// lets talk about traversing the class 
var itemList= document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='rgb(40 200 172)';
//console.log(itemList.parentNode.parentNode);
// parent element 
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='rgb(40 200 172)';

// lets talk about child node 
//console.log(itemList.children);
//console.log(itemList.children[1]);
//console.log(itemList.children[2]);
itemList.children[1].style.backgroundColor='yellow';
// lets talk on firstChild property
//console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='motherfucker';
itemList.lastElementChild.textContent='Asslicker';
// lets talk on siblings 
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='yellow';


// lets talk on CreateDom Element and Insert 
// create Element
var newDiv= document.createElement('div');
console.log(newDiv);
// to add a new class
newDiv.className = 'hello';
// to add id 
newDiv.id ='hello1';
// to add attribute 
newDiv.setAttribute('title','hello div');
console.log(newDiv);
// to create a text node
var NewDivText= document.createTextNode('hello motherfuckers');
// lets add text to it
newDiv.appendChild(NewDivText);
// to insert it inside the dom 
var container= document.querySelector('header.container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

//container.insertBefore(newDiv, h1);
// lets talk about events 
///var button= document.getElementById('button').addEventListener
//('click',buttonClick);


/**function buttonClick(e){
   console.log("button clicked");
    document.getElementById('header-title').textContent='changed';
    document.querySelector('#main').style.backgroundColor='#f4f4f4';
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output= document.getElementById('output');
    output.innerHTML= e.target.id;
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlkey);
    console.log(e.shiftkey);
} **/
    //var button= document.getElementById('button');
    //var box= document.getElementById('box');
    //var output= document.getElementById('output');
    
    //button.addEventListener('click',runEvent);
    //button.addEventListener('dblclick',runEvent);
    //button.addEventListener('mousedown',runEvent);
    //button.addEventListener('mouseup',runEvent);
    //box.addEventListener('mouseenter',runEvent);
    //box.addEventListener('mouseleave',runEvent);
    //box.addEventListener('mouseover',runEvent);
    //box.addEventListener('mousemove',runEvent);
    

    var textInput= document.querySelector('input[type="text"]');
    var form= document.querySelector('form');
    var select= document.querySelector('select');

    //textInput.addEventListener('keydown', runEvent);
    //textInput.addEventListener('keyup', runEvent);
    //textInput.addEventListener('keypress', runEvent);
    //textInput.addEventListener('focus', runEvent);
    //textInput.addEventListener('blur', runEvent);
    //textInput.addEventListener('cut', runEvent);
    //textInput.addEventListener('paste', runEvent);

    //select.addEventListener('change',runEvent);
    //select.addEventListener('input',runEvent);
    form.addEventListener('submit',runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('Event type: '+e.type);
    //document.body.style.display='none';
    console.log(e.target.value);


    //console.log(e.target.value);
    //document.getElementById('output').innerHTML= e.target.value;
    //output.innerHTML='welcome';
    //var output= document.getElementById('output');
   //output.innerHtml =e.offsetX;
   //box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+", 47)";
    
   //document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+", 47)";
    
   // lets talk about keyboard and input events

}



