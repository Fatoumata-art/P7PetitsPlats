 //  Header Photographer's single page
 function getCardrDOM() {
    const card = document.createElement('figure')
    card.classList.add('recipe-card');
    card.innerHTML = `
   
    <div class="card-img">
        <img src="assets/images/Recette01.jpg" alt="la palette du goût">
        <span class="card-time">10 mn</span>
    </div>
    <figcaption class="card-text">
        <div>
            <h3 class="title">Titre de la recette</h3>
            <h4 class="sub_titie">recette</h4>
            <p>Mettre les glaçons... </p>
        </div>
        <div>
            <h4 class="sub_titie">ingredients</h4>
            <p>Lait de coco </p>
            <span>
                400ml
            </span>
        </div>
    </figcaption>

    `
    return card
} 