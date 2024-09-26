import { INodeProperties } from "n8n-workflow";
import { authenticationProperties } from './authentication.properties';

export default function runHook(properties: INodeProperties[]): {
    properties: INodeProperties[]
} {
    return {
        properties: [
					...authenticationProperties,
					...properties
				]
    }
}
