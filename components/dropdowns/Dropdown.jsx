import styles from "@/components/dropdowns/Dropdown.module.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

/**
 * @param options - options array
 * @param placeholder - dropdown default text
 * @param style
 * 1. 홈페이지 pc (등급 장르 매진여부) - default
 * 2. 홈페이지 pc (낮은 가격순) - 180
 * 3. 나의 포토카드 판매하기 pc (등급 장르) - 440
 * 4. 포토카드 생성 pc (등급 장르) - 520
 * 사용예시는 index참고
 */

export default function Dropdown({ options, placeholder, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const containerClass = `${styles[`dropdown-container-${style}`]}`;
  const menuClass = `${styles[`dropdown-menu-${style}`]}`;
  const itemClass = `${styles[`dropdown-menu-item-${style}`]}`;

  const handleFontWeight = () => {
    if (!selectedOption && placeholder.includes("선택")) {
      return 300;
    }
  };

  return (
    <div className={styles["dropdown"]} ref={dropdownRef}>
      <div className={containerClass} onClick={toggleDropdown}>
        <span
          style={{
            color:
              !selectedOption && placeholder.includes("선택")
                ? "var(--gray-200)"
                : "var(--white)",
            fontWeight: handleFontWeight(),
          }}
        >
          {selectedOption ? selectedOption : placeholder}
        </span>
        <Image
          src="/down-icon.svg"
          width={24}
          height={24}
          className={styles["dropdown-btn"]}
          alt="dropdown-btn"
        />
      </div>
      {isOpen && (
        <div className={menuClass}>
          {options.map((option, index) => (
            <div
              key={index}
              className={itemClass}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
