import {Request, Response, NextFunction} from 'express';
import { getKeyValuePairsFromConsulByKey, refreshKeyList } from './consul';
import {KVPair} from "./models"
import { getKeyList } from './store';

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
    let keys = getKeyList();
    let kvPairs = []
    keys.forEach((key, index) => {
        kvPairs = getKeyValuePairsFromConsulByKey(key);
    })
    
    response.status(200).json(kvPairs);
}

// for dev testing
export const updateKeyValuePairs = (request: Request, response: Response, next: NextFunction) => {
    let kv: KVPair = {...request.body};
    kvPairs.push(kv);
    response.status(201).json(kvPairs);
}

export const syncKeyList =  (request: Request, response: Response, next: NextFunction) => {
    refreshKeyList();
    response.status(202);
}
