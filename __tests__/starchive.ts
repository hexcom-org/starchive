import Starchive from "../lib/starchive";
import {DefinitionsSource, RawBuildingType} from "../lib/definitions";
import {Slot} from "../lib/building";

describe('findBuildings', function () {
    let starchive: Starchive;

    beforeAll(() => {
        starchive = new Starchive(mockDefinitionsSource);
    })

    it('should properly find buildings by SLOT and TIER', function () {
        expect(
            starchive.findBuildings({
                slot: Slot.SPECIALIZATION,
                tier: 2
            }).map(building => building.name)
        ).toStrictEqual([ "Alpha" ])
    });

    it('should properly find production buildings', function () {
        expect(
            starchive.findBuildings({
                slot: Slot.PRODUCTION
            }).map(building => building.name)
        ).toStrictEqual([ "Gamma", "Delta" ])
    })
})

const mockDefinitionsSource: DefinitionsSource = {
    getBuildingTypeDefinitions(): Array<RawBuildingType> {
        return [
            {
                Id: 113,
                Name: "Alpha",
                TierAffinity: [ 1 ],
                SlotAffinity: "Specialization"
            },
            {
                Id: 115,
                Name: "Beta",
                TierAffinity: [ 2 ],
                SlotAffinity: "Specialization"
            },
            {
                Id: 118,
                Name: "Gamma",
                TierAffinity: [ 1 ],
                SlotAffinity: "MetalProduction"
            },
            {
                Id: 132,
                Name: "Delta",
                TierAffinity: [ 0 ],
                SlotAffinity: "GasProduction"
            },
        ]
    }
}