const express = require('express');
const app = express();
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});


app.get('/roll/:number', (req, res) => {
    const number= req.params.number;
    res.send(`You rolled a ${number}!`);
});


app.get('/collectibles/:index', (req, res) => {
    const index= req.params.index;
    if (index >= 0 && index < collectibles.length) {
        const collectible = collectibles[index];
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
    } else {
        res.send('This item is not yet in stock. Check back soon!');
    }
});


app.get('/shoes', (req, res) => {
    const { minPrice, maxPrice, type } = req.query;
    let filteredShoes = shoes;
    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseInt(minPrice));
    }
    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseInt(maxPrice));
    }
    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    res.json(filteredShoes);
});








app.listen(3000, () => {
    console.log('Listening on port 3000');
  });