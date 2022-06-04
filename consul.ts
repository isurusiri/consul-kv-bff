import { Store } from "./store";

var consul = require('consul')();
let store = Store.getInstance();

export const getKeyValuePairsFromConsulByKey = async (
    key: string, 
    resolve: Function, 
    reject: Function): Promise<string[]> => {
    if (!key) {
        consul.error('key is required to query.')
        return;
    }
    
    await consul.kv.get({key: key, resolve}, (error: any, result: any) => {
        if (error) {
            console.log('Error while reading consul');
            console.log(error);
            return;
        }

        if (result == undefined) {
            console.log('Content not found');
        } else {
            resolve(result)
        }
    });
}

export const refreshKeyList = () => {
    let keys = process.env.KV_KEYS
    store.setKeyList(keys.split(","));
}
