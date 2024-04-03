const express = require('express')
const newsGetRouter = express.Router();
const schedule = require('node-schedule');
const axios = require('axios');
let newsDataTech = null;
let newsDataPopular = null;
let newsDataAI = null;
let newsDataBlockchain = null;
let newsDataGaming = null;
let newsDataWD = null;
let newsDataDSA = null;
let newsDataHW = null;
let newsDataScience = null;
let newsDataBusiness = null;

async function fetchNewsTech() {
  console.log("Fetching Data...");
  try {
    const response = await axios.get('https://gnews.io/api/v4/search?q=tech&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
    newsDataTech = response.data;
    console.log("Fetched Data:", newsDataTech);
  } catch (err) {
    console.error("Error fetching data:", err); 
  }
}
async function fetchNewsPopular() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/top-headlines?category=technology&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataPopular = response.data;
      console.log("Fetched Data:", newsDataPopular);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsAI() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=AI&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataAI = response.data;
      console.log("Fetched Data:", newsDataAI);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsBlockchain() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Blockchain&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataBlockchain = response.data;
      console.log("Fetched Data:", newsDataBlockchain);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsGaming() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Gaming&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataGaming = response.data;
      console.log("Fetched Data:", newsDataGaming);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsWD() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Web%20Development&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataWD = response.data;
      console.log("Fetched Data:", newsDataWD);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsDSA() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Data%20Science&Analytics&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataDSA = response.data;
      console.log("Fetched Data:", newsDataDSA);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsHW() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Health%20and%20Wellness&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataHW = response.data;
      console.log("Fetched Data:", newsDataHW);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsScience() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Science&Technology&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataScience = response.data;
      console.log("Fetched Data:", newsDataScience);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
  async function fetchNewsBusiness() {
    console.log("Fetching Data...");
    try {
      const response = await axios.get('https://gnews.io/api/v4/search?q=Business&Finance&lang=en&sortby=publishedAt&country=in&apikey=247fa4b2364cd3a06dc29a20e750e22f');
      newsDataBusiness = response.data;
      console.log("Fetched Data:", newsDataBusiness);
    } catch (err) {
      console.error("Error fetching data:", err); 
    }
  }
setInterval(fetchNewsTech, 10000001); 
setInterval(fetchNewsPopular, 10000002); 
setInterval(fetchNewsAI, 10000003);
setInterval(fetchNewsBlockchain, 10000004);
setInterval(fetchNewsGaming, 10000005);
setInterval(fetchNewsWD, 10000006);
setInterval(fetchNewsDSA, 10000007);
setInterval(fetchNewsHW, 10000008);
setInterval(fetchNewsScience, 10000009);
setInterval(fetchNewsBusiness, 10000010);
newsGetRouter.get('/news/tech', (req, res) => {
    if (newsDataTech) {
        res.json(newsDataTech); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/popular', (req, res) => {
    if (newsDataPopular) {
        res.json(newsDataPopular); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/AI', (req, res) => {
    if (newsDataAI) {
        res.json(newsDataAI); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/Blockchain', (req, res) => {
    if (newsDataBlockchain) {
        res.json(newsDataBlockchain); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/WD', (req, res) => {
    if (newsDataWD) {
        res.json(newsDataWD); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/DSA', (req, res) => {
    if (newsDataDSA) {
        res.json(newsDataDSA); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/HW', (req, res) => {
    if (newsDataHW) {
        res.json(newsDataHW); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/Science', (req, res) => {
    if (newsDataScience) {
        res.json(newsDataScience); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})
newsGetRouter.get('/news/Business', (req, res) => {
    if (newsDataBusiness) {
        res.json(newsDataBusiness); 
      } else {
        res.status(503).send({ message: 'News data not available yet.' }); 
      }
})

module.exports = {newsGetRouter}