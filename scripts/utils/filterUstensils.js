

export const filterUstensils = () => {

    const filterContainer = document.querySelector('.filter_container_select');
    const selectFilter = document.createElement('div');
      selectFilter.classList.add('recipes-filter');
      selectFilter.innerHTML = `
        <div class="select_header">
          <span class="select_title">Ustensiles</span>
          <span class="arrow_icon">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
         
       </div>
          <ul class="list_option" id="ustensil">
            <div class="search">
            <input type="text" id="optiontSearch" placeholder="">
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

 export const listUstensil = (recipes) => {
    const ul = document.getElementById("ustensil");
    recipes.map(element => {
      let ustensils = element["ustensils"];
     
      

     ustensils.filter(ustensil => {
        const li = document.createElement('li');
        li.setAttribute('class', 'option')
        li.innerHTML =  `${ ustensil }`;
        ul.appendChild(li);
      });
   });

    
    
  
        
}
