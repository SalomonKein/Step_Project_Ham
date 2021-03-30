// Our Services _ _ _ _ _ _ _ _ _ _ _ _ _ _ start


function removeHide(id) {
    
    let elem = document.getElementById(`${id}`);
    elem.classList.remove('hidden');
            
}

let ul = document.getElementById(`services__list`);

ul.addEventListener("click", (event) => {
    if (event.target.tagName != "LI") return;

    else {
        console.log(event.target);
        select(event.target);        
    }
});


function select(li) {
    let selected = ul.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
        document.getElementById(`${elem.classList[0]}`).classList.add('hidden');
    }
let spanSelected = ul.querySelectorAll('span');
for (let elem of spanSelected) {
    elem.classList.add('hidden');
    
}

    li.classList.add('active');
    removeHide(li.classList[0]);
    li.querySelector('span').classList.remove('hidden');
}

// Our Services _ _ _ _ _ _ _ _ _ _ _ _ _ _ end

// Our Amazing Work _ _ _ _ _ _ _ _ _ _ _ _ _ _ start

let buttonMore = document.getElementsByClassName(`work__more`);


buttonMore[0].addEventListener("click", () => {
    let img1 = document.createElement('img');
    img1.classList.add('graphic__design', 'work__all', 'active');
    let img2 = document.createElement('img');
    img2.classList.add('web__design', 'work__all', 'active');
    let img3 = document.createElement('img');
    img3.classList.add('landin__pages', 'work__all', 'active');
    let img4 = document.createElement('img');
    img4.classList.add('graphic__design', 'work__all', 'active');
    let img5 = document.createElement('img');
    img5.classList.add('wordpress', 'work__all', 'active');
    let img6 = document.createElement('img');
    img6.classList.add('web__design', 'work__all', 'active');
    let img7 = document.createElement('img');
    img7.classList.add('landin__pages', 'work__all', 'active');
    let img8 = document.createElement('img');
    img8.classList.add('graphic__design', 'work__all', 'active');
    let img9 = document.createElement('img');
    img9.classList.add('web__design', 'work__all', 'active');
    let img10 = document.createElement('img');
    img10.classList.add('wordpress', 'work__all', 'active');
    let img11 = document.createElement('img');
    img11.classList.add('landin__pages', 'work__all', 'active');
    let img12 = document.createElement('img');
    img12.classList.add('wordpress', 'work__all', 'active');
    img1.src="img/graphic_design/graphic_design1.jpg";
    img2.src="img/graphic_design/graphic_design2.jpg";
    img3.src="img/graphic_design/graphic_design3.jpg";
    img4.src="img/graphic_design/graphic_design4.jpg";
    img5.src="img/graphic_design/graphic_design5.jpg";
    img6.src="img/graphic_design/graphic_design6.jpg";
    img7.src="img/graphic_design/graphic_design7.jpg";
    img8.src="img/graphic_design/graphic_design8.jpg";
    img9.src="img/graphic_design/graphic_design9.jpg";
    img10.src="img/graphic_design/graphic_design10.jpg";
    img11.src="img/graphic_design/graphic_design11.jpg";
    img12.src="img/graphic_design/graphic_design12.jpg";
    let imgContainer = document.getElementsByClassName(`work__example`);
    imgContainer[0].append(img1);
    imgContainer[0].append(img2);
    imgContainer[0].append(img3);
    imgContainer[0].append(img4);
    imgContainer[0].append(img5);
    imgContainer[0].append(img6);
    imgContainer[0].append(img7);
    imgContainer[0].append(img8);
    imgContainer[0].append(img9);
    imgContainer[0].append(img10);
    imgContainer[0].append(img11);
    imgContainer[0].append(img12);
    
buttonMore[0].remove();
});

let ulWork =document.getElementById('ul__work');

function selectUl(li) {
    let selected = ulWork.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
        // document.getElementById(`${elem.classList[0]}`).classList.add('hidden');
    }

    li.classList.add('active');
    // removeHide(li.classList[0]);
    
}

ulWork.addEventListener("click", (event) => {
    if (event.target.tagName != "LI") return;

    else {
        console.log(event.target);
        selectUl(event.target);   
        showImgWork(event.target.id);     
    }
})

function showImgWork(id){    
    let imgWork = document.getElementById('work__example');
    let selected = imgWork.querySelectorAll('.active');
    for (let elem of selected) {
        elem.classList.remove('active');
        }
        let category = [...document.querySelectorAll(`.${id}`)];
    
    category.forEach(function(elem){
        elem.classList.add('active');}) 
        
}
// Our Amazing Works _ _ _ _ _ _ _ _ _ _end

// Sayabout _ _ _ _ _ _ _ _ _ _ _ _ _ _start

let imgSlade = document.querySelectorAll(".image");
let imgLink = [];

for (let i = 0; i < imgSlade.length; i++) {
    imgLink[i] = imgSlade[i].src;
}


let step = 0;
let offset = 0;

function showImg() {
    let divPrevious = document.createElement('div');
    divPrevious.classList.add('image__slider');
    divPrevious.classList.add('image-previous');
    divPrevious.setAttribute('type', 'previous');
    let imgPrevious = document.createElement('img');    
    imgPrevious.src = imgLink[imgSlade.length - 1];  
    let divNext = document.createElement('div'); 
    divNext.classList.add('image__slider');
    divNext.classList.add('image-next');
    divNext.setAttribute('type', 'next');
    let imgNext = document.createElement('img');
    imgNext.src = imgLink[step + 1];    
    divPrevious.style.left = offset * 215 - 215 + 'px';
    divNext.style.left = offset * 215 + 860 + 'px';
    document.querySelector('.container').prepend(divPrevious);
    document.querySelector('.image-previous').appendChild(imgPrevious);
    document.querySelector('.container').append(divNext);
    document.querySelector('.image-next').append(imgNext);
}


function slideNext() {

    document.querySelector('.next').onclick = null;
    let imgOverflow = document.querySelectorAll('.image__slider');

    if (step > imgLink.length - 1) {
        step = 0;
    }
console.log("imgOverflow=",imgOverflow);
    let offset2 = 0;
    for (let i = 0; i < imgOverflow.length; i++) {
        imgOverflow[i].style.left = offset2 * 215-430 + 'px';
        offset2++;
        imgOverflow[i].removeAttribute('type');
        imgOverflow[i].classList.remove('image-next');
   
    }

    let divNext = document.createElement('div');
    let imgNext = document.createElement('img');
    imgNext.src = imgLink[step];

    setTimeout(function() {
        divNext.classList.add('image__slider');
        divNext.classList.add('image-next');
        divNext.setAttribute('type', 'afterNext');
        divNext.style.left = 860 + 'px';
        document.querySelector('.container').append(divNext);
        document.querySelector('.image-next').append(imgNext);
        imgOverflow[0].remove();
        document.querySelector('.next').onclick = slideNext;
    }, 1000);

    step++;
}

function slidePrevious() {
    document.querySelector('.previous').onclick = null;
    let imgOverflow = document.querySelectorAll('.image__slider');

    if (step == imgLink.length) {
        step = 0;
    }

    if (step < 0) {
        step = 3;
    }



    let offset2 = 0;
    for (let i = 0; i < imgOverflow.length; i++) {
      
        imgOverflow[i].style.left = offset2 * 215 + 'px';
        offset2++;
        imgOverflow[i].removeAttribute('type');
        imgOverflow[i].classList.remove('image-previous');
        
    }

    let divPrevious = document.createElement('div');
    divPrevious.classList.add('image__slider');
    divPrevious.classList.add('image-previous');
    divPrevious.setAttribute('type', 'afterPrevious');
    let imgPrevious = document.createElement('img');
    imgPrevious.src = imgLink[step];  
       
    setTimeout(function() {
        divPrevious.style.left = -215 + 'px';
        document.querySelector('.container').prepend(divPrevious);
        document.querySelector('.image-previous').prepend(imgPrevious);
        imgOverflow[5].remove();
        document.querySelector('.previous').onclick = slidePrevious;
    }, 1000);
    step--;
}

document.querySelector('.next').onclick = slideNext;
document.querySelector('.previous').onclick = slidePrevious;
showImg();

let object1 = {
    name: "Fedja Petroff",
    position: "QA Ingeneer",
    src: "slider_pictures/1.jpg"
}

let object2 = {
    name: "Nastja Grow",
    position: "Team Lead",
    src: "slider_pictures/2.jpg"
}

let object3 = {
    name: "Fedja Petroff",
    position: "Member from the hill",
    src: "slider_pictures/3.jpg"
}

let object4 = {
    name: "Natasha 3 rublja and our",
    position: "Call girl",
    src: "slider_pictures/4.jpg"
}

function choiceOfUser(object){


    let bigFoto = document.querySelector(".sayabout__foto");
    let nameOfUser = document.querySelector(".sayabout__name");
    let positionOfUser = document.querySelector(".sayabout__position");

    if (object.src.slice(-21) == object1.src) {
        bigFoto.src = object1.src; 
        nameOfUser.innerHTML = object1.name;
        positionOfUser.innerHTML = object1.position;
    }
    if (object.src.slice(-21) == object2.src) {
        bigFoto.src = object2.src; 
        nameOfUser.innerHTML = object2.name;
        positionOfUser.innerHTML = object2.position;
    }
    if (object.src.slice(-21) == object3.src) {
        bigFoto.src = object3.src; 
        nameOfUser.innerHTML = object3.name;
        positionOfUser.innerHTML = object3.position;
    }
    if (object.src.slice(-21) == object4.src) {
        bigFoto.src = object4.src; 
        nameOfUser.innerHTML = object4.name;
        positionOfUser.innerHTML = object4.position;
    }
} 
let userChoice = document.getElementById("sayabout__slider");
userChoice .addEventListener("click", (event) => {
    if (event.target.tagName != "IMG") return;

    else {
    choiceOfUser(event.target);   
    }
})

// Sayabout _ _ _ _ _ _ _ _ _ _ _ _ _ _end