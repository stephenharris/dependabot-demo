import {getLibCVersion} from 'lib-c'

export function getLibBVersion() {
    return "1.0.0";
}

export function printDependencyVersion() {
    console.log(`Library C version: ${getLibCVersion()}`)
}

