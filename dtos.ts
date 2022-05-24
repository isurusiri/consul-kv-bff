import { KVPair } from "./models"

// KVPairsDTO is used for GET /kvpairs
export interface KVPairsDTO {
    data: KVPair[]
}

// KVPairDTO is used for POST /kvpairs
export interface KVPairDTO {
    data: KVPair
}
