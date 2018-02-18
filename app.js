const express = require('express');
const exphbs  = require('express-handlebars');
const sortByCount = require('./sortByCount.js');
const path = require('path');
const createWordMap = require('./createWordMap.js');
const fs = require("fs");
const app = express();


app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/result',(req,res)=>{
  let array;
  fs.readFile('test.txt', function(err, data) {
    if(err) throw err;
    array = data.toString().toLowerCase().replace(/[^a-zA-Z ]/g, "").split(/\s+/);
    let wordsMap = createWordMap(array);
    let finalWordsArray = sortByCount(wordsMap);
    //var ar2 = ar.slice(1, 1 + 3);
    let num = req.query['num'];
    if(num==undefined){
      finalWordsArray = {};
    }
    let finalArray = Object.entries(finalWordsArray).slice(0,num).map(entry => entry[1]);;
    //console.log(finalArray);

    res.render('result',{
      data:finalArray
    });
    //res.send(wordsMap);
  });


});

const port = 5000;

app.listen(port,()=>{
  console.log(`server has started on port ${port}`);
});
