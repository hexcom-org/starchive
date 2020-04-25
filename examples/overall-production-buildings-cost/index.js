const fs = require("fs");
const { Starchive, GameFileDefinitionsSource, Slot } = require("@hexcom/starchive");

// Provide your paths
const starborneInstallationPath = "YOUR_STARBORNE_PATH_HERE"
const definitionsFilePath = `${starborneInstallationPath}/starborne-live/Starborne_Data/TempServerData/Release_98/BUILDING_DEFINITIONS.json`

// Read definitions file contents
const content = fs.readFileSync(definitionsFilePath);
const sanitizedContent = JSON.stringify(content.toString);

// Create DefinitionsSource
const definitionsSource =
    GameFileDefinitionsSource.fromFileContent(sanitizedContent);

// Instantiate Starchive
const starchive = new Starchive(definitionsSource);

// Declare a simple sum function
function sum(a, b) { return a + b }

const level = 10;

const overallCost =
    // Query data
    starchive.findBuildings({ slot: Slot.PRODUCTION })
    // Do calculations
    .map(building => building.cost)
    .map(cost => ({
        crystal: cost.crystal.slice(0, level).reduce(sum, 0),
        gas: cost.gas.slice(0, level).reduce(sum, 0),
        metal: cost.gas.slice(0, level).reduce(sum, 0),
    }))
    .map(resSums => resSums.crystal + resSums.metal + resSums.gas)
    .reduce(sum, 0)

// Print the result
console.log(overallCost);