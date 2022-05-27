import express, {Request, Response, NextFunction} from 'express';
import cors from "cors";
import helmet from "helmet";
import { getKeyValuePairs, updateKeyValuePairs } from './api';
import { setKeyList } from './store';

const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// mock
setKeyList(['isuru-a', 'isuru-b'])

app.listen(port, () => {
    console.log(`Cunsul KV BFF is running on port ${port}`)
});

app.get('/kvpairs', getKeyValuePairs);
app.post('/kvpairs', updateKeyValuePairs);
