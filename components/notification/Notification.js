import { useRef, useState, useEffect } from "react";
import NotificaionBody from "./NotificationBody.js";
import styles from "./Notification.module.css";
import { useGetMyNotificationQuery } from "@/lib/reactQuery/useNotifications.js";

export default function Notification() {
  // `const observerRef = useRef();

  // // 무한 스크롤을 위한 함수
  // // Intersection Observer 콜백
  // const lastItemRef = useCallback(
  //   (node) => {
  //     if (observerRef.current) observerRef.current.disconnect();
  //     observerRef.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         loadMore(); // 상위 컴포넌트에서 전달된 함수 호출
  //       }
  //     });
  //     if (node) observerRef.current.observe(node);
  //   },
  //   [hasMore, loadMore]
  // );`

  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState({
    pageSize: "10",
    pageNun: "1",
  });
  const dropdownRef = useRef(null);

  const { data, isLoading, error } = useGetMyNotificationQuery(params);

  if (data) console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (data) console.log(data);

  return (
    <div
      className={styles["notification-container"]}
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      {data.map((data, idx) => {
        <NotificaionBody data={data} key={idx} />;
      })}
    </div>
  );
}
