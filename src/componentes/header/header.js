import "./header.css"


export const header =  document.createElement("header");

import { buttonCleaner } from "./cleaner";
header.append(buttonCleaner);

import { input } from "./input";
header.append(input);

import { buttonInput } from "./buttonInput";
header.append(buttonInput)

