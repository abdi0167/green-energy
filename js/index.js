 // Load your images on page-load
 function preloader() {


     const imagesList = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/forest.jpg"
        ];

     const images = [];
     for (let i = 0; i < imagesList.length; i++) {
         images[i] = new Image();
         images[i].src = imagesList[i];
     }

     // Images ready to be used:
     console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
 };
 window.addEventListener("load", preloader);


 /* 
 Get all buttons in a NODE LIST of buttons (array like structure) */
 const btns = document.querySelectorAll("button");


 /* 
 Complete your resource-object that will store the dynamic content.
 Resource object should 3 sub-objects. Give your sub-objects
 meaningful names. Every sub-object should have the following
 properties headingContent, bodyText, imgUrl and imgAlt. */
 const resources = {
     trees: {
         heading: "Forestry",
         bodyText: "Forestry is the science and craft of creating, managing, using, conserving, and repairing forests, woodlands, and associated resources to meet desired goals, needs, and values for human and environment benefits.",
         imgURL: "./img/forest.jpg",
         imgALT: "Forest",
         tagline: "\"Trees for a green tomorrow.\""
     },

     wind: {
         heading: "Wind Power",
         bodyText: "Wind power is the use of air flow through wind turbines to provide the mechanical power to turn electric generators. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.",
         imgURL: "./img/wind.jpg",
         imgALT: "Wind Turbine",
         tagline: "\"Ever blowing, ever changing.\""
     },
     solar: {
         heading: "Solar Power",
         bodyText: "Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination. Concentrated solar power systems use lenses or mirrors and tracking systems to focus a large area of sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic effect",
         imgURL: "./img/solar.jpg",
         imgALT: "Solar Panel",
         tagline: "\"Travelling over 8 minutes through space to warm our planet.\""
     }
 }
 /* 
 Get the reference to your HTML-container
 that will be dynamically loaded from the resource-object. */
 const container = document.querySelector(".container");
 const tag = document.querySelector(".tagline");


 function handleClick(e) {

     //This vairable will save the taregtted buttons name
     //between <button> tags
     let btnLabel = e.target.textContent;

     if (btnLabel === "Solar") {
         container.innerHTML = `<img src="${resources.solar.imgURL}" alt="${resources.solar.imgALT}" class="main-image">
                        <h2>${resources.solar.heading}</h2>
                        <p class="bodyText">${resources.solar.bodyText}</p>`;
         tag.innerHTML = `<h2 class="tagline"> ${resources.solar.tagline}</h2>`;

     } else if (btnLabel === "Wind") {
         container.innerHTML = `<img src="${resources.wind.imgURL}" alt="${resources.wind.imgALT}" class="main-image">
                        <h2>${resources.wind.heading}</h2>
                        <p class="bodyText">${resources.wind.bodyText}</p>`;
          tag.innerHTML = `<h2 class="tagline"> ${resources.wind.tagline}</h2>`;

     } else {
         container.innerHTML = `<img src="${resources.trees.imgURL}" alt="${resources.trees.imgALT}" class="main-image">
                        <h2>${resources.trees.heading}</h2>
                        <p class="bodyText">${resources.trees.bodyText}</p>`;
          tag.innerHTML = `<h2 class="tagline"> ${resources.trees.tagline}</h2>`;

     }
  
     for (let i of btns) {
         let target = e.target;

         if (i.hasAttribute("id", "active-button")) {
             i.removeAttribute("id", "active-button");
             target.setAttribute("id", "active-button");
         }
     }
 }
 for (let btn of btns) {

     btn.addEventListener("click", handleClick);

 }


