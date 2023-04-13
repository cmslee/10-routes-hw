const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

//*VIEW ENGINE

app.engine('blank', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})

//*CONFIG

app.set('views', './views', 'view engine', 'jsx');
app.set('view engine', 'blank');
app.engine('jsx', require('jsx-view-engine').createEngine());

//*ROUTES

//1
app.get('/', (req, res) => {
    res.send(` 
    <h1>Hello, 10 routes!</h1>
    <a href='/menu'><h3>Let's get started...</h3></a>
    `)
});

//2
app.get('/menu', (req, res) => {
    res.render('menu.jsx', {title: 'Menu'})
});

//3
app.get('/about', (req, res) => {
    res.render('template', {
        title: 'Akita Yuru-chara',
        message: `Welcome to the Akita mascots Project!`,
        content: `Yuru-kyara, character mascots, have been used to promote local culture in various prefectures of Japan since the early 2000s. I'll use these routes to introduce a few of Akita Prefecture's I've research for my current translation project..`
    })
})

//4
app.get('/sugicchi', (req, res) => {
    res.render('template', {
        title: 'Sugicchi',
        message: `Hi! I am Sugicchi!`,
        content: `
            <img src='http://1.bp.blogspot.com/-zYGT1d-JTAs/TbESRyazkHI/AAAAAAAAHzA/5CayVCmUqvk/s1600/sugicchi.jpg' alt='a cedar tree character' width='250'></img>
            <ul>
                <li><a href='http://ohtazawako.blogspot.com/2011/04/sugicchi-is-akitas-pr-mascot-character.html' target=
                '_blank' rel='noreferrer'>reference 1</a></li>
            </ul>
        `  
    })
})

//5
app.get('/sumicchi', (req, res) => {
    res.render('template', {
        title: 'Sumicchi',
        message: `Hi! I am Sumicchi!`,
        content: `Supposedly the evil counterpart of Sugicchi.`  
    })
})

//6
app.get('/sugimmi', (req, res) => {
    res.render('template', {
        title: 'Sugimmi',
        message: `Hi! I am Sugimmi!`,
        content: `A more different cedar...`  
    })
})

//7
app.get('/missEcoA', (req, res) => {
    res.render('template', {
        title: 'Miss Eco-A',
        message: `Hi! I'm Miss Eco-A!`,
        content: `
            <img src='https://www.city.akita.lg.jp/_res/projects/default_project/_page_/001/006/158/ecoa.jpg' alt='a green leafy a-shape character' width='250'></img>
            <ul>
                <li><a href='https://www.city.akita.lg.jp/kurashi/recycle/1006158.html' target=
                '_blank' rel='noreferrer'>reference 1</a></li>
            </ul>
        `  
    })
})

//8
app.get('/kamabokon', (req, res) => {
    res.render('template', {
        title: 'Kamabokon',
        message: `Hi! I'm Kamabokon!`,
        content: `Based on a fish cake!`  
    })
})

//9
app.get('/datemakin', (req, res) => {
    res.render('template', {
        title: 'Datemakin',
        message: `Hi! I am Datemakin!`,
        content: `A new year omelette roll!`  
    })
})

//10
app.get('/ndatchi', (req, res) => {
    res.render('template', {
        title: 'Ndatchi',
        message: `Hi! I am Ndatchi!`,
        content: `
            <img src='https://www.pref.akita.lg.jp/uploads/public/archive_0000033524_00/%E7%A7%8B%E7%94%B0%E7%9C%8C%EF%BC%B0%EF%BC%B2%E3%82%AD%E3%83%A3%E3%83%97%E3%83%86%E3%83%B3%E3%82%93%E3%81%A0%E3%83%83%E3%83%81_-crop.jpg' alt='a red, yellow, orange-themed folkloric character holding a staff' width='250'></img>
            <ul>
                <li><a href='https://twitter.com/mondomascots/status/1548167875416178688?lang=en' target=
                '_blank' rel='noreferrer'>reference 1</a></li>
            </ul>
        `  
    })
})

// wildcard
app.get('*', (req, res) => {
    res.render('404')
});


//*LISTEN

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`)
});