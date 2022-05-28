import { setKeyList } from "./store";

var consul = require('consul')();

export const getKeyValuePairsFromConsulByKey = (key: string): string[] => {
    if (!key) {
        consul.error('key is required to query.')
        return;
    }

    consul.kv.get({key: key}, (error: any, result: any) => {
        if (error) {
            console.log('Error while reading consul');
            console.log(error);
            return;
        }

        if (result == undefined) {
            console.log('Content not found');
        } else {
            console.log(result)
        }
    })
}

export const refreshKeyList = () => {
    let keys = process.env.KV_KEYS
    setKeyList(keys.split(","))
}
