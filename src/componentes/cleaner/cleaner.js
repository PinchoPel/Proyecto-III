import "./cleaner.css"

import { main } from "../main/main-part";
import { input } from "../input/input";

export let buttonCleaner = document.createElement("button");
buttonCleaner.textContent = "limpiar";
buttonCleaner.id = "buttonCleaner";

buttonCleaner.addEventListener("click", function(){
    main.innerHTML = "";
    input.value = "";
})