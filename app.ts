import express, {Request, Response, NextFunction} from 'express';
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Cunsul KV BFF is running on port ${port}`)
});

interface KVPair {
    key: string;
    value: string;
}

let kvPairs: KVPair[] = [
    {
        key: "key-1",
        value: "value-1"
    },
    {
        key: "key-2",
        value: "value-1"
    }
]

const getKeyValuePairs = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(kvPairs);
}

// for dev testing
const updateKeyValuePairs = (request: Request, response: Response, next: NextFunction) => {
    let kv: KVPair = {...request.body};
    kvPairs.push(kv);
    response.status(201).json(kvPairs);
}

app.get('/kvpairs', getKeyValuePairs);
app.post('/kvpairs', updateKeyValuePairs);
