
export const createTag = () => {
        const div = document.querySelector(".tags_list");
        const options = document.querySelectorAll("li");

        for(let option of options){
          option.addEventListener('click', () => {
            const tag = document.createElement("div");
            tag.setAttribute("class", "item-tag");
            tag.innerHTML  = `
              <span>${option.innerText}</span>
              <button type="button" class="btn-rm-tag">
                  <i class="fa fa-times" aria-hidden="true"></i>
              </button>
              `;
              const clear = tag.querySelector('.btn-rm-tag');
              clear.addEventListener("click", () => {
                tag.style.display = "none";
              })
          div.appendChild(tag);
          })
        }
}

//const containerSelect = document.querySelector(".filter_container_select");

//const inputs = containerSelect.getElementsByTagName("input");
