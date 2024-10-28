import { checkNotification, deleteNotification } from "@/lib/api/notification";
import { useEffect, useState } from "react";
import Image from "next/image";

const NotificaionBody = (data) => {
  const { time, setTime } = useState("");
  const { isDelete, setIsDelete } = useState(false);

  useEffect(() => {
    const createAt = Math.floor(data.timeDifference / (1000 * 60)); // 1분

    if (createAt < 60) {
      setTime(`${createAt}분 전`);
    } else if (createAt < 60 * 24) {
      setTime(`${Math.floor(createAt / 60)}시간 전`);
    } else if (createAt < 60 * 24 * 7) {
      setTime(`${Math.floor(createAt / (60 * 24))}일 전`);
    } else if (createAt < 60 * 24 * 30) {
      setTime(`${Math.floor(createAt / (30 * 24 * 7))}주 전`);
    } else if (createAt < 60 * 24 * 365) {
      setTime(`${Math.floor(createAt / (60 * 24 * 30))}개월 전`);
    } else {
      setTime(`${Math.floor(createAt / (60 * 24 * 365))}년 전`);
    }
  }, [data.timeDifference]);

  const notificationCheckHandler = () => {
    checkNotification(data.id);
  };

  const notificationDeleteHandler = () => {
    deleteNotification(data.id);
    setIsDelete(true);
  };

  return (
    <>
      {!isDelete && (
        <div ref={ref} onClick={notificationCheckHandler}>
          <div>{data.message}</div>
          <div>{time}</div>
          {/* <Image
        src={}
        className={}
        width={}
        height={}
        alt="X"
        onClick={notificationDeleteHandler}
        /> */}
        </div>
      )}
    </>
  );
};

export default NotificaionBody;
