// import express from 'express';
// import bodyParser from 'body-parser';
// import fs from 'fs';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// // Define GET route for /
// app.get('/', (req, res) => {
//     fs.readdir(__dirname, (err, files) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error reading directory");
//             return;
//         }
//         const blogFiles = files.filter(file => file.startsWith('blog') && file.endsWith('.ejs'));
//         res.render('index', { blogFiles });
//     });
// });

// // Define GET route for /open
// app.post('/open', (req, res) => {
//     res.render(__dirname + "/views/prompt.ejs");
// });

// // Define POST route for /submit
// app.post('/submit', (req, res) => {
//     const filename = req.body.filename;
//     const message = req.body.street;
//     saveFileWithIncrementingName(__dirname, filename, message, "ejs");
//     res.redirect('/');
// });

// // Define GET route for /blog/:filename
// app.get('/blog/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, filename);
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("Error reading file");
//             return;
//         }
//         res.send(data);
//     });
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Function to save file with incrementing name
// function saveFileWithIncrementingName(baseDir, baseName, content, extension = 'ejs') {
//     let counter = 0;
//     let filePath;
    
//     do {
//         counter++;
//         filePath = path.join(baseDir, `${baseName}${counter}.${extension}`);
//     } while (fs.existsSync(filePath));

//     fs.writeFile(filePath, content, (err) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(`File saved as ${filePath}`);
//         }
//     });
// }
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// GET route for /
app.get('/', (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading directory");
            return;
        }
        const blogFiles = files.filter(file => file.endsWith('.ejs'));
        res.render('index', { blogFiles });
    });
});

// GET route for /open
app.post('/open', (req, res) => {
     res.render(__dirname + "/views/prompt.ejs");
    });

// POST route for /submit
app.post('/submit', (req, res) => {
    const filename = req.body.filename;
    const content = req.body.content;
    const filePath = path.join(__dirname, `${filename}.ejs`);
    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error saving file");
            return;
        }
        res.redirect('/');
    });
});

// GET route for /blog/:filename
app.get('/blog/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file");
            return;
        }
        res.send(data);
    });
});

// GET route for editing a file
app.get('/edit/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file");
            return;
        }
        res.render('edit', { filename, content: data });
    });
});

// POST route for updating a file
app.post('/update', (req, res) => {
    const filename = req.body.filename;
    const content = req.body.content;
    const filePath = path.join(__dirname, filename);
    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error updating file");
            return;
        }
        res.redirect('/');
    });
});

// POST route for deleting a file
app.post('/delete/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, filename);
    
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error deleting file");
            return;
        }
        res.redirect('/');
    });
});



// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
