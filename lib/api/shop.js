import axios from "axios";

const renderApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export async function getShopCards({
  sort,
  genre,
  sellout,
  grade,
  pageNum,
  pageSize,
  keyword,
}) {
  try {
    const response = await renderApi.get("/shop", {
      params: {
        sort,
        genre,
        sellout,
        grade,
        pageNum,
        pageSize,
        keyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching shop items:", error);
    throw error;
  }
}
