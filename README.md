## Capstone Blogs

This project is a basic blog platform built with Node.js, Express, and EJS for server-side rendering. It features full CRUD (Create, Read, Update, Delete) functionality for managing blog posts. Users can create, edit, view, and delete blog files.

<h1>Features</h1>
Create: Users can create a new blog post by submitting a form.<br><br>
Read: Users can view all available blog posts on the homepage.<br><br>
Update: Users can edit existing blog posts.<br><br>
Delete: Users can delete any blog post.<br><br>

<h1>Technology Stack</h1>
Node.js: JavaScript runtime for the server.<br><br>
Express.js: Framework for handling routes and middleware.<br><br>
EJS: Templating engine for rendering views.<br><br>
File System (fs): Used for file operations (reading, writing, and deleting blog files).<br>


<h1>Routes</h1>

Home Route (GET /)<br>
Fetches and displays all .ejs blog files from the server directory.<br><br>

Create Route (POST /submit)<br>
Saves a new blog post. The content is stored in an .ejs file.<br><br>

Read Route (GET /blog/:filename)<br>
Displays the content of a specific blog post.<br><br>

Edit Route (GET /edit/:filename)<br>
Renders a form to edit the content of an existing blog post.<br><br>

Update Route (POST /update)<br>
Updates the content of an existing blog post and saves changes.
<br><br>
Delete Route (POST /delete/:filename)<br>
Deletes a blog post file from the server.


<h1>Future Improvements</h1>
Implement authentication for secure blog management.<br><br>
Add a database to store blogs instead of using the file system.<br><br>
Improve the user interface with additional styling and features.<br><br>
