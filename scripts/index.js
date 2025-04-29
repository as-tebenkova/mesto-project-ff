// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__title").textContent = element.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    const item = document.querySelector(".places__item");
    item.remove();
  });

  placesList.append(cardElement);
});
