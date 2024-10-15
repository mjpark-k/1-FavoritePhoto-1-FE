import styles from "@/components/searchForm/SearchForm.module.css";
import Image from "next/image";

export default function SearchForm() {
  return (
    <div className={styles["search-form-container"]}>
      <input placeholder="검색" className={styles["search-form"]} />
      <Image
        src="/vector.svg"
        width={24}
        height={24}
        alt="vector"
        className={styles["search-form-btn"]}
      />
    </div>
  );
}
