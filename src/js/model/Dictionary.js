import {modelUtil} from "../util/modelUtil";
import {constants} from "../util/constants";
import {Model} from "../externals/objectmodel";

class Dictionary extends Model({
    id: String,
    modelName: String,
    modelVersion: String,
    dictionaryKey: String,
    data: [String] //JSON data
}) {
    constructor(properties, elementToCopy) {
        properties = modelUtil.setDefaults(properties, elementToCopy, Dictionary);
        super(properties);
        this.id = this.id || modelUtil.generateId('dictionary');
    }

    static getModelName() {
        return "Dictionary";
    }
}

Dictionary.defaults({
    id: "", //will be replaced by constructor
    modelName: Dictionary.getModelName(),
    modelVersion: constants.MODEL_VERSION
});

export {Dictionary};