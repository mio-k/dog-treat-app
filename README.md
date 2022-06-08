# Dog-treat-app
This is where I will store the entire phase 1 final project. 

#Project Requirements
- Make a single page application. -- This app has only one html file, created by using create-react-app.
- Minimum 5 components that are connected logically. -- This app has 10 components, and architected to pass data and functions in an efficient manner. 
- Minimum 3 client-side routes using React Router with a nav bar. -- Nav bar in this app is set up using React Router, and allows users to move from component to component.
- Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required. -- This app includes 2 get requests to initially fetch the treat and the order information, 2 post requests to order treats and add new treats to the catalog.
- Add styling. -- this app is styled to present the items in a columned manner that is also responsive. It also has consistent color scheme.  


# To start this app

The treat data and order data are stored in the db.json file and to have the correct experience of this application you need to access this file.
If you don't have json-server installed already, install it first with:

 ###   `npm install -g json-server`

Then run:

###    `npm run server`

from the directory this project is stored in.

then run:

###    `npm start`

and a new browser window opens up and loads the app.



## Usage
The purpose of this application is to make it easy for the dog pod members to compile their Chewy order to get free shipping.  

Things you can do:
- View some of the popular treats amongst the pod members.
- Add new treats to the list.
- Filter the treats by their main ingredients using the dropdown.
- Search treats by their names.
- place orders for treats.
- Check to see if our combined order would qualify for free shipping. 

## Support
If anything's not working. You can DM mio on the Dog Pod slack channel, or email her mio.kanna@gmail.com.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.