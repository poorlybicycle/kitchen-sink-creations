# Kitchen Sink Creations

## User Story
```md
As A user, who has a sweet tooth and no time to run to the grocery store
I WANT an application that allows me to search for baking recipes based on the ingredients I have on hand.
SO THAT I can quickly find and save recipes.
```

## Acceptance Criteria
```md
GIVEN a simple application
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes a navigation bar and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with saved recipes
WHEN I click on the dashboard in the navigation
THEN I am taken to the dashboard and presented with a list of ingredients I can choose from
WHEN I click on the search button
THEN I am presented with recipes that include the list of ingredients 
WHEN I click on the the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view recipes but I am prompted to log in again before I can search more recipes
```
## Mock-Up

The following demonstrates the applications functionality:
![Welcome Page](/Screen Shot 2022-12-01 at 7.28.28 PM.png)

## Technologies Used
This application follows the Model-VIew-Controller paradigm. We used the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your views, [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the controllers.

We also used the [dotenv package](https://www.npmjs.com/packages/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to has passwords, the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.
## Application Links
[Heroku Link](https://serene-lowlands-41438.herokuapp.com/)
[GitHub Repository](https://github.com/poorlybicycle/kitchen-sink-creations)


