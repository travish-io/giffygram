const API = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  users: [],
  posts: [],
  likes: [],
  messages: [],
  follows: [],
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
    displayCreateUser: false,
    displayMessageForm: false,
    selectedYear: 0,
  },
};

// Fetchers
export const fetchUsers = () => {
  return fetch(`${API}/users`)
    .then((response) => response.json())
    .then((user) => {
      applicationState.users = user;
    });
};

export const fetchPosts = () => {
  return fetch(`${API}/posts`)
    .then((response) => response.json())
    .then((post) => {
      applicationState.posts = post;
    });
};

export const fetchLikes = () => {
  return fetch(`${API}/likes`)
    .then((response) => response.json())
    .then((like) => {
      applicationState.likes = like;
    });
};

export const fetchMessages = () => {
  return fetch(`${API}/messages`)
    .then((response) => response.json())
    .then((message) => {
      applicationState.messages = message;
    });
};

export const fetchFollows = () => {
  return fetch(`${API}/posts`)
    .then((response) => response.json())
    .then((follow) => {
      applicationState.follows = follow;
    });
};

// Getters
export const getUsers = () => {
  return applicationState.users.map((user) => ({ ...user }));
};
export const getPosts = () => {
  return applicationState.posts.map((post) => ({ ...post }));
};
export const getLikes = () => {
  return applicationState.likes.map((like) => ({ ...like }));
};
export const getMessages = () => {
  return applicationState.messages.map((message) => ({ ...message }));
};
export const getFollows = () => {
  return applicationState.follows.map((follow) => ({ ...follow }));
};
export const getCurrentUser = () => {
  return applicationState.currentUser;
};
export const getFeed = () => {
  return applicationState.feed.map((feed) => ({ ...feed }));
};
export const getLoginState = () => {
  return applicationState.feed.displayCreateUser;
};
export const getDisplayMessageForm = () => {
  return applicationState.feed.displayMessageForm;
};
export const getMessageState = () => {
  return applicationState.feed.displayMessages;
};
export const getSelectedYear = () => {
  return applicationState.feed.selectedYear;
};

export const getDisplayFavorites = () =>{
    return applicationState.feed.displayFavorites;
}
//SETTERS
export const setDisplayCreateUser = (boolean) => {
  return (applicationState.feed.displayCreateUser = boolean);
};
export const setDisplayMessages = (boolean) => {
  return (applicationState.feed.displayMessages = boolean);
};
export const setCurrentUser = (item) => {
  return (applicationState.currentUser = item);
};
export const setRecipientUser = (item) => {
  return (applicationState.users.id = item);
};
export const setDisplayMessageForm = (boolean) => {
  return (applicationState.feed.displayMessageForm = boolean);
};
export const setYear = (year) => {
  return (applicationState.feed.selectedYear = year);
};
export const setDisplayFavorites = (boolean) =>{
    return (applicationState.feed.displayFavorites = boolean)
}
// POST FUNCTIONS

export const postCreatedUser = (object) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  return fetch(`${API}/users`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
export const createNewPost = (object) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  return fetch(`${API}/posts`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
export const createDirectMessage = (object) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  return fetch(`${API}/messages`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
export const createLike = (object) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };

  return fetch(`${API}/likes`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

// Delete Functions
export const deletePost = (id) => {
  return fetch(`${API}/posts/${id}`, { method: "DELETE" }).then(() => {
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
export const deleteLike = (id) => {
  return fetch(`${API}/likes/${id}`, { method: "DELETE" }).then(() => {
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

//PATCH
export const UpdateMessageRead = (object, id) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  return fetch(`${API}/messages/${id}`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
