import { Request, Response, NextFunction } from 'express';
import { getKeyValuePairsFromConsulByKey, refreshKeyList } from './consul';
import { KVPair } from "./models"
import { Store } from './store';

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

let store = Store.getInstance();

export const getKeyValuePairs = async (request: Request, response: Response, next: NextFunction) => {
    let keys = store.getKeyList();
    
    let kvPairs = []
    for (const key of keys) {
        kvPairs.push(await getKeyValuePairsFromConsulByKey(key, (kvs: any) => {kvPairs.push(kvs)}, () => {}));
        console.log(kvPairs);
    }
    // keys.forEach(async (key, index) => {
    //     await kvPairs.push(getKeyValuePairsFromConsulByKey(key, (kvs: any) => {kvPairs.push(kvs)}, () => {}));
    // })

    console.log(`Resp: ${0}`, kvPairs)
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
