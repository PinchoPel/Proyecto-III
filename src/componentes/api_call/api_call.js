import { main } from "../main/main-part";
import "./card.css"

export let renderPhotos = () =>{
   main.innerHTML="";
   for (let index = 1; index <= 7; index++) {
   fetch("https://api.unsplash.com/photos/random/?client_id=_ZC3EpBkncFLqeDKz12rWWm0EbcJZ_ouC3H2aekMHFE",{
       method: "GET"
   }).then(res => res.json())
   .then(photo =>{
               let card = document.createElement("div");
              let image = document.createElement("img");
              let title = document.createElement("h4");
              card.id = "card";
             image.src = photo.urls.full;
             image.alt = photo.alt_description;
             image.id = "photo";
             title.textContent = photo.alt_description;
             card.append(image);
             card.append(title);
             main.append(card);
      })
   .catch(error => 
       alert("Ha ocurrido un error:" + error.message))}}


 