import { useState, useContext } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ranksData } from "../../../../data/Data";
import RankItem from "./RankItem";
import { UserAllDataContext } from "../../../../context/UserAllDataContext";
import { findRank } from "../../../../utils";

export default function RanksSlider() {
  const [ranks] = useState(ranksData);

  const { allTokens } = useContext(UserAllDataContext);
  const userRank = findRank(allTokens);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation]}
        navigation={{
          clickable: true,
        }}
        allowTouchMove={false}
        simulateTouch={false}
        draggable={false}
        className="mySwiper"
        initialSlide={userRank.id - 1}
      >
        {ranks.map((item) => (
          <SwiperSlide key={item.id}>
            <RankItem props={item} userRank={userRank} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
