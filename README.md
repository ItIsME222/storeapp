* Colin Kwon
* Milestone 4
* 3/23/25
* CST-391

# Introduction
1. The milestone project that I will be working on for the semester will be an Online Website. It will be a simple project that will allow me to add new products, delete or edit products. It is also very flexible in the idea that I can add any new features to the website.
2. The requirements as of now will be the ability to show products, delete products and edit products. There will also be a page dedicated to showing all the products. The page itself will be similar to most marketing websites as it will display with pictures items that are being sold in the store.
3. The initial database design will show all the products available at their prices. As of now all the items will be under one category named “items”. Each of these items will have a title, price, stock, description and image. 
4. As of now there will only be one page and that is the page that will show off the products. The wireframe will show off what the image is but if you click on an item it will show off the information that they are given via the database.

# 5. SiteMap:
Each block on this sitemap represents a different page of the store. More will be added later, however as for now the main thing to look at will be the ability to browse the store. The store itself shows off all the different items, once the user clicks on an item they will be able to view the item. After that is the About us Page which will show a description of the store. Lastly there is the cart which will show another page on whether or not the customer wants to check out the item.

![image](https://github.com/user-attachments/assets/b6237101-3768-466a-ab38-7fda1ff1ef6b)


# 6. WireFrame
* Main Store Page
  This page shows off the main website and the store items. It will show all the products along with their prices. Each product will also show off an image showing what the product is. The description won’t show up until the user clicks on the product.
  
![image](https://github.com/user-attachments/assets/2a62af5b-a205-4f88-a2f3-0576ad3e86ba)

* Product Page:
When the user clicks on a product this page will display. It will display all the information of the product including, Name, Description, Image, price and lastly the option to buy the product. There will be a universal tab on top that will allow the user to navigate between pages.

![image](https://github.com/user-attachments/assets/111f2b2c-b6a3-42fc-ba33-2ac0092059d1)


* Home Page:
As of now this page is currently a work in progress. On the top is the universal tab where the user will be able to use it in order to navigate to different parts of the web. For now the home page will only display featured items.
![image](https://github.com/user-attachments/assets/b9bf3eef-bb7b-48dc-8010-77d004a2e771)

* About us Page
This page will be updated more in the future. As of now all it will show off is the company logo and a description of us.
![image](https://github.com/user-attachments/assets/96571b6c-626b-4853-8040-e6ec8b50c219)

# 7. UML
UML Design for the store Customer and Admin:
On top shows the store and it’s connected to the Customer and Admin because those are the ones with access. The customer has an Id name and password similar to the admin. The admin has permission to change the items and their information in the store. Both admin and customer have the ability to browse and add the item to the cart. This is a work in progress and potentially more will be added later
![image](https://github.com/user-attachments/assets/896b3e81-04e0-4755-9d73-24f6d412ff3f)

# 8. Risks
At the moment the only risk I can think of is adding more features as the website goes on. Adding features could indirectly cause bugs in others and therefore cause problems.
# API Introduction
Our API is a Store API
1. Plural Nouns as Resources: Products, Categories, Descriptions, Prices
2. URL include: (assuming these all have http://localhost:5000)

getProducts, postProducts,PutProducts,DeleteProducts

Edit: Adding User API

Reason: There needs to be a way to manage users

getUsers, postUsers,PutUsers,DeleteUsers

an example URL would look like http://localhost:3000/products
# Summary of Updates AS OF MILESTONE 4: 
No updates or changes made.
Rest API	Deleted unnecessary API’s
Rest API	Added new API to fit the website




