import renderApi from "@/lib/api/instance";

/** 
알림 목록 조회
  @param pageNum : 페이지 넘버(페이지네이션)
  @param pageSize : 페이지 사이즈(페이지네이션)
*/
export async function getMyNotification(pageNum, pageSize) {
  try {
    const response = await renderApi.get("/users/notifications", {
      params: { pageNum, pageSize },
    });

    return response;
  } catch (error) {
    console.log("알림 목록 조회 에러: ", error);

    throw error;
  }
}

// 알림 체크
export async function checkNotification(notificationId) {
  try {
    const response = await renderApi.patch(`/notifications/${notificationId}`);

    return response;
  } catch (error) {
    console.log("알림 체크 에러: ", error);

    throw error;
  }
}

// 알림 삭제
export async function deleteNotification(notificationId) {
  try {
    const response = await renderApi.delete(`/notifications/${notificationId}`);

    return response;
  } catch (error) {
    console.log("알림 삭제 에러: ", error);

    throw error;
  }
}
