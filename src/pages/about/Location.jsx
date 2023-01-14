import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./location.module.css";
import map from "../../assets/map.png";
import tel from "../../assets/tel.png";
import fax from "../../assets/fax.png";
import bus from "../../assets/bus.png";
import train from "../../assets/train.png";

export default function Location() {
  const { kakao } = window;
  const cnsiLat = 37.5511287833884;
  const cnsiLng = 127.131116755508;

  useEffect(() => {
    // 지도 생성
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(cnsiLat, cnsiLng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(cnsiLat, cnsiLng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 인포윈도우
    var iwContent =
        '<div style="width:180px; margin:10px;"><h3 style="margin:0">CNSI</h3><p style="margin:8px;">강동구 암사길 14, 3층</p><a href="http://kko.to/9ATEsXGDMy" target="_blank"><button style="padding:5px; margin:0 5px">지도보기</button></a><a href="http://kko.to/zkusdq88VG" target="_blank"><button style="padding:5px; margin:0 5px">길찾기</button></a></div>',
      iwPosition = new kakao.maps.LatLng(cnsiLat, cnsiLng);
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    infowindow.open(map, marker);

    // 지도 타입 생성 (일반, 스카이뷰)
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 줌 컨트롤 생성
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  });

  return (
    <>
      <Navbar />
      <p className={styles.p}>오시는 길</p>
      <div className={styles.div}></div>
      <div
        id="map"
        className={styles.mapContainer}
        style={{
          width: "1200px",
          height: "600px",
          textAlign: "center",
          fontFamily: "Noto Sans KR",
        }}
      ></div>

      {/* info */}
      <div className={styles.information}>
        <div className={styles.infoAddress}>
          <img src={map} alt="map"></img>
          <p>서울특별시 강동구 암사길 14 (이새빌딩 3F)</p>
        </div>
        <div className={styles.infoTel}>
          <img src={tel} alt="tel"></img>
          <span>
            <h3>TEL</h3>
            <p>02-3445-0343</p>
          </span>
        </div>
        <div className={styles.infoFax}>
          <img src={fax} alt="fax"></img>
          <span>
            <h3>FAX</h3>
            <p>02-3445-0342</p>
          </span>
        </div>
      </div>

      <div className={styles.div}></div>

      {/* transport */}
      <div className={styles.transport}>
        <div className={styles.transportTitle}>교통편</div>
        <div className={styles.transportList}>
          <span className={styles.transportBus}>
            <img src={bus} alt="bus"></img>
            <span>
              <h3>버스</h3>
              <p>암사역 및 암사종합시장 하차</p>
            </span>
          </span>
          <span className={styles.transportTrain}>
            <img src={train} alt="train"></img>
            <span>
              <h3>지하철</h3>
              <p>암사역 1번 출구에서 도보 6분</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
