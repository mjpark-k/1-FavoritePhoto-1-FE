import renderApi from "@/lib/api/instance";

export async function postSignin({ email, password }) {
  try {
    const response = await renderApi.post("/auth/sign-in", { email, password });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postSignup({ email, password, nickname }) {
  try {
    const response = await renderApi.post("/auth/sign-up", {
      email,
      password,
      nickname,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postSignout() {
  try {
    const response = await renderApi.post("/auth/sign-out");
    return response;
  } catch (error) {
    throw error;
  }
}
