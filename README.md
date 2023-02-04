# RestAPITechnicalTask

1) This code will show the REST API using JavaScript and NodeJS. The Postman software is used to display the result of the REST API.
2) There are no database implementation and no user interface as this only to test CRUD of the REST API is working.

3) Lists of function that available:
- Get all the product data 
- Get specific product data 
- Create a new product data
- Update any product data
- Delete any product data

4) The product data that being manipulated located in the filename "data.js"

5) List npm package that being used:

   - nodemon
   - express
   - uuid

6)How to run the code:
   
- Open terminal in VS Code ->type "nodemon main.js'
- Open Postman to test the REST API

7)Here the result of REST API from Postman:

   a) GET action result

   - Get all the product data 
   ![GetProduct](https://user-images.githubusercontent.com/62758016/216759564-162850ef-baae-4741-9b70-1953d4d456a5.PNG)

   - Get product data from id ="2-sample"
   ![getSelectedProduct](https://user-images.githubusercontent.com/62758016/216766226-5dce83a2-b3c8-4457-a98b-97b16c0aa703.PNG)

   b)POST action result

   - Create a new product data
   ![CreateProduct](https://user-images.githubusercontent.com/62758016/216766276-5fdd4a40-95ff-4040-8073-500532ce3436.PNG)
   - Proof POST action is successfully added in using GET action 
   ![GetAllLatestProduct](https://user-images.githubusercontent.com/62758016/216766303-101a4cda-da8b-4965-88c4-ffb70c28ccae.PNG)

   c)PATCH action result

   - Update product data which id="3-sample"
   ![UpdateProduct](https://user-images.githubusercontent.com/62758016/216766307-c2ba43a5-006b-490a-aba9-a673828b0f31.PNG)
   
   d)Delete action result

   - Delete product data whic id="2-sample"
   ![DeleteProduct](https://user-images.githubusercontent.com/62758016/216766332-852da394-9e14-4c5e-8527-2b861758937b.PNG)
