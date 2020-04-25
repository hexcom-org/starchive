export enum Slot {
    PRODUCTION = "PRODUCTION",
    SPECIALIZATION = "SPECIALIZATION"
}

export type Tier = 1 | 2 | 3 | 4

export enum Path {
    MILITARY = "MILITARY",
    DOMAIN = "DOMAIN",
    INDUSTRY = "INDUSTRY"
}

export interface Building {
    id?: number,
    name?: string,
    description?: string,
    fullDescription?: string,
    slot?: Slot,
    tier?: Tier,
    cost: {
        time: Array<number>,
        metal: Array<number>,
        gas: Array<number>,
        crystal: Array<number>
    }
    influence: Array<number>,
    hp: Array<number>
    path?: Path,
}