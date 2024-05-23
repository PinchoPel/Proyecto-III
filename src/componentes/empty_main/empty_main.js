import "./section.css"

import { main } from "../main/main-part"

import { input } from "../input/input";
import { buttonInput } from "../button/button";


let suggestionSearch = () => {
    setTimeout(() => {
    if (main.childNodes.length === 0) {
    main.innerHTML = "";
    const empty_section = document.createElement("section");
    empty_section.id = "empty_section";
    for (let index = 1; index <= 3; index++) {
    fetch("https://api.unsplash.com/photos/random/?client_id=_ZC3EpBkncFLqeDKz12rWWm0EbcJZ_ouC3H2aekMHFE",{
        method: "GET"
    }).then(res => res.json())
    .then(photos =>{
        let empty_button = document.createElement("button");
        let suggestions = photos.tags_preview;
            let randomNumber = Math.floor(Math.random() * suggestions.length);
        empty_button.textContent =  suggestions[randomNumber].title;
        empty_button.id = "empty_button";
            empty_section.append(empty_button);
            main.append(empty_section);
            empty_button.addEventListener("click",function(){
            input.value = empty_button.textContent;
            empty_button.addEventListener("click",function(){
                input.focus();
                })
            })
    })}
}    }, 1300);
}

export let  searchPhotosButton_Empty = buttonInput.addEventListener("click",suggestionSearch)

export let searchPhotosEnter_Empty = input.addEventListener("keypress",function(event){
    if (event.key == 'Enter') {
        suggestionSearch();
    }
});

