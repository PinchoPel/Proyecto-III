import { main } from "./main-part";
import "./card.css"

export let renderPhotos = () =>{
   main.innerHTML="";
   
   fetch("https://api.unsplash.com/photos/random?count=7&client_id=_ZC3EpBkncFLqeDKz12rWWm0EbcJZ_ouC3H2aekMHFE",{
       method: "GET"
   }).then(res => res.json())
   .then(photo =>{
    photo.forEach(element => {
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
            }) })
   .catch(error => 
       alert("Ha ocurrido un error:" + error.message))}


