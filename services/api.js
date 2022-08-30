import axios from "axios";

export async function GetRandomUser() {
  const URL = "https://randomuser.me/api/?results=30";

  const response = await axios.get(URL);

  return response
}
