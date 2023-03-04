const express = require('express');
const axios = require('axios');
const path = require('path');
const { CLIENT_RENEG_WINDOW } = require('tls');

const PORT = 3000;

const app = express();
app.use('/static', express.static(path.join(__dirname, '/public')))


app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'index.html'))
})



app.get('/api',async (req, res) => {

    console.log(req._parsedUrl.query);
    let url = `https://newsapi.org/v2/everything?${req._parsedUrl.query}&sortBy=1&apiKey=51aa1d9eebab4d3ebfe873c6fbbeb530`;
    let fetchedNews = await axios.get(url);
    let news = fetchedNews.data;
    res.json(news);
    console.log('API working');
})






app.listen(PORT, () => {
    console.log(`PORT IS RUNNING ON : http://localhost:${PORT}/`);
})
