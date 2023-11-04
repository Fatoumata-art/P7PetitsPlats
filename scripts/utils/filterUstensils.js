

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
            <div class="search2">
            <input type="text" id="optiontSearchUstensil" placeholder=""> <span><i class="fa fa-times" aria-hidden="true"></i></span>
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
      const ustensils = element["ustensils"];
     
      

     ustensils.filter(ustensil => {
        const li = document.createElement('li');
        li.setAttribute('class', 'option')
        li.innerHTML =  `${ ustensil }`;
        ul.appendChild(li);
      });
   });

     // search ingredient and clear input
     const input = document.getElementById("optiontSearchUstensil") ;
     const clear = document.querySelector('.search2 .fa-times')
     input.addEventListener('input', () => {
     const value = input.value;
       const option = document.getElementsByClassName("option");
       clear.addEventListener('click', () => {
         input.value = '';
         clear.style.display = "none";
       })
     

       for( let x = 0; x < option.length; x++){
         if(!option[x].innerHTML.toLowerCase().includes(value.toLowerCase())){
           option[x].style.display = "none";
           clear.style.display = "block"
         
         }
         else{
           option[x].style.display = "block";
         }
       }
       
     })
    
  
        
}
