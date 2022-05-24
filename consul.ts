var consul = require('consul')();

export const getKeyValuePairsFromConsulByKey = (key = 'isuru') => {
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
