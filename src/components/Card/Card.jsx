//Card.jsx
//카드 컴포넌트, 메세지 추가하는 카드는 EmptyCard.jsx입니다.

import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import CardFrom from "./CardFrom";

const CreatedDay = ({ date }) => {
  const created = new Date(date);
  const year = created.getFullYear();
  const month = String(created.getMonth());
  const day = String(created.getDay());

  return (
    <time dateTime={date} className={styles.time}>
      {year}.{month.padStart(2, "0")}.{day.padStart(2, "0")}
    </time>
  );
};

const Card = ({ edit = false, message, onClick }) => {
  const [data, setData] = useState({});

  const fontStyle = function (font) {
    if (font === "Pretendard") return "pretendard";
    if (font === "나눔명조") return "nanumMyeongjo";
    if (font === "나눔손글씨 손편지체") return "nanumSonPyeonJiCe";
    return "notoSans";
  };

  useEffect(() => {
    setData(message);
  }, [message]);

  return (
    <div className={styles.frame}>
      {edit && (
        <button name={data?.id} className={styles.deleted} type='button' onClick={onClick}>
          삭제
        </button>
      )}
      <CardFrom data={data} />
      <p className={`${styles.message} ${styles[fontStyle(data?.font)]}`}>{data?.content}</p>
      <CreatedDay date={data?.createdAt} />
    </div>
  );
};

export default Card;
