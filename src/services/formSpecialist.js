import { client } from "./client";

export async function FormSpecialist(dataform) {
  console.log(dataform);
  let result = { data: null, isError: true, errorMessage: "" };
  const res = await client.post("/specialist", dataform);
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
  } else {
    result = {
      data: null,
      isError: true,
      errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
    };
    return result;
  }
}

/////////////////////////////////////////////////
//API Login
export async function loginSpecialist(dataform) {
  let result = { data: null, isError: true, errorMessage: "" };
  const res = await client.post("/specialist/login", dataform);
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
  } else {
    result = {
      data: null,
      isError: true,
      errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
    };
    return result;
  }
}

////////////////////////////////////////

export async function confirmationCodespecialist(Code) {
  let result = { data: null, isError: true, errorMessage: "" };
  const res = await client.get(`specialist/confirm/${Code}`);
  if (res.data.code === 0) {
    result = { data: res.data, isError: false, errorMessage: "" };
    return result;
  } else if (res.data.code === 1) {
    result = {
      data: null,
      isError: true,
      errorMessage: "الكود غير صحيح",
    };
    return result;
  } else {
    result = {
      data: null,
      isError: true,
      errorMessage: "الكود غير صحيح",
    };
    return result;
  }
}

