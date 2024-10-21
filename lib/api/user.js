import renderApi from '@/lib/api/instance';

export async function getUserMyCards() {
  try {
    const response = await renderApi.get('/users/my-cards');
    return response;
  } catch (error) {
    console.error(error);
  }
}
