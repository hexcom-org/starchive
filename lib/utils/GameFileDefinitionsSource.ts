import {DefinitionsSource, RawBuildingDefinitions, RawBuildingType} from "../definitions/definitions";

export default class GameFileDefinitionsSource implements DefinitionsSource {
    private constructor(
        private definitionsJson: RawBuildingDefinitions
    ) {}

    static fromFileContent(content: string): GameFileDefinitionsSource {
        const parsedContent = JSON.parse(content);
        return new GameFileDefinitionsSource(parsedContent);
    }

    getBuildingTypeDefinitions(): Array<RawBuildingType> {
        return this.definitionsJson.BuildingTypes;
    }
}