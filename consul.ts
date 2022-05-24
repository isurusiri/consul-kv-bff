var consul = require('consul')();

export const getKeyValuePairsFromConsul = () => {
    consul.kv.get({key: 'isuru'}, (error: any, result: any) => {
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
