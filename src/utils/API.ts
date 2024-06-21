const getProfile = () => {
  return fetch(`${baseUrl}/users/me`, {
    headers: headers,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const getInitialCards = () => {
  return fetch(`${baseUrl}/cards`, {
    headers: headers,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const editProfile = (name: string, about: string) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      name,
      about,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const addCard = (name: string, link: string) => {
  return fetch(`${baseUrl}/cards`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      link,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const deleteCard = (id: string) => {
  return fetch(`${baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: headers,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};
const changeLikeCardStatus = (cardID: string, like: boolean) => {
  return fetch(`${baseUrl}/cards/${cardID}/likes`, {
    method: like ? "PUT" : "DELETE",
    headers: headers,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const changeUserPic = (avatar: string) => {
  return fetch(`${baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      avatar,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

const baseUrl = "https://mesto.nomoreparties.co/v1/cohort-39";
const headers = {
  authorization: "78099c83-b4f6-4327-beb7-a0fa8f52d200",
  "Content-Type": "application/json",
};
