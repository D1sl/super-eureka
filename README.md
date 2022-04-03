# super-eureka
14. Model-View-Controller (MVC) Challenge: Tech Blog

![screenshot of the homepage](./assets/images/screenshot.png)

## Assignment
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
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
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

### Installation

1. Create a `.env` file in the root directory, and insert the following code, replacing the `DB_USER` and `DB_PW` fields with your MySQL login information and create a session secret there as well.
```
DB_NAME='techblog_db'
DB_USER=''
DB_PW=''
SESSION_SECRET=''
```
2. Run `NPM I` to install all required dependencies
3. Login to `MySQL Shell` and run `SOURCE db/schema.sql`.
4. Run `NPM RUN SEED` to enter placeholder data into your database. If the seeding fails, make sure that you have a `techblog_db` database in MySQL.
5. Run `NPM START` to start the server

### Usage
When the server is running, you can access the application at `http://localhost:3001/`.
You can run POST, GET, PUT and DELETE requests, easiest by using `Insomnia`. 

## Links
* [Deployed Application on Heroku](https://mighty-scrubland-33072.herokuapp.com/)
* [Repository](https://github.com/D1sl/super-eureka)