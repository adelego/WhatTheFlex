import {FlexProperties } from './flexTypes'

export const getCSSStyle = (flexProperties: FlexProperties): string => {
    return `flex-direction: ${flexProperties.flexDirection};\n justify-content: ${flexProperties.justifyContent};\n align-items: ${flexProperties.alignItems}`
}
