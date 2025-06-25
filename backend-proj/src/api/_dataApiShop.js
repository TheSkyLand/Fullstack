import { createRequire } from "module";
const require = createRequire(import.meta.url);

const data = require('../../data/data.json');

import { updateJsonFile } from "../helpers/_updateJsonFiles.js";
import { searchIndexObjectDataParamId, searchObjectDataParamId } from "../helpers/_searchDatabase.js";


const dataApiPattern = (app) => {

}