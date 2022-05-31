import axios from "axios";
import { ACCESS_TOKEN } from "../constants/constants";
import http from "../http-common";

class RestService {
  async get() {
    let stat = "";
    await axios.get("/status").then((responce) => {
      stat = responce.data;
    });

    return stat;
  }
  upload(file: any, onUploadProgress: any) {
    let formData = new FormData();

    formData.append("file", file);
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    return http.post("/file/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress,
    });
  }

  uploadVideo(file: any, onUploadProgress: any) {
    let formData = new FormData();

    formData.append("file", file);
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    return http.post("/file/uploadVideo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress,
    });
  }

  getFile(fileName: string) {
    return http.get("/file/download/" + fileName);
  }
}

export default new RestService();
