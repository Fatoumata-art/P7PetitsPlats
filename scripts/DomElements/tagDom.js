export const createTag = () => {
    const option = document.querySelectorAll("option");
    const div = document.querySelector(".tags_list");
    const tag = document.createElement("div");
            tag.setAttribute("class", "item-tag");
            console.log(option)
            tag.innerHTML  = `
              <span></span>
              <button type="button" class="btn-rm-tag">
                  <i class="fa fa-times" aria-hidden="true"></i>
              </button>
              `;
              const clear = tag.querySelector('.btn-rm-tag');
              clear.addEventListener("click", () => {
                tag.style.display = "none";
              })
             // console.log(tag.lenght)
            div.appendChild(tag);
}