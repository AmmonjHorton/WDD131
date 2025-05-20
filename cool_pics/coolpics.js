const menuButton = document.getElementById('menu-button');
const menuLinks = document.getElementById('menu-links');

menuButton.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});



const images = document.querySelectorAll('.gallery img'); // Only gallery images
images.forEach(image => {
  image.addEventListener('click', () => {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-viewer">X</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.querySelector('.close-viewer').addEventListener('click', () => {
      dialog.close();
      dialog.remove();
    });
  });
});