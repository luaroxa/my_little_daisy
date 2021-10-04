## Frame work was drawn up Oct 2, 2021
## Git hub set up on Oct 3, 2021

### Detailed frame work / architecuture
1. Dissecting pages in terms of grids

## [2] Defining route (Oct 3, 2021)

ALL Pages:
1) Head Partial Page:
- Title
- Nav bar: simple <a> tage to HOME, MENU, ORDER, REVIEW
2) Footer Partial Page:
- text for pick up locations
- Nav bar: simple <a> tage to their instagram
3) background image has words 'my little' and 'daisy' embedded and I will sed it to repeat. 
-> background-img: tile 

1. Home Page
- GET METHOD: mld.com/home
- mld-home.ejs
- button to direct them to order page at the bottom (simple <a> tag)
- jumbo tron for the main image (<div>1)
- grid of 9 undernearth displaying other nice pictures (<div>2)

=> I may not need to have controller if I hard-code all images.  ??


2. Menu Page
- GET METHOD: mld.com/menus
- button to direct them to order page at the bottom (simple <a> tag)
- mld/menus.ejs
-> 3 categories = 3 main <div>s
-> each <div> has produc, price, flavours (3 <div>s)

//route//
menues

//controllers//
menuesCtrl.js
=>wish: click on category
=> refer back to old DOM lab where we used subcategory.

//ejs files// IF I do seperate. But for now, I don't think we have enough menu contents 
1) main menue (with all 3 categories)
2) menu-cheesecake.ejs
3) ugly cookies
4) caneles

// 1 ejs//
=> table
=> I could even pre-make png of menu in worst case scneario. 

=> DB? or no? 

3. Order Page
//route//
orders

//controllers//
ordersCtrl.js
=> create
=> submit

//DB "Orders"//
1.order schema:
1) customer name
2) customer phone no.
3) customer e-mail (?)
4) pick up location (Downtown OR NW)
5) Product (given: name, price, flavour) X 3 products category (cookies, cake, canele)
5-1) choose quantity per flavour
6) Subtotal
7) Tip
8) Tax
9) Total

?? should I rather have number counter BESIDE flavours itself ? ?????
what's easier !
?? then I can have schema per product-flavour combo eh? 
?? OR have product->dropdown select -> added -  I don't know how lol



3-1) first request
- GET METHOD: mld.com/order
- mld-orders.ejs

3-2) second request
- POST METHOD: mld.com/order
- <form> req
- redirect to HOME or THANK YOU PAGE => mld.com/order/thankyou

??
- how do you set up divs and contents if you're unsure about final height of the form? ex) for an order form, customer could add many different items. 

- if products could change in the future, is it better to keep it in DB? Instead of hard coding it?  ex) flavours 

- If I set up admin pages/log in, how do I give permission to edit the DB ? 
=> hidden page (route + ejs) for admins to check order?
=> they can directly url it. mld.com/admin 
