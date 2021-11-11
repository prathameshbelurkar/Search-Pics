import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xL6EC9Tp8e4wnPRthc-fEkBH0o1G8WgwyNQN3uuUTKA",
  },
});
