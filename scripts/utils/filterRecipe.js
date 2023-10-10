const filterDom = () => {

    const filterContainer = document.querySelector('.filter_container_select');
    const selectFilter = document.createElement('div');
      selectFilter.classList.add('recipes-filter');
      selectFilter.innerHTML = `
        <div class="select_header">
          <span class="select_title">Ingredients</span>
          <span class="arrow_icon">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
       </div>
          <ul class="list_ingredient">
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">hhhh</span>
              </li>
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">tomate</span>
              </li>
              <li class="ingredient_liste">
                  <span class="checkbox">
                      <i class="fa fa-check check-icon"></i>
                  </span>
                  <span class="ingredient_text">onion</span>
              </li>
          </ul>
      `;
      filterContainer.appendChild(selectFilter);
  }