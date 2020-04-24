import {DefinitionsSource, RawBuildingType} from "./definitions";
import {BuildingMatcher} from "./matchers";
import {Building} from "./building";
import {serializeBuilding, serializeSlot, serializeTier} from "./serialization";

function buildChecks(matcher: BuildingMatcher): Array<(def: RawBuildingType) => boolean> {
    const checks: Array<(def: RawBuildingType) => boolean> = [];

    if (matcher.tier) {
        checks.push(def => serializeTier(def.TierAffinity) === matcher.tier)
    }

    if (matcher.slot) {
        checks.push(def => serializeSlot(def.SlotAffinity) === matcher.slot);
    }

    return checks;
}

export default class Starchive {
    private readonly definitionsSource: DefinitionsSource;

    constructor(definitionsSource: DefinitionsSource) {
        this.definitionsSource = definitionsSource;
    }

    findBuildings(matcher: BuildingMatcher): Array<Building> {
        const checks = buildChecks(matcher);

        return this.definitionsSource.getBuildingTypeDefinitions()
            .filter(def => checks.every(check => check(def)))
            .map(def => serializeBuilding(def))
    }
}