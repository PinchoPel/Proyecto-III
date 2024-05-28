import "./header.css"


export const header =  document.createElement("header");

import { buttonCleaner } from "../cleaner/cleaner";
header.append(buttonCleaner);

import { input } from "../input/input";
header.append(input);

import { buttonInput } from "../search/button";
header.append(buttonInput)

import { searchPhotosButton_Empty } from "../empty_main/empty_main";
searchPhotosButton_Empty

import { searchPhotosEnter_Empty } from "../empty_main/empty_main";
searchPhotosEnter_Empty 