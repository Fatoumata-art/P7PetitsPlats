

export const filteAppareils = () => {

    const filterContainer = document.querySelector('.filter_container_select');
    const selectFilter = document.createElement('div');
      selectFilter.classList.add('recipes-filter');
      selectFilter.innerHTML = `
        <div class="select_header">
          <span class="select_title">Appareils</span>
          <span class="arrow_icon">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
         
       </div>
          <ul class="list_option" id="appareil">
            <div class="search">
            <input type="text" id="optiontSearch" placeholder="">
            <span><i class="fa fa-times" aria-hidden="true"></i></span>
            <i class="fal fa-search"></i>
            </div>
           
          </ul>
      `;
      const selectButton = selectFilter.querySelector(".select_header")
        selectButton.addEventListener('click',() =>{
        selectButton.classList.toggle('open');
    
        })
      filterContainer.appendChild(selectFilter);
  }

 export const listAppareil = (recipes) => {
    const selectFilter = document.querySelector('.recipes-filter');
    const ul = document.getElementById("appareil");
    const arrayIngredients = recipes.map(element => {
      let appareils = element["appliance"];
        //console.log("appliance", appareils)
   
        const li = document.createElement('li');
         li.setAttribute('class', 'option');
       li.textContent = appareils;
         //console.log(li)
         ul.appendChild(li);
    });

    
    
  
        
}
