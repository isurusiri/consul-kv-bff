export class Store {
    private static store: Store;
    public keys: string[];

    constructor() {}

    public static getInstance(): Store {
        if(!Store.store) {
            Store.store = new Store();
        }

        return Store.store;
    }

    public setKeyList(keys: string[]) {
        this.keys = keys;
    }

    public getKeyList(): string[] {
        return this.keys;
    }
}


let keys: string[] = [];

export const setKeyList = (keys: string[]) => {
    keys = keys;
}

export const getKeyList = () => {
    return keys
}
