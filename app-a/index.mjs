import {getLibBVersion, printDependencyVersion} from 'lib-b'

console.log("Starting application 1.0.0")

printDependencyVersion()
console.log(`Library B version: ${getLibBVersion()}`)