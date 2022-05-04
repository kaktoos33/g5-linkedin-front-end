import { ACCESS_TOKEN } from "../constants/constants";
import http from "../http-common";

class UploadFilesService {
  upload(file: any, onUploadProgress: any) {
    let formData = new FormData();

    formData.append("file", file);
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    return http.post("/upload", formData, {
      
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      },
      onUploadProgress,
    });
  }

  uploadVideo(file: any, onUploadProgress: any) {
    let formData = new FormData();

    formData.append("file", file);
    const token = sessionStorage.getItem(ACCESS_TOKEN);

    return http.post("/uploadVideo", formData, {
      
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
