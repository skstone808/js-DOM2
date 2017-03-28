/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var kapRating = document.getElementById("rating1");
kapRating.innerHTML = "Rating: 5 Starz";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var sunPrice = document.getElementById("price2");
sunPrice.innerHTML = "Price: $$$";
var sunAddy = document.getElementById("addy2");
sunAddy.innerHTML= "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var ramenHours = document.createElement("div");
ramenHours.id = "hours3";
ramenHours.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(ramenHours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/ 

var kamPrice = document.createElement("div");
kamPrice.id = "price4";
kamPrice.innerHTML = "Price: $$$";
text4.appendChild(kamPrice);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var kamAddy = document.createElement("div");
kamAddy.id = "addy4";
kamAddy.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(kamAddy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var kamHours = document.createElement("div");
kamHours.id = "hours4";
kamHours.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(kamHours);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var kamUpdate = document.createElement("div");
kamUpdate.id = "update4";
kamUpdate.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(kamUpdate);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var newName = document.createElement("div");
newName.id = "name5";
newName.innerHTML = "The Death Star Cafe";
text5.appendChild(newName);

var newRating = document.createElement("div");
newRating.id = "rating5";
newRating.innerHTML = "Rating: 2 Stars";
text5.appendChild(newRating);

var newPrice = document.createElement("div");
newPrice.id = "price5";
newPrice.innerHTML = "Price: $$";
text5.appendChild(newPrice);

var newAddy = document.createElement("div");
newAddy.id = "addy5";
newAddy.innerHTML = "A galaxy far, far away."
text5.appendChild(newAddy);

var newHours = document.createElement("div");
newHours.id = "hours5";
newHours.innerHTML = "We never close.";
text5.appendChild(newHours);
