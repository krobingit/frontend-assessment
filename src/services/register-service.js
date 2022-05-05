import axios from "../axios";

class RegisterService {
  async createUser(data) {
    if (data) {
      for (let key in data) {
        if (data[key] === "") data[key] = null;
      }
    }
    const response = await axios.post("/api/registration", data);
    return response.data;
  }
}

export default new RegisterService();
