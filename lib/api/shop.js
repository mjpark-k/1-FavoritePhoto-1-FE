import renderApi from './instance';

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
    const api = renderApi();
    const response = await api.get('/shop', {
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
    console.error('Error fetching shop items:', error);
    throw error;
  }
}

export const getShopCard = async ({ shopId }) => {
  try {
    const api = renderApi();
    const response = await api.get(`/shop/${shopId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shop card:', error);
    throw error;
  }
};

export const deleteShopCard = async (shopId) => {
  try {
    const api = renderApi();
    const response = await api.delete(`/shop/${shopId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting shop card:', error);
    throw error;
  }
};

export const createShopCard = async ({
  cardId,
  salesQuantity,
  price,
  exchangeGrade,
  exchangeGenre,
  exchangeDescription,
}) => {
  try {
    const api = renderApi();
    const response = await api.post('/shop', {
      cardId,
      salesQuantity,
      price,
      exchangeGrade,
      exchangeGenre,
      exchangeDescription,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating shop card:', error);
    throw error;
  }
};

export const purchaseShopCard = async ({ shopId, purchaseQuantity }) => {
  try {
    const api = renderApi();
    const response = await api.post(`/shop/${shopId}/purchase`, {
      purchaseQuantity,
    });
    return response.data;
  } catch (error) {
    console.error('Error purchasing shop card:', error);
    throw error;
  }
};

export const createExchangeRequest = async ({
  shopId,
  cardId,
  description,
}) => {
  try {
    const api = renderApi();
    const response = await api.post('/shop/exchange', {
      shopId,
      cardId,
      description,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating exchange request:', error);
    throw error;
  }
};

export const updateShopCard = async ({ shopId, updateData }) => {
  try {
    const api = renderApi();
    const response = await api.patch(`/shop/${shopId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating shop card:', error);
    throw error;
  }
};
