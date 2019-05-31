import {modelUtil} from "../util/modelUtil";
import {constants} from "../util/constants";
import {Model} from "../externals/objectmodel";

class GridActionPredict extends Model({
    id: String,
    modelName: String,
    modelVersion: String,
    dictionaryId: [String],
    suggestOnChange: [Boolean]
}) {
    constructor(properties, elementToCopy) {
        properties = modelUtil.setDefaults(properties, elementToCopy, GridActionPredict);
        super(properties);
        this.id = this.id || modelUtil.generateId('grid-action-predict')
    }

    static getModelName() {
        return "GridActionPredict";
    }
}

GridActionPredict.defaults({
    id: "", //will be replaced by constructor
    modelName: GridActionPredict.getModelName(),
    modelVersion: constants.MODEL_VERSION,
    dictionaryId: null,
    suggestOnChange: false
});

export {GridActionPredict};