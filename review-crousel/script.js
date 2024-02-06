import reviewData from "./data.js";

let profileImg = document.querySelector('.profile-img');
let profileName = document.querySelector('.name');
let position = document.querySelector('.position');
let reviewPara = document.querySelector('.container p');

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let count = 0;

function updateData() {
    profileImg.setAttribute('src', reviewData[count].img);
    profileName.innerText = reviewData[count].name;
    position.innerText = reviewData[count].position;
    reviewPara.innerText = reviewData[count].desc;
}

prevButton.addEventListener('click', ()=>{
    if(count === 0) {
        count = reviewData.length;
    }
    count = count - 1;
    updateData();

})

nextButton.addEventListener('click', ()=> {
    if(count === reviewData.length - 1){
        count = 0;
    }
    else{
    count = count + 1;
    }
    updateData();
})

updateData();