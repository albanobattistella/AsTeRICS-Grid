import {modelUtil} from "../util/modelUtil";
import {templates} from "../templates";
import {GridImage} from "./GridImage";
import {GridActionSpeak} from "./GridActionSpeak";
import {GridActionSpeakCustom} from "./GridActionSpeakCustom";
import {GridActionNavigate} from "./GridActionNavigate";

class GridElement extends Model({
    id: String,
    width: Number,
    height: Number,
    x: [Number],
    y: [Number],
    label: [String],
    image: [GridImage],
    actions: [Object],
    type: String
}) {
    constructor(properties, elementToCopy) {
        properties = modelUtil.setDefaults(properties, elementToCopy, GridElement);
        super(properties);
        this.id = this.id || modelUtil.generateId('grid-element')
    }

    duplicate() {
        var newElem = new GridElement(JSON.parse(JSON.stringify(this)));
        newElem.id = modelUtil.generateId('grid-element');
        return newElem;
    }

    toHTML() {
        return templates.getGridItem(this);
    };

    hasSetPosition() {
        return this.x != null && this.x != undefined && this.y != null && this.y != undefined;
    }

    static getActionTypes() {
        return [GridActionSpeak, GridActionNavigate, GridActionSpeakCustom];
    }

    static getActionInstance(modelName) {
        var constructor = this.getActionTypes().filter(type => type.getModelName() == modelName)[0];
        if(constructor) {
            return new constructor();
        } else {
            log.warn('action type not found: ' + modelName);
        }
    }
}

GridElement.ELEMENT_TYPE_NORMAL = "ELEMENT_TYPE_NORMAL";
GridElement.ELEMENT_TYPE_COLLECT = "ELEMENT_TYPE_COLLECT";
GridElement.ELEMENT_TYPE_PREDICT = "ELEMENT_TYPE_PREDICT";

GridElement.defaults({
    id: "", //will be replaced by constructor
    width: 2,
    height: 1,
    actions: [new GridActionSpeak()],
    type: GridElement.ELEMENT_TYPE_NORMAL
});

export {GridElement};