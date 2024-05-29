import "./cleaner.css"

import { renderPhotos } from "../../main/api_call/api_call";

import { input } from "../Input/input";

export let buttonCleaner = document.createElement("button");
const imageButtonCleaner = document.createElement("img");
imageButtonCleaner.src = new URL("./broom-svgrepo-com.svg", import.meta.url).href;
buttonCleaner.id = "buttonCleaner";
imageButtonCleaner.id = "broom";
buttonCleaner.append(imageButtonCleaner);



buttonCleaner.addEventListener("click", function(){
    renderPhotos();
    input.value = "";
})