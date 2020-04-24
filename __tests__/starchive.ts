import Starchive from "../lib/starchive";
import {DefinitionsSource, RawBuildingType} from "../lib/definitions";
import {Slot} from "../lib/building";

it('should properly find buildings by SLOT and TIER', function () {
    const starchive = new Starchive(mockDefinitionsSource);

    expect(
        starchive.findBuildings({
            slot: Slot.SPECIALIZATION,
            tier: 2
        }).map(building => building.name)
    ).toStrictEqual([ "Alpha" ])
});

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
            }
        ]
    }
}