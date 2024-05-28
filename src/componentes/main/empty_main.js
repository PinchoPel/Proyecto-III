import "./section.css"

import { main } from "./main-part";

import { input } from "../header/input";

import { buttonInput } from "../header/buttonInput";

export let suggestionSearch = () => {
    setTimeout(() => {
    if (main.childNodes.length === 0) {
    main.innerHTML = "";
    const empty_section = document.createElement("section");
    empty_section.id = "empty_section";
    fetch("https://api.unsplash.com/photos/random?count=3&topic&client_id=_ZC3EpBkncFLqeDKz12rWWm0EbcJZ_ouC3H2aekMHFE",{
        method: "GET"
    }).then(res => res.json())
    .then(photos =>{
        console.log(photos);
        photos.forEach(element => {
        let empty_button = document.createElement("button");
        empty_button.textContent =  element.alt_description;
        empty_button.id = "empty_button";
            empty_section.append(empty_button);
            main.append(empty_section);
            empty_button.addEventListener("click",function(){
            input.value = empty_button.textContent;
            empty_button.addEventListener("click",function(){
                input.focus();
                })
            })
    })   });
}    }, 700);
}

export let  searchPhotosButton_Empty = buttonInput.addEventListener("click",suggestionSearch)

export let searchPhotosEnter_Empty = input.addEventListener("keypress",function(event){
    if (event.key == 'Enter') {
        suggestionSearch();
    }
});
