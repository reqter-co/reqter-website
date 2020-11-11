import Cookies from "js-cookie";
import { get, post } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import { IUser } from "@Interfaces/user";

// =====================================================
const login = async (username: string, password: string) => {
  const response = await post<{ access_token: string }>(
    urls.login,
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        clientid,
      },
    }
  );

  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return null;
};
const getUserInfo = async () => {
  const token = Cookies.get("@caaser-token");
  const response = await get<IUser>(urls.userInfo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return null;
};

export { login, getUserInfo };
