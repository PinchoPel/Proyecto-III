import "./cleaner.css"

import { main } from "../main/main-part";
import { input } from "../input/input";

export let buttonCleaner = document.createElement("button");
const imageButtonCleaner = document.createElement("img");
imageButtonCleaner.src = new URL("./broom-svgrepo-com.svg", import.meta.url).href;
buttonCleaner.id = "buttonCleaner";
imageButtonCleaner.id = "broom";
buttonCleaner.append(imageButtonCleaner);


buttonCleaner.addEventListener("click", function(){
    main.innerHTML = "";
    input.value = "";
})