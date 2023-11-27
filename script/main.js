
function switshingSelect() {
    const select = document.querySelector('#type-choice')
        photoId = document.getElementById(`${select.value}`),
        textId = document.getElementById(`text-${select.value}`),
        sectionPhoto = document.querySelectorAll('.container-swiper1'),
        sectionText = document.querySelectorAll('.text-choice')

    sectionPhoto.forEach((a)=>{
        a.style.display = 'none'
    }) 
    photoId.style.display = 'block';

    sectionText.forEach((a)=>{
        a.style.display = 'none'
    }) 
    textId.style.display = 'block';

}



