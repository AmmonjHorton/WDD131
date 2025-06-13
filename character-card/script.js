const character = {
      name: "Aemon",
      class: "Eldritch Horror",
      level: 5,
      health: 100,
      image: 'aemon.jpeg',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

// DOM elements
const nameDiv = document.querySelector('.name');
const classSpan = document.getElementById('class');
const levelSpan = document.getElementById('level');
const healthSpan = document.getElementById('health');
const image = document.querySelector('.image');
const log = document.getElementById('log');

// Render function
function renderCharacter() {
  nameDiv.textContent = character.name;
  classSpan.textContent = character.class;
  levelSpan.textContent = character.level;
  healthSpan.textContent = character.health;
  image.src = character.image;
  image.alt = character.name;
}

// Button handlers
document.getElementById('attacked').addEventListener('click', () => {
  character.attacked();
  renderCharacter();
  log.textContent = `Attacked! Health is now ${character.health}`;
  if (character.health < 20) {
    log.textContent = 'Character Died';
  }
});

document.getElementById('levelup').addEventListener('click', () => {
  character.levelUp();
  renderCharacter();
  log.textContent = `Level Up! Level is now ${character.level}, Health is now ${character.health}`;
});

// Initial render
renderCharacter();