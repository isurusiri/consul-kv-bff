import {Request, Response, NextFunction} from 'express';
import {KVPair} from "./models"

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

export const getKeyValuePairs = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(kvPairs);
}

// for dev testing
export const updateKeyValuePairs = (request: Request, response: Response, next: NextFunction) => {
    let kv: KVPair = {...request.body};
    kvPairs.push(kv);
    response.status(201).json(kvPairs);
}