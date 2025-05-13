// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу

function deleteCard(event) {
  const item = event.target.closest(".card");
  item.remove();
}

function createCard(element) {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.cloneNode(true);

  card.querySelector(".card__image").src = element.link;
  card.querySelector(".card__image").alt = element.name;
  card.querySelector(".card__title").textContent = element.name;

  const deleteButton = card.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  return card;
}

initialCards.forEach(function (element) {
  const placesList = document.querySelector(".places__list");
  const cardElement = createCard(element);
  placesList.append(cardElement);
});
