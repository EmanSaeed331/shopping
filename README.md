# Shopping-api 😻
A Shopping Api is an apis for diffrent stores , diffent type of admins and fully completed features for customer 

# Installation 
```
 $ npm install 
```
# 🔒 Setup environment 

| Parameter | Type | Description | 
| :-------- | :----|-------------|
|DB_CONN_STRING| string | **Required** for connecting in DB |
|PORT| number | **Required** port |
|TOKEN| number | **Required** TOKEN |
|SENDGRID_API_KEY| string | **Required** sendGrid  |
|CLOUD_NAME| string | **Required** cloudName |
|CLOUD_API_KEY| string | **Required** CLOUD_API_KEY |
|CLOUD_API_SECRET| string | **Required** CLOUD_API_SECRET |
|STRIPE_SECRET_KEY| string | **Required** payment secret key |

# run app 
```
 $ npm start
```
# 🌲 Project structure  

      └───src
      ├───config
      ├───CRUD
      ├───modules
      │   ├───cart
      │   │   ├───admins
      │   │   ├───clients
      │   │   ├───deliverys
      │   │   └───storeAdmins
      │   ├───coupons
      │   │   ├───admins
      │   │   ├───clients
      │   │   ├───deliverys
      │   │   └───storeAdmins
      │   ├───order
      │   │   ├───admins
      │   │   ├───clients
      │   │   ├───deliverys
      │   │   └───storeAdmins
      │   ├───products
      │   │   ├───admins
      │   │   ├───clients
      │   │   ├───deliverys
      │   │   └───storeAdmins
      │   ├───stores
      │   │   ├───admins
      │   │   ├───clients
      │   │   ├───deliverys
      │   │   └───storeAdmins
      │   └───users
      │       ├───admin
      │       ├───client
      │       ├───delivery
      │       ├───middleware
      │       └───storeAdmin
      └───types
          └───express

# 📖 API-Documentation 
#### API [Documentation](https://documenter.getpostman.com/view/11682336/UzdtWSyB)
