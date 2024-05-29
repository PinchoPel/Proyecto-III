import "./header.css"


export const header =  document.createElement("header");

import { buttonCleaner } from "./cleanerFilter/cleaner";
header.append(buttonCleaner);

import { input } from "./Input/input";
header.append(input);

import { buttonInput } from "./buttonInputSearch/buttonInput";
header.append(buttonInput)

