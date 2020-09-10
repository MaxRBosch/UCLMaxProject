Overall instructions 
=============
All the code for the app is present here. The Python folder contains the python scripts that were used to adjust the data. Currently, a free Azure account is used to host the MySQL database and the Node.js app. I noticed that these accounts can runout after some time so if an error messages with "You have no internet connection" turns up when trying to interact with the app, please create a new Azure account and add a new subscription. 

System manual
=============

Ionic instructions
------------------

In order to adjust the code someone simply has to download the code, and
download and install NPM, Node.js, Ionic, and all other packages. All other packages are downloaded by typing "NPM Install"Then,
in order to host the app on localhost one simply has to type "ionic
serve" and see how the app would look like on a real device.  
If someone wants to see the app on their mobile phone, an android phone
is preferred. Then, Android Studio needs to be downloaded. Once Android
studio is installed several Ionic commands are required  

1.  **Ionic build** compiles all the assets and readies the app for
    deployment.

2.  **Ionic cap add android"** adds an android folder and adds android
    dependencies.

3.  **Ionic cap copy** Copies all the new changes

4.  **Ionic cap sync** synchronizes all the new changes

5.  **Ionic cap open android** Opens Android Studio

Once in Android Studio a debugg apk can be created. This can be done by
selecting build at the top of the page and select apk.
Additionally, if a phone is connected to the computer, on the right a
green play button allows the developer to install the app on their
phone.

Azure server deployment instructions
------------------------------------

In order to deploy the server on Azure, first a Node.js Web App has to
be created on Azure. This requires a subscription and some funds. A 
Node.js WebApp has to be selected. Then, the server.js file has to be placed in an empty folder.
1.  **Git init** created local git repository.

2.  **npm init"** creates a package file, make sure that node server.js is set as the startup file

3.  **npm install** Install all the packages (bcrypt/MySQL)

In Visual Studio Code the "Azure App Service" extension has to be downloaded. Once
all these commands have been executed, the Azure App Service can be used
to deploy the folder through VSCode.

Azure MySQL deployment instructions
-----------------------------------

First, a MySQL database schema has to be constructed. A good method to
construct this table is by using phpMyAdmin as this has a good interface
and guides the user on how to construct a database. Once the layout of
the table has been constructed, the MySQL database can be deployed. On
the Azure website a MySQL database can be chosen as the resource to deploy. The
table as created in phpMyAdmin can now be copied to the Azure interface
and the database should be deployed.

User manual
===========

Login
-----

Whenever a user is presented with the login page they have two options.
They can login if they already have an active account, or they can
register an account. Once a user has registered an account and logs in,
they are directed to the homepage.

Homepage
--------

Once a user is at the homepage they can either logout, look at the
different graphs for their portfolio by pressing on any of the yellow
buttons, or buying and selling cryptocurrency. If a user chooses to buy
a cryptocurrency they can select which cryptocurrency they want to buy,
and then insert the amount. Once they have cryptocurrency they can also
choose to sell it.

Bitcoin & Ethereum page
-----------------------

Once the user is at a specific cryptocurrency page they can select a
date and time and predict the price. The price that is returned by the
IBM Watson Cloud Machine Learning model can be saved by the user or
disregarded.

Predictions
-----------

The predictions page contains two tables. The more predictions a user
makes, the larger these tables become. Once there are various
predictions present in the tables the user can simply click the red
garbage bins in order to delete specific predictions.
