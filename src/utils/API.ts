import { BASE_URL, HEADERS_WITH_AUTH } from "./consts";

export const getProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: HEADERS_WITH_AUTH,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const getInitialCards = () => {
  return fetch(`${BASE_URL}/cards`, {
    headers: HEADERS_WITH_AUTH,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const editProfile = (name: string, about: string) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: HEADERS_WITH_AUTH,
    body: JSON.stringify({
      name,
      about,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const addCard = (name: string, link: string) => {
  return fetch(`${BASE_URL}/cards`, {
    method: "POST",
    headers: HEADERS_WITH_AUTH,
    body: JSON.stringify({
      name,
      link,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const deleteCard = (id: string) => {
  return fetch(`${BASE_URL}/cards/${id}`, {
    method: "DELETE",
    headers: HEADERS_WITH_AUTH,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};
export const changeLikeCardStatus = (cardID: string, like: boolean) => {
  return fetch(`${BASE_URL}/cards/${cardID}/likes`, {
    method: like ? "PUT" : "DELETE",
    headers: HEADERS_WITH_AUTH,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const changeUserPic = (avatar: string) => {
  return fetch(`${BASE_URL}/users/me/avatar`, {
    method: "PATCH",
    headers: HEADERS_WITH_AUTH,
    body: JSON.stringify({
      avatar,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

