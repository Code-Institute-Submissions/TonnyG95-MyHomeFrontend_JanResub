
# MyHome FrontEnd


![myhome](https://user-images.githubusercontent.com/47572512/190903948-8245fb7b-33f4-4a24-b6f8-f54863d818ad.png)



![screencapture-3000-tonnyg95-myhomefrontend-jt8lx9x2r6e-ws-eu64-gitpod-io-2022-09-18-15_55_36](https://user-images.githubusercontent.com/47572512/190913485-44db36ff-c82b-42cc-bf68-e4580acb780f.png)


A deployed FrontEnd can be found [Here](https://ci-myhomefrontend.herokuapp.com/). \
A deployed API can be found [Here](https://ci-myhome.herokuapp.com/).

# Table of contents

- [MyHome FrontEnd](#myhome-frontend)
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
    - [What is MyHome?](#what-is-myhome)
    - [What is the idea behind this project?](#what-is-the-idea-behind-this-project)
- [Technologies](#technologies)
    - [This application is separated into two parts. BackEnd and FrontEnd. Both applications are deployed separately, and both use different technologies. You can find more information about them here](#this-application-is-separated-into-two-parts-backend-and-frontend-both-applications-are-deployed-separately-and-both-use-different-technologies-you-can-find-more-information-about-them-here)
    - [FrontEnd Technologies](#frontend-technologies)
    - [BackEnd Technologies](#backend-technologies)
    - [FrontEnd Requirements](#frontend-requirements)
    - [User Stories](#user-stories)
    - [Seller Stories](#seller-stories)
    - [Buyer/Tenant Stories](#buyertenant-stories)
    - [Website Performance](#website-performance)
- [Structure](#structure)
  - [UI \\ UX](#ui--ux)
  - [Design Choices](#design-choices)
    - [Colors](#colors)
- [Features](#features)
  - [Included Features](#included-features)
  - [Future Implementations](#future-implementations)
- [Testing / Validation](#testing--validation)
    - [Testing User Stories](#testing-user-stories)
    - [Manual Validation](#manual-validation)
    - [Bugs and solutions](#bugs-and-solutions)
- [Deployment](#deployment)
- [Forking the Repository](#forking-the-repository)
- [Creating a Clone](#creating-a-clone)
- [Credits](#credits)
    - [Links](#links)
    - [Acknowledgements](#acknowledgements)
    - [Disclaimer](#disclaimer)
    


# Introduction

### What is MyHome?

MyHome is a real estate portal for sellers and buyers, sellers can list their properties efficiently and quickly, and buyers have a full-screen listing page whit all the listings on the left side and a map on the right side so thay can easily select properties by look or short description of the property or by the location where they want to buy or rent houses, apartments or offices.

### What is the idea behind this project?
The idea behind MyHome was to create a simple, user-intuitive real estate app that is not overwhelming for users or sellers, that works fast and is secure with simple registration and login forms and with a quick way to add new listings that buyers or tenants can select by scrolling on the left side where they can see pictures and a short description of the property or on the right by choosing property on the map.

[Back to top](#table-of-contents)

# Technologies

### This application is separated into two parts. BackEnd and FrontEnd. Both applications are deployed separately, and both use different technologies. You can find more information about them here


### FrontEnd Technologies

- HTML (build up layout and content of the application.)
- CSS (custom styling and override Bootstrap stylings to fit with the theme of the app.)
- ReactJS (interactive functionalities of the app.)
- React-Bootstrap (the responsive front-end framework to build the layout and style of the app.)

### BackEnd Technologies

- Python (backend functionalities handling data, database interaction, and CRUD functionalities.)
- Django (the core framework used to build the backend for MyHome.)


### FrontEnd Requirements

- Axios
- React Bootstrap
- Immer
- Leaflet
- Toastify


[Back to top](#table-of-contents)



### User Stories
- As a site user, I want to create an account.
- As a Site User, I login into my account quickly
- As a Site User, I can visit a website from any device
- As a Site User, I don't have to wait too long for a website to load
- As a Site User, I want to be able to edit my profile information
- As a site admin, I want to be able to see my registered users and their profiles
- As a site admin, I want to be able to edit listings
- As a site admin, I can delete listings
- As a site admin, I can delete users

### Seller Stories
- As a seller, I can add a new listing to the website
- As a seller, I can create, read, update and delete my listings
- As a seller, I can upload pictures for my listings
- As a seller, I can display my or my company contact information
- As a seller, I can display my other listings on my profile

### Buyer/Tenant Stories
- As a buyer, I can view a listings
- As a buyer, I can see pictures of the property
- As a buyer, I can see the seller's contact information
- As a buyer, I can see all listings by sellers I'm interested in
- As a buyer, I can view maps and property location
- As a buyer, I can view listing details

[Back to top](#table-of-contents)



### Website Performance

![jTtcnuS](https://user-images.githubusercontent.com/47572512/190927866-1007b7e7-cd16-477e-b03f-290d5d670ead.png)

Test with [web.dev](https://web.dev/). gave me those results 


![LCdIc94](https://user-images.githubusercontent.com/47572512/190927923-1f2d5438-faf0-42f5-97f7-760368505c7b.png)


Test with [GTMetrix](https://gtmetrix.com/). gave me those results 


# Structure

## UI \ UX

![oGpsCX4](https://user-images.githubusercontent.com/47572512/190928600-e42b6305-2095-4fae-815e-1bf2165a1c9d.png)

The app design idea was created with Figma since this is my preferred tool. The project can be found. [Here](https://www.figma.com/file/IzBlSCW9u7BpNu8gZMZ83C/Untitled?node-id=0%3A1).

## Design Choices

The main idea for the design of this app was to make it look luxurious since this is a real estate portal. However, I still wanted to make it simple and intuitive so users can easily navigate a website and find the information they need. That's why I chose to go with an excellent combination of dark and light colours with a few lighters and darker accent colors that can be seen on hover on some elements such as cards

![cICgcvX](https://user-images.githubusercontent.com/47572512/190928971-20088c2b-3570-49b3-89bf-f8bce86093aa.jpeg)

As it can be seen on listing card on right side

![LbmfsD2](https://user-images.githubusercontent.com/47572512/190928988-0920a01f-dcbc-4e86-9b8a-50182dbe6258.jpeg)

Or here on listings card on right

### Colors

![colors](https://user-images.githubusercontent.com/47572512/190929327-33b3ccf6-b298-49d5-b246-7dd1617b4264.png)

[Back to top](#table-of-contents)

# Features

## Included Features

- Fully responsive desing
- Simple but beautify UI
- Full CRUD Functionality
- Login and Registration
- Interactive Map
- User Profiles
- Update Profiles
- Seller Agencies


## Future Implementations

This project will keep receiving security and features updates. It will be in active development. The project's current state has all the basic functionalities needed for a user to have fully funcional portal. The site owner also has access to all the data through Django's admin panel. The next phase will be adding more features to the site, enhancing user experience and control over the app. The following features are planned to be implemented:

- Admin panel in frontend app
- Contact form for users to contact sellers directly to on listing details page
- Activaction and welcome e-mail
- Notification system 
- Ability to collect Latitude and Longitude directly from map (Curently those information must come from google maps)
- Mailchimp integration


[Back to top](#table-of-contents)

# Testing / Validation

### Testing User Stories 

1. As a site User, I was able to create my account. 
    - by clicking on registration, I was prompted to fill out username, e-mail and password fields. After I filled out the required information, my account was created.    
2. As a Site User, I could access listings.
    - While on the website, I can access listings and listings details.
3. As a Seller, I could add new listings to the website.
    - While logged in, I was able to add a new listing.
4. As a Seller, I was able to create, read, update and delete my listings.
    - While logged in, I was able to create my listings, update my listings and delete my listings.
5. As a Seller, I could add information about my agency.
    - While logged in, I can edit agency information and display the information I want.
6. As a Buyer, I was able to see listings and listings details.
    - - I was able to see all the listings on the website
7. As a Buyer, I was able to see seller information.
    - I was able to see who listed properties I was interested in
8. As a Buyer, I was able to see the map.
   - I was able to map and location where this listing is
1. As a site Admin, I can see a list of registered users.
    - While logged in on the admin panel, I saw and managed a list of my users.
2. As a site Admin, I can manage listings on the website
    - While logged in on the admin panel, I can see a list of listings and edit them
    
### Manual Validation

I tested following elements on every page: 

Logo redirection to home page

- Nav links
- Footer links
- Social links opening in new tab
I tested profile updated and agency created to be required for ading,edit and delete listings everything worked as intended.
I tested login and registration pages, everything worked as intended.
I tested that seller can only edit and delete their own listngs.
I tested responsive design and all pages are responsive.


### Bugs and solutions

1. I had a problem with CORS between my front and back end.
    - The solution was to install Django-cors-headers and set CORS_ALLOW_ALL_ORIGINS: to True.
2. I had a problem with the static collect function in Django.
    - With the help of Jonh from Code Institute Tutor Assistance, we collected all the statics files after we changed the Cloudinary position in the list of installed apps. 
3. I wanted to deploy this project as one app, but in the end, I had to separate them.
    - The idea was to deploy the frontend and backend as one project, but even with the help of Gemma from Code Institue Tutor Assistance, we were not able to get Django to load React app, so we decided to deploy it as 2 separated projects
4. There was a problem with Heroku and GitHub.
    - The solution was redeploying my app and creating a new Postgres database.
5. Problem with Bootstrap Alerts
 - I had a problem with loading bootstrap alerts, so in the end, I changed them for Toastify alerts
6. Problem with font-awsome icons. 
 - I used font awesome icons, but their icons have classes, and that was showing errors in the console so I change class to classNames, and the icons worked fine
7. Problem with an icon for React Leaflet maps 
 - I had a problem that react leaflet was not loading, but I forgot to import them
8. Problem with React Leaflet container
 - React Leaflet container was not loading the map because I forgot to add max-height to the container
9. Latest version of React-Router-Dom was giving me some problems, so I downgraded it to an older version. 
10. Deployment
 - For deployment, I had so many problems, the initial plan was to deploy the backend and frontend as one website, but that did not work; I could not get Django to render React app. Then I tried to deploy React JS to Heroku, and the first deployment, everything worked fine, but after the refresh, the app would crash with an error "H10" after a lot of googling, I find out a solution for my problem on [This Link ](https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl/)




# Deployment

To deploy this page to Heroku from its GitHub repository, the following steps were taken:

1. Create the Heroku App:

2. Select "Create new app" in Heroku.
3. Choose a name for your app and select the location.
4. Attach the Postgres database

5. In the Resources tab, under add-ons, type in Postgres and select the Heroku Postgres option.
6. Prepare the environment and settings.py

7. In the Settings tab, click on Reveal Config Vars and copy the url next to DATABASE_URL.
8. In your GitPod workspace, create an env.py file in the main directory.
    - Add the DATABASE_URL value and your chosen SECRET_KEY value to the env.py file.
    - Add the SECRET_KEY value to the Config Vars in Heroku.
    - Update the settings.py file to import the env file and add the SECRETKEY and DATABASE_URL file paths.
    - Update the Config Vars with the Cloudinary url, adding into the settings.py file also.
    - In settings.py add the following sections
    - Cloudinary to the INSTALLED_APPS list
    - STATICFILE_STORAGE
    - STATICFILES_DIRS
    - STATIC_ROOT
    - MEDIA_URL
    - DEFAULT_FILE_STORAGE
    - TEMPLATES_DIR
    - Update DIRS in TEMPLATES with TEMPLATES_DIR
    - Update ALLOWED_HOSTS with ['app_name.heroku.com', 'localhost']
    - Store Static and Media files in Cloudinary and Deploy to Heroku:

9. Create three directories in the main directory
    - media 
    - storage
    - templates
10. Create a file named "Procfile" in the main directory and add the following:
    - web: gunicorn project-name.wsgi
11. Go to the Deploy tab on Heroku and connect to GitHub, then to the required repository. Click on Deploy Branch and wait for the build to load. When the build is complete, the app can be opened through Heroku and automatic deployments can be enabled.

[Back to top](#table-of-contents)

# Forking the Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log into GitHub or create an account.
2. Locate the GitHub Repository.
3. At the top of the repository, on the right side of the page, select "Fork"
4. You should now have a copy of the original repository in your GitHub account.

[Back to top](#table-of-contents)

# Creating a Clone

ow to run this project locally:

1. Install the GitPod Browser [extension.](https://www.gitpod.io/docs/browser-extension/)
2. After installation, restart the browser.
3. Log into GitHub or create an account.
4. Locate the GitHub Repository.
5. Click the green "GitPod" button in the top right corner of the repository. This will trigger a new gitPod workspace to be created from the code in github where you can work locally.
How to run this project within a local IDE, such as VSCode:

6. Log into [GitHub](https://github.com/).
7. Locate the [GitHub Repository.](https://github.com/TonnyG95/task-mate).
8. Under the repository name, click "Clone or download".
9. In the Clone with HTTPs section, copy the clone URL for the repository.
10. In your local IDE open the terminal.
11. Change the current working directory to the location where you want the cloned directory to be made.
12. Type 'git clone', and then paste the URL you copied in Step 3.
13. git clone https://github.com/USERNAME/REPOSITORY
14. Press Enter. Your local clone will be created.
15. Further reading and troubleshooting on cloning a repository from GitHub here

[Back to top](#table-of-contents)

# Credits

### Links 
- [Axios](https://axios-http.com/) Axios is a simple promise based HTTP client for the browser and node.js.
- [React Bootstrap](https://react-bootstrap.github.io/) The most popular front-end framework
Rebuilt for React.
- [Immer](https://immerjs.github.io/immer/) Immer simplifies handling immutable data structures
- [React Leaflet](https://react-leaflet.js.org/) React components for Leaflet maps
- [React Toastify](https://www.npmjs.com/package/react-toastify) React-Toastify allows you to add notifications to your app with ease. No more nonsense!


### Acknowledgements

During this project, I got a new mentor Rohit Sharma. I want to thank him for all tips and tricks that helped me improve this project and I want to thank him for all time he spent answering my questions. And big thanks to Code Institute Tutors Jonh and Gemma for helping me with this project. 

### Disclaimer
This project was create for educational purposes only, and credits for all pictures/icons and listings used in this project go to their respective owners.

[Back to top](#table-of-contents)
