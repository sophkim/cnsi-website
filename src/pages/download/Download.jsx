import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./download.module.css";
import manual from "../../assets/manual.png";
import solution from "./solution.pdf";
import optopusEye from "./optopusEye.jpg";

export default function Download() {
  return (
    <>
      <Navbar />
      <p className={styles.p}>다운로드</p>
      <div className={styles.div}></div>

      {/* 파일 다운로드 리스트 */}
      <div className={styles.download}>
        <table>
          <thead>
            <tr>
              <td>번호</td>
              <td>제품명</td>
              <td>제공일자</td>
              <td>다운로드</td>
            </tr>
          </thead>
          <tbody>
            {/* solution */}
            <tr>
              <td>1</td>
              <td>solution example</td>
              <td>2023-01-01</td>
              <td>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>

            {/* octopusEye */}
            <tr>
              <td>2</td>
              <td>octopusEye example</td>
              <td>2023-01-01</td>
              <td>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>

            {/* solution */}
            <tr>
              <td>3</td>
              <td>solution example</td>
              <td>2023-01-01</td>
              <td>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>

            {/* octopusEye */}
            <tr>
              <td>4</td>
              <td>octopusEye example</td>
              <td>2023-01-01</td>
              <td>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>

            {/* solution */}
            <tr>
              <td>5</td>
              <td>solution example</td>
              <td>2023-01-01</td>
              <td>
                <a href={solution} download="solution">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>

            {/* octopusEye */}
            <tr>
              <td>6</td>
              <td>octopusEye example</td>
              <td>2023-01-01</td>
              <td>
                <a href={optopusEye} download="optopusEye">
                  <img src={manual} alt="manual"></img>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
