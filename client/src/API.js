import axios from "axios";

export const createPost = async ({ challenge, title, description, image }) => {
  let formData = new FormData();
  formData.append("challengeId", challenge);
  formData.append("title", title);
  formData.append("description", description ? description : "");
  formData.append("image", image);
  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  const response = await axios.post("/api/posts/create", formData, config);
  return response;
};

export const saveResult = async battleData =>
  await axios.post("/api/battle/save-result", battleData);
