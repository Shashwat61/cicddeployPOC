const express = require('express');

const PORT = 3000 || process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World on updated again');
})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})

