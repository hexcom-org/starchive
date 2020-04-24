export interface RawBuildingType {
    FullDescription?: string;
    Description?: string;
    Id?: number
    Name?: string
    TierAffinity?: Array<number>
    SlotAffinity?: string
    Stats?: Array<Stat>
    Role?: string,
    PathDependency?: PathDependency
}

export interface RawBuildingDefinitions {
    BuildingTypes: Array<RawBuildingType>
}

export interface DefinitionsSource {
    getBuildingTypeDefinitions(): Array<RawBuildingType>
}

export enum TargetAttribute {
    COST_CRS = "COST_CRS",
    COST_GAS = "COST_GAS",
    COST_MTL = "COST_MTL",
    COST_TIME = "COST_TIME",
    STAT_PROD_SPG = "STAT_PROD_SPG",
    STAT_B_HP = "STAT_B_HP"
}

export interface PathDependency {
    Path: string,
    Required: number
}

export interface Stat {
    TargetAttribute: TargetAttribute,
    ModifierArray: Array<number>
}