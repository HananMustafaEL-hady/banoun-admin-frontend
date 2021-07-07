import { client } from "./client";

//API Login
export async function login(dataform) {
  let result = { data: null, isError: true, errorMessage: "" };
  const res = await client.post("/admin", dataform);
  if (res.data.code === 0) {
    result = { data: res.data, isError: false, errorMessage: "" };
    return result;
  } else if (res.data.code === 1) {
    result = {
      data: null,
      isError: true,
      errorMessage: "اسم المستخدم او كلمة المرور غير صحيح",
    };
    return result;
  }
}

//logout
export async function logout(history) {
  sessionStorage.removeItem("token");
  history.push("/login");
}
