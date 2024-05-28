import "./button.css"

import { main } from "../main/main-part";

import { input } from "../input/input";




export const buttonInput = document.createElement("button");
const imageButton = document.createElement("img");
imageButton.src = new URL("./search-alt-2-svgrepo-com.svg", import.meta.url).href;
imageButton.alt  = "Buscar";
imageButton.className = "lupa";
buttonInput.id = "buttonInput";
buttonInput.append(imageButton);

let filteredPhotos = () =>{
    main.innerHTML = "";
    let inputValue = input.value.toLocaleLowerCase();
        fetch("https://api.unsplash.com/search/photos?per_page=7&query=" + inputValue + "&client_id=_ZC3EpBkncFLqeDKz12rWWm0EbcJZ_ouC3H2aekMHFE",{
            method: "GET"
        }).then(res => res.json())
        .then(photos =>{
                photos.results.forEach(element => {
                    let card = document.createElement("div");
                   let image = document.createElement("img");
                   let title = document.createElement("h4");
                   card.id = "card";
                  image.src = element.urls.regular;
                  image.alt = element.alt_description;
                  image.id = "photo";
                  title.textContent = element.alt_description;
                  card.append(image);
                  card.append(title);
                  main.append(card);
                });
            })
        .catch(error => 
            alert("Ha ocurrido un error:" + error.message))}

export let  searchPhotosButton = buttonInput.addEventListener("click",filteredPhotos);

export let searchPhotosEnter = input.addEventListener("keypress",function(event){
    if (event.key == 'Enter' ) {
        filteredPhotos();
    }
});
