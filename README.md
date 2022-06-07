# Property Management System


# Description

Property management is the supervision of residential, commercial, and industrial properties, including apartments, detached houses, condominium units, and shopping centres. It typically involves administering property owned by another party or entity. On behalf of the lender, the property manager works to protect the integrity of the property while producing revenue.

# General Information

1. property owners are hiring property management firms. Some landlords may have many rental properties in their portfolio but lack the expertise or time required to maintain the properties and deal with the tenants.

2. Most rental homeowners are busy with working-class lifestyle. It can be strenuous to find a balance in the chaos of corporate life and manage assets at the same time. There is, therefore, a desperate need of the hour for property management companies to intervene to address the housing shortage and rental property management problems by managing and renting these assets promptly.

# Project structure

              - Home
              - Buy prop
              - Post prop
              - About
              - contact 
              - Register
              - Login --> Owner details
              - Admin-->- My Account
                                 - Manage posted property details
                                 - Manage queries from users
# How to use the project
USER VIEW:

1.  First , User can able to view the homepage of the website.

2. User can register to the website to use further. Only registered users can login to make use of website further.

3.  User can select among whether to buy or sell the property.When user prefers to buy the prop they can select among types of property 
(Built property / commercial spaces / Land).

4.  If the user select the buy property then they can filter the property in required  location in the serach box. When the user is fixed with one property , they have to login so view the contact details of the owner.

5.  If the user selects between post the prop they can fill the form in the post prop     section (All details about the property).

6.  If user have any query can post their queries in the contact us page.

7.  About us section gives the detailed view about the website.

ADMIN VIEW:

 1. Admin can be able to login only using his/her own userid credentials.
 
 2. Admin can manage the details about the property posted so far.

 3. Admin can manage to clarify the queries posted by the users.



# Install and run it locally

1.  Download or clone the repository to your local machine:

    $ git clone https://github.com/akilaak2701/Property_management.git

2.  Run npm install inside the downloaded/cloned folder:

    $ npm install

3.  Start the dev server by running the command below. Navigate to http://localhost:4200/.
    The app will automatically reload if you change any of the source files.

    $ npm test

# Features

1. DB Connectivity.
2. Dynamic posting of post prop form in user side
3. User can search for properties to buy in required loaction(Filters)
4. Data posted dynamically in admin dashboard (posted prop details)
5. Data posted dynamically in admin dashboard about queries(contact us details).
6. Form validation in frontend level.
7. Form validation in Design document.
8. Form null validation in Cloudant database level.
9. Toastr for alert message.
10. Automaticcaly refereshes form after posting.


# Technology

# Frontend:

1. Angular-cli - 11.0.0

2. ngx-toastr -13.2.1

# Backend

1. NodeJs : 14.14.0

# NPM

command to install: npm install npm-package_name

1. "body-parser": "^1.20.0",
2. "cors": "^2.8.5",
3. "express": "^4.18.1",
4. "nano": "^10.0.0",

# Database

1. cloudant

