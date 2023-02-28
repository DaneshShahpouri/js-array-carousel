function createLayout() {

    document.write( `<div class="container">

    <!-- contenitore principale -->
    <div class="img-container">
        
        <!-- img Principale -->
        <div class="main-img-container">
            <img src="img/01.webp" alt="Immagine Principale" id="main-img">  
            <button class="btn btn-up" id="up-arrow" ><i class="fa-solid fa-angle-up"></i></button>
            <button class="btn btn-down" id="down-arrow"><i class="fa-solid fa-angle-down"></i></button>
        </div>
        <!-- Freccie -->

    </div>

</div>`)

};

createLayout();

const btnUpElement = document.getElementById("up-arrow");
const btnDownElement = document.getElementById("down-arrow");
const imgElement = document.getElementById("main-img");

let i = 1;

btnDownElement.addEventListener('click', function(){
    
    i++;
    if(i==6){
        i=1;
    }
    imgElement.src = `img/0${i}.webp`;
    

})

btnUpElement.addEventListener('click', function(){
    
    i--;
    if(i==0){
        i=5;
    }
    imgElement.src = `img/0${i}.webp`;
    

})