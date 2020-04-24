import {RawBuildingType, Stat, TargetAttribute} from "./definitions";
import {Building, Path, Slot, Tier} from "./building";

export function serializeBuilding(def: RawBuildingType): Building {
    return {
        name: def.Name,
        id: def.Id,
        description: def.Description,
        fullDescription: def.FullDescription,
        slot: serializeSlot(def.SlotAffinity),
        tier: serializeTier(def.TierAffinity),
        path: serializePath(def.Role),
        ...serializeStats(def.Stats)
    }
}

interface Stats {
    hp?: Array<number>,
    influence?: Array<number>,
    cost: {
        time?: Array<number>,
        metal?: Array<number>,
        gas?: Array<number>,
        crystal?: Array<number>
    }
}

function serializeStats(stats?: Array<Stat>) {
    const result: Stats = { cost: {} }

    stats?.forEach(stat => {
        switch (stat.TargetAttribute) {
            case TargetAttribute.COST_CRS:
                result.cost.crystal = stat.ModifierArray;
                break;
            case TargetAttribute.COST_GAS:
                result.cost.gas = stat.ModifierArray;
                break;
            case TargetAttribute.COST_MTL:
                result.cost.metal = stat.ModifierArray;
                break;
            case TargetAttribute.COST_TIME:
                result.cost.time = stat.ModifierArray;
                break;
            case TargetAttribute.STAT_B_HP:
                result.hp = stat.ModifierArray;
                break;
            case TargetAttribute.STAT_PROD_SPG:
                result.cost.metal = stat.ModifierArray;
                break;
        }
    });

    return result;
}

export function serializeTier(tierAffinity?: Array<number>): Tier | undefined {
    if (!tierAffinity || tierAffinity.length != 1)
        return undefined;

    const tier = tierAffinity[0] + 1;

    if (tier == 1 || tier == 2 || tier == 3 || tier == 4) {
        return tier;
    } else {
        return undefined;
    }
}

export function serializeSlot(slotAffinityValue?: string): Slot | undefined {
    switch (slotAffinityValue) {
        case "Specialization":
            return Slot.SPECIALIZATION
    }

    if (/\w*Production/.test(slotAffinityValue ?? ""))
        return Slot.PRODUCTION

    return undefined;
}

function serializePath(role?: string): Path | undefined {
    switch (role) {
        case "Military": return Path.MILITARY;
        case "Industry": return Path.INDUSTRY;
        case "Domain": return Path.DOMAIN;
        default: return undefined
    }
}
