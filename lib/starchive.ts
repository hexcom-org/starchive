import {DefinitionsSource, RawBuildingType, slotFromRawValue} from "./definitions";
import {BuildingMatcher} from "./matchers";

function buildChecks(matcher: BuildingMatcher): Array<(def: RawBuildingType) => boolean> {
    const checks: Array<(def: RawBuildingType) => boolean> = [];

    if (matcher.tier) {
        checks.push(def => def.TierAffinity && def.TierAffinity[0] + 1 == matcher.tier)
    }

    if (matcher.slot) {
        checks.push(def => slotFromRawValue(def.SlotAffinity) == matcher.slot);
    }

    return checks;
}

export default class Starchive {
    private readonly definitionsSource: DefinitionsSource;

    constructor(definitionsSource: DefinitionsSource) {
        this.definitionsSource = definitionsSource;
    }

    findBuildings(matcher: BuildingMatcher): Array<RawBuildingType> {
        const checks = buildChecks(matcher);

        return this.definitionsSource.getBuildingTypeDefinitions()
            .filter(def => checks.every(check => check(def)))
    }
}