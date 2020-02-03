import {FlexProperties} from '../ui/flexTypes'

const KEY = 'flexProperties'

export const onSaveNodeProperties = (nodeProperties, node: FrameNode): void => {
    const propertiesStr = Object.keys(nodeProperties).reduce(
        (str, key): string => str + (`${key}: ${nodeProperties[key]};`),
        ''
    );
    node.setPluginData(KEY, propertiesStr);
}

export const getSavedNodeProperties = (node: FrameNode): FlexProperties | null => {
    const propertiesStr = node.getPluginData(KEY);
    if (!propertiesStr) {
        return null
    }
    const propertiesArray = propertiesStr.split(';')
    const flexProperties= propertiesArray.reduce((properties, str) => {
        if (!str) {
            return properties;
        } 
        const array = str.split(':');
        properties[array[0].trim()] =  array[1].trim()
        return properties
        }, {}) as FlexProperties;
    return flexProperties
}
