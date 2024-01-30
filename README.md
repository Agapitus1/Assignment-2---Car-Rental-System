31748 / 32516 Internet Programming
An Online Car Rental System using AJAX and JSON


Introduction 

In this assignment, you are required to develop a simplified on-line business portal (website) for a Car Rental Company: “Hertz-UTS”. The objectives of this assignment are as follows: 

1. Learn how to design your own data structure, by which, you could form your own database using JSON Object
2. Learn how to use AJAX technique to send and retrieve data from the web server asynchronously without interfering with the display and behaviour of the existing page.
3. Learn how to load a JSON file using JavaScript.
4. Learn how to parse a JSON file, extract the node values/attributes and store them in session arrays of your DHTML pages.
5. Learn the usage of session: how to set, update, delete and destroy the session.



Assignment Specification 

This assignment requires that you do the following steps. 
1. Design a JSON file “cars.json” with the structure specified in requirement 3 and store at least 10 + car data items in the JSON file. Set up the availability state to “True” for 70%of cars in the Warehouse, and a “False” state to the other 30%. (80 marks).
2. Use AJAX to load the JSON file “cars.json” and extract the data and save it as arrays in your webpage. (50 marks).
3. Display the cars in a nice tabular format using the above arrays on your webpage for users to select. (50 marks)
4. Provide a “button” to add the car to the reservation “shopping cart”. Use AJAX to check the availability of the car after clicking the button (the field “availability” is included in cars.json). If the availability is “True” then add the car to the reservation shopping cart and prompt success; If the availability is “False” then alert that “Sorry, the car is not available now. Please try other cars”. (50 marks)
5. Provide a button/link to view the reservation shopping cart. Display the cars which have been added into the reservation shopping cart (hint: use session to store the data). Users can set the “rent days” or delete cars in the shopping cart. (50 marks).
6. Provide the checkout button to check if there are cars in the shopping cart. If no, then alert “No car has been reserved.” and jump to the first page. If yes, validate the “rental
days” (integer, >0) using JavaScript and navigate to the next page. (30 marks)
7. Design the checkout page which displays a purchase form asking the user to fill in their delivery details (name, email address, mailing address, city, state, post-code and payment type). All these fields must be completed for the order to go ahead. Validate the format of the email address. If all details are filled correctly, then direct the user to a page showing the delivery details and the cost. (40 marks)
