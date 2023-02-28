function createLayout() {

    document.write( ` <div class="container">

    <!-- contenitore principale -->
    <div class="img-container">
        
        <!-- img Principale -->
        <div class="main-img-container">
            <img src="img/01.webp" alt="Immagine Principale" id="main-img">  
        </div>

        
        <!-- Freccie -->
        <div class="thumbnails">

            <button class="btn btn-up" id="up-arrow" ><i class="fa-solid fa-angle-up"></i></button>
            <button class="btn btn-down" id="down-arrow"><i class="fa-solid fa-angle-down"></i></button>


            <div class="thumbnail-wrapper">
                <img class="thumbnail" src="img/01.webp">
            </div>

            <div class="thumbnail-wrapper">
                <img class="thumbnail opacity"  src="img/02.webp">
            </div>

            <div class="thumbnail-wrapper">
                <img  class="thumbnail opacity" src="img/03.webp">
            </div>

            <div class="thumbnail-wrapper">
                <img class="thumbnail opacity"  src="img/04.webp">
            </div>

            <div class="thumbnail-wrapper">
                <img class="thumbnail opacity"  src="img/05.webp">
            </div>

        </div>
    </div>

</div>

`)

};

createLayout();

const btnUpElement = document.getElementById("up-arrow");
const btnDownElement = document.getElementById("down-arrow");
const imgElement = document.getElementById("main-img");
const arrThumbnails = document.querySelectorAll(".thumbnail");

console.log(arrThumbnails)

let i = 1;

btnDownElement.addEventListener('click', function(){
    
    i++;
    let n = i - 1;
    let k = i - 2;

    if(i==6){
        i=1;
        k=4;
        n=0;
    }

   

    imgElement.src = `img/0${i}.webp`;
    
        arrThumbnails[n].classList.remove("opacity");
        arrThumbnails[k].classList.add("opacity");
        console.log(i,k,n)

    

})

btnUpElement.addEventListener('click', function(){
    
    i--;
    let n = i - 1;
    let k = i;
    
    if(i==0){
        i=5;
        n=4;
        k=0
    }
    if (i==5){
        k=0
    }
    imgElement.src = `img/0${i}.webp`;

    arrThumbnails[n].classList.toggle("opacity");
    arrThumbnails[k].classList.add("opacity");
    console.log(i,n)
    

})