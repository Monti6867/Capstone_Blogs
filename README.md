## Capstone Blogs

This project is a basic blog platform built with Node.js, Express, and EJS for server-side rendering. It features full CRUD (Create, Read, Update, Delete) functionality for managing blog posts. Users can create, edit, view, and delete blog files.

<h1>Features</h1>
<b>Create:</b>  Users can create a new blog post by submitting a form.<br><br>
<b>Read:</b>  Users can view all available blog posts on the homepage.<br><br>
<b>Update:</b> Users can edit existing blog posts.<br><br>
<b>Delete:</b> Users can delete any blog post.<br><br>

<h1>Technology Stack</h1>
<b>Node.js:</b> JavaScript runtime for the server.<br><br>
<b>Express.js:</b> Framework for handling routes and middleware.<br><br>
<b>EJS:</b> Templating engine for rendering views.<br><br>
<b>File System (fs):</b> Used for file operations (reading, writing, and deleting blog files).<br>

## Project Snapshots
<img src="https://github.com/user-attachments/assets/ad3ef587-9e49-4bd3-831f-febd6de8fc26" width="600" height="500">
<img src="https://github.com/user-attachments/assets/df94d80a-38c6-4d80-87e7-d007a895b09b" width="600" height="500">
<img src="https://github.com/user-attachments/assets/40df78b9-f84f-46a7-9dcc-dcf306d38843" width="600" height="500">


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
