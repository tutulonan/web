let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}


let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');


for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
    evt.preventDefault();
    mainImage.src = activeImage.href;

    let currentActive = document.querySelector('.preview-list .active-item');
    currentActive.classList.remove('active-item');
    activeImage.classList.add('active-item');
    };
}

// let button = document.querySelector('.signin-svg');
// let stroke = document.querySelector('.signin-svg-contour');

// button.onmouseover = function () {
//     stroke.fill = "#9747FF";
// }