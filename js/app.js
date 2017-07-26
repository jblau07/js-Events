//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";


//document.getElementById("one").addEventListener("click",  moreContent); optional? not necessary since in HTML already?
function moreContent(){
	document.getElementById("more").innerHTML = bacon;
}

	/*var pElem = document.createElement("p");
	pElem.id = "bacon info";
	pElem.innerHTML = bacon;
	var plswork = document.getElementById("more");
	plswork.appendChild(pElem);


	var pElem = document.getElementById("more");
	console.log(pElem);
	pElem.innerHTML = bacon;

}



//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/

//document.getElementById("noMore").addEventListener("click", lessContent); optional?

function lessContent(){
	var paElem = document.getElementById("less");
	if (paElem.style.display === "block"){
		paElem.style.display = "none";
	}else{
		paElem.style.display = "block";
	}
}
//paraElem.innerHTML = ""; alternate method

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

//document.getElementById("biggie").
/*function zoom(obj) {
    var pElem = document.getElementById("biggie");
    pElem.fontSize = "30px";
}

*/
//document.getElementById("biggie").addEventListener("onmousemove", zoom); not necessary since in HTML already?

function zoom(){

document.getElementById("biggie").style.fontSize = "150%";

}



//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = ["mcnuggets", "mcchicken", "fries"];

document.getElementById("showMenu").addEventListener("click",  valueMenu);

function valueMenu(){
	for(var i=0; i<menuItems.length; i++){
	
	document.getElementById("menu").innerHTML = menuItems;

	//var items = document.createElement("p");
	//items.innerHTML = menuItems[i];
	//var workpls = document.getElementById("menu");
	//workpls.appendChild(items);
}
}

/* alt method
function valueMenu(){
	var getMenu = document.getElementById("menu");

	for(var i = 0; i<menuItems.length; i++){
	var liElem = document.createElement("li");
	liElem.innerHTML = menuItems[i];
	getMenu.appendChild(liElem);
	}
	console.log("menu");
	menuItems = [];		works but dont use. modifies global variable
}

valueMenu();- don't use this. this is invoke


//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/

document.getElementById("drink").addEventListener("click", redFace);

function redFace(){

drink.style.color = "red";
drink.style.fontSize = "20px";

}

//document.getElementById("drink").style.color = "red";
//document.getElementById("drink").style.fontSize = "20px";


/*function redFace(){
	var tonic = document.getElementById("drink");
	if(tonic.style.color ==="black" && tonic.style.fontSize === "16px"){
		tonic.style.color = "red" ; tonic.style.fontSize ="40px";
	}else{
		tonic.style.color = "black" ; tonic.style = "16px";
	}
	}

}



//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

document.getElementById("price").addEventListener("mouseover",  showPrice);
function showPrice(){

document.getElementById("price").innerHTML = "$5.55";

}




/*function showPrice(){
	document.getElementById("price").innerHTML +="5.55"
    }


//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

document.getElementById("Benjamin").addEventListener("click", display);

function display(){
	document.getElementById("displayQuote").innerHTML = myQuote;
}

/* var buttonElem = document.getElementById("Benjamin");
buttonElem.addEventListener("click, showQuote");

function showQuote(){
	var pElem.innerHTML = myQuote;
}


//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

document.getElementById("random").addEventListener("click", randomQuote);//no need document.get can just use random.addEventListener//

function randomQuote(){
	var rquote = quotes[Math.floor(Math.random() * 4)];// Math.floor(Math.random() * quotes.length)
	document.getElementById("displayQuotes").innerHTML = rquote;
}
//console.log(rquotes);
//document.getElementById("displayQuotes").innerHTML = quotes[rquote];

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/

document.getElementById("showHide").addEventListener("click", unlock);

function unlock(){
	if(showmoney.style.display === "none"){
		showmoney.style.display ="block";
	}else{
		showmoney.style.display ="none";
	}

}


