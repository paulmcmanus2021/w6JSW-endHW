document.addEventListener('DOMContentLoaded',() => {
  //
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewGameFormSubmit);
  //deleteAll
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);
})

//
const handleNewGameFormSubmit = function (event) {
  event.preventDefault();

  const gameItem = createGameListItem(event.target);
  const list = document.querySelector('#games-added');
  list.appendChild(gameItem);

  event.target.reset();
}

const createGameListItem = function (form) {
  const gameListItem = document.createElement('li');
  gameListItem.classList.add('game-list-item');

  const title = document.createElement('h2');
  title.textContent = `Title: ${form.title.value}`;
  gameListItem.appendChild(title);

  const designer = document.createElement('h2');
  designer.textContent = `Designer: ${form.designer.value}`;
  gameListItem.appendChild(designer);

  const players = document.createElement('h3');
  players.textContent = `Player Count: ${form.players.value}`;
  gameListItem.appendChild(players);

  const mechanic = document.createElement('h3');
  mechanic.textContent =  `Main Mechanic: ${form.mechanic.value}`;
  gameListItem.appendChild(mechanic);

  const played = document.createElement('h3');
  played.textContent = `Played: ${form.played.value}`;
  gameListItem.appendChild(played);

  return gameListItem;
}
const handleDeleteAll = function (event) {
  const gameList = document.querySelector('#games-added');
  gameList.innerHTML = '';
};
