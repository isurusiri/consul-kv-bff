import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Cunsul KV BFF is running on port ${port}`)
});
