export enum Slot {
    PRODUCTION = "PRODUCTION",
    SPECIALIZATION = "SPECIALIZATION"
}

export type Tier = 1 | 2 | 3 | 4

enum Uniqueness {
    EMPIRE = "EMPIRE",
    STATION = "STATION"
}

enum Path {
    MILITARY = "MILITARY",
    DOMAIN = "DOMAIN",
    INDUSTRY = "INDUSTRY"
}

interface Building {
    id: number,
    name: string,
    description: string,
    fullDescription: string,
    slot: Slot,
    tier: Tier,
    cost: {
        time: Array<number>,
        metal: Array<number>,
        gas: Array<number>,
        crystal: Array<number>
    }
    influence: Array<number>
    uniqueness?: Uniqueness,
    path?: Path,
    requiredInPath?: number
}