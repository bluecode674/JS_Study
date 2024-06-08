const express = require('express');
const app = express();

app.get('*', (request, response) => {
    let sum = 0;
    response.send(`<h1>1-10까지 합=${sum}</h1>`)
});

app.listen(8000, () => {
    console.log("Server running")
})