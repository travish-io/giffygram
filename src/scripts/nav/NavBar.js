import {
  setDisplayMessageForm,
  setCurrentUser,
  setDisplayMessages,
  getCurrentUser,
  getUsers,
  setYear,
  setFilterChosenUser,
  setDisplayFavorites,
  setDisplayUserProfile,
} from "../data/provider.js";
import { InboxNumbers } from "../friends/DirectMessage.js";
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", (click) => {
  if (click.target.id === "directMessageIcon") {
    setDisplayMessageForm(true);
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

applicationElement.addEventListener("click", (click) => {
  if (click.target.id === "logo") {
    setDisplayMessageForm(false);
    setDisplayMessages(false);
    setYear(0);
    setFilterChosenUser(null);
    setDisplayFavorites(false);
    setDisplayUserProfile(0);
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
applicationElement.addEventListener("click", (click) => {
  if (click.target.id === "logout") {
    let user = {};
    setCurrentUser(user);
    setDisplayUserProfile(0);
    localStorage.clear();
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "notification__count") {
    setDisplayMessages(true);
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
export const NavBar = () => {
  const user = getCurrentUser();
  const foundUser = getUsers().find((currentUser) => {
    return currentUser.id === user;
  });
  let html = `
    <nav class="navigation">
    <div class="navigation__item navigation__icon">
    <img src="./images/pb.png" alt="Giffygram icon" id="logo" />
    </div>
    <div class="navigation__item navigation__name" id="logo">Giffygram</div>
    <div class="navigation__item navigation__user" >Hi, <a href="#" id="user--${
      foundUser.id
    }">${foundUser.name}</a></div>
    <div class="navigation__item navigation__message">
    <img
    id="directMessageIcon"
    src="./images/fountain-pen.svg"
    alt="Direct message"
    />
    <div id="notification__count"class="notification__count">${InboxNumbers()}</div>
    </div>
    <div class="navigation__item navigation__logout">
    <button id="logout" class="fakeLink">Logout</button>
    </div>
    </nav>
    `;
  return html;
};
