let content = document.querySelector('.container')
let boxFotos = document.querySelector('.photo')

function showFotoFromGallety() {
   let elem
   content.onclick = function (event) {
      if (elem) elem.parentElement.classList.remove('active-image');

      if (event.target.dataset.items === 'color') {
         elem = event.target
         elem.parentElement.classList.add('active-image');
         boxFotos.firstElementChild.src = elem.src
      }
   }
}

showFotoFromGallety();
