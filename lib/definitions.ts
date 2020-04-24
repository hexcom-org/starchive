import {Slot} from "./building";

export interface RawBuildingType {
    Id: number
    Name: String
    TierAffinity: Array<number>
    SlotAffinity: string
}

export interface RawBuildingDefinitions {
    BuildingTypes: Array<RawBuildingType>
}

export interface DefinitionsSource {
    getBuildingTypeDefinitions(): Array<RawBuildingType>
}

export function slotFromRawValue(slotAffinityValue: string): Slot | undefined {
    switch (slotAffinityValue) {
        case "Specialization":
            return Slot.SPECIALIZATION
    }
}