const express = require('express');

const app = express();
//app.use(express.static(path.join(__dirname, '/views')));
app.set('view engine', 'ejs');
app.set('views', './views');

//https://stackoverflow.com/questions/54173476/js-file-gets-a-neterr-aborted-404-not-found
app.use("/public", express.static('./public/'));
//---
app.get('/', (req, res) => res.render('home'));

app.listen(3000, () => console.log('server started'));