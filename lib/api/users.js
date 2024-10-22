import renderApi from '@/lib/api/instance';

/**
 * - **보유한 카드목록, 카드상세 조회(param id)**
 * @param id : 카드 id
 */
export async function getUsersMyCards({ id }) {
  try {
    const endpoint = id ? `/users/my-cards/${id}}` : '/users/my-cards';
    const response = await renderApi.get(endpoint);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * - **내 소유 포토 카드 판매 등록**
  @param name : 카드 이름 (max-length 50)
  @param description : 카드 설명 (max-length 1024)
  @param image : 카드 이미지 url (max-length : 2048)
  @param grade : 카드 등급 (int로 전달)
  @param genre : 카드 장르 (int로 전달)
  @param quantity : 카드 생성 갯수
  @param price : 카드 가격(초기 포인트 : 판매 포인트와 별도. 교환 신청에서 사용됨)
 */
export async function postUsersMyCards({
  name,
  description,
  image,
  grade,
  genre,
  price,
  quantity,
}) {
  try {
    const response = await renderApi.post('/users/my-cards', {
      name,
      description,
      image,
      grade,
      genre,
      price,
      quantity,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
 * - **내가 상점에 등록한 포토 카드 목록 조회**
@param sort : recent || oldest || cheapest || highest (최신순 OR 오래된 순 OR 가격 낮은 순 OR 가격 높은 순 정렬)
@param genre : 장르 (필터 / int로 전달)
@param sellout : true || false매진 여부 (필터) - 삭제 예
@param grade : 등급 (필터 / int로 전달)
@param ownerId : 판매자 ID(필터)
@param pageNum : 페이지 넘버(페이지네이션)
@param pageSize : 페이지 사이즈(페이지네이션)
@param keyword : 판매 포토 카드의 이름(name), 설명(description) 중 포함 단어 여부로 검색
 */
export async function getUsersMyCardsShop({
  sort,
  genre,
  sellout,
  grade,
  ownerId,
  pageNum,
  pageSize,
  keyword,
}) {
  try {
    const response = await renderApi.get('/users/my-cards/shop', {
      params: {
        sort,
        genre,
        sellout,
        grade,
        ownerId,
        pageNum,
        pageSize,
        keyword,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

/**
@param sort : recent || oldest || cheapest || highest (최신순 OR 오래된 순 OR 가격 낮은 순 OR 가격 높은 순 정렬)
@param genre : 장르 (필터 / int로 전달)
@param sellout : true || false매진 여부 (필터) - 삭제 예
@param grade : 등급 (필터 / int로 전달)
@param ownerId : 판매자 ID(필터)
@param pageNum : 페이지 넘버(페이지네이션)
@param pageSize : 페이지 사이즈(페이지네이션)
@param keyword : 판매 포토 카드의 이름(name), 설명(description) 중 포함 단어 여부로 검색
 */
export async function getUsersMyCardsExchange({
  sort,
  genre,
  sellout,
  grade,
  ownerId,
  pageNum,
  pageSize,
  keyword,
}) {
  try {
    const response = await renderApi.get('/users/my-cards/exchange', {
      params: {
        sort,
        genre,
        sellout,
        grade,
        ownerId,
        pageNum,
        pageSize,
        keyword,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

//닉네임 조회 : 로그인 유지중일 때 nav에 활용되는 api??
export async function getUsersProfile() {
  try {
    const response = await renderApi.get('/users/profile');
    return response;
  } catch (error) {
    console.error(error);
  }
}