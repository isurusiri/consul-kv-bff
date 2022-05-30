import express from 'express';
import cors from "cors";
import helmet from "helmet";
import { getKeyValuePairs, syncKeyList, updateKeyValuePairs } from './api';
import { setKeyList } from './store';

const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

let keys = process.env.KV_KEYS

setKeyList(keys.split(","))

app.listen(port, () => {
    console.log(`Cunsul KV BFF is running on port ${port}`)
});

app.get('/kvpairs', getKeyValuePairs);
app.post('/kvpairs', updateKeyValuePairs);
app.put('/keylist', syncKeyList);
