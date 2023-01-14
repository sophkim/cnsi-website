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
        '<div style={{padding:"200px"}}>강동구 암사길 14, 3층<br><a href="http://kko.to/9ATEsXGDMy" style="color:blue" target="_blank">큰지도보기</a> <a href="http://kko.to/zkusdq88VG" style="color:blue" target="_blank">길찾기</a></div>',
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
  }, []);

  return (
    <>
      <Navbar />
      <p className={styles.p}>오시는 길</p>
      <div className={styles.div}></div>
      <div
        id="map"
        className={styles.mapContainer}
        style={{ width: "1200px", height: "600px", textAlign: "center" }}
      ></div>

      {/* info */}
      <div className={styles.information}>
        <span className={styles.infoAddress}>
          <img src={map} alt="map"></img>
          <p>서울특별시 강동구 암사길 14 3층</p>
        </span>
        <span className={styles.infoTel}>
          <img src={tel} alt="tel"></img>
          <p>TEL</p>
          <p>010-25222-1</p>
        </span>
        <span className={styles.infoFax}>
          <img src={fax} alt="fax"></img>
          <p>FAX</p>
          <p>010-25222-1</p>
        </span>
      </div>

      <div className={styles.div}></div>

      {/* transport */}
      <div className={styles.transport}>
        <div>교통편</div>
        <span>
          <img src={bus}></img>
          <p>버스</p>
          <p>새마을운동중앙회 하차</p>
        </span>
        <span>
          <img src={train}></img>
          <p>지하철</p>
          <p>삼성역 2번 출구 도보로 15분, 학여울역 1번 출구 도보로 10분</p>
        </span>
      </div>
    </>
  );
}
