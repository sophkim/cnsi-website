import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/home/Main";
import Greeting from "./pages/about/Greeting";
import Patent from "./pages/about/Patent";
import Location from "./pages/about/Location";
import Contact from "./pages/about/Contact";
import Download from "./pages/download/Download";
import Support from "./pages/support/Support";
import Delivery from "./pages/partner/Delivery";
import Partners from "./pages/partner/Partners";
import SafetyHelmetDetection from "./pages/ai/SafetyHelmetDetection";
import GrindingDetection from "./pages/ai/GrindingDetection";
import SmartGauge from "./pages/ai/SmartGauge";
import Furnace from "./pages/ai/Furnace";
import ExpansionJoint from "./pages/ai/ExpansionJoint";
import PID from "./pages/ai/PID";
import VisionEngineering from "./pages/ai/VisionEngineering";
import PortableIteCamera from "./pages/product/PortableIteCamera";
import AiSmartGaugeReader from "./pages/product/AiSmartGaugeReader";
import AiSmartGaugeReaderProduct from "./pages/product/AiSmartGaugeReader_product";
import OctoportablePole from "./pages/product/OctoportablePole";
import OctoportableStandard from "./pages/product/OctoportableStandard";
import OctoportableCompact from "./pages/product/OctoportableCompact";
import OctoThermalWiFi from "./pages/product/OctoThermalWiFi";
import OctoFLY from "./pages/product/OctoFLY";
import Cms from "./pages/product/Cms";
import Hd from "./pages/product/Hd";
import Settop from "./pages/product/Settop";
import IpSpeakerServer from "./pages/product/IpSpeakerServer";
import IpSpeakerBroadcastDevice from "./pages/product/IpSpeakerBroadcastDevice";
import OctopusStreamer from "./pages/product/OctopusStreamer";
import OctopusCMS from "./pages/product/OctopusCMS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          {/* 회사소개 */}
          <Route path="/about/greeting" element={<Greeting />} />
          <Route path="/about/patent" element={<Patent />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="/about/contact" element={<Contact />} />

          {/* 제품소개 */}
          <Route
            path="/product/procurement/portable-lte-camera"
            element={<PortableIteCamera />}
          />
          <Route
            path="/product/procurement/ai-smart-gauge-reader"
            element={<AiSmartGaugeReader />}
          />
          <Route
            path="/product/portable-lte-camera/standard"
            element={<OctoportableStandard />}
          />
          <Route
            path="/product/portable-lte-camera/compact"
            element={<OctoportableCompact />}
          />
          <Route
            path="/product/portable-lte-camera/pole"
            element={<OctoportablePole />}
          />
          <Route
            path="/product/portable-lte-camera/wifi"
            element={<OctoThermalWiFi />}
          />
          <Route
            path="/product/portable-lte-camera/fly"
            element={<OctoFLY />}
          />
          <Route
            path="/product/ai/smart-gauge-reader"
            element={<AiSmartGaugeReaderProduct />}
          />
          <Route path="/product/iptv/cms" element={<Cms />} />
          <Route path="/product/iptv/hd" element={<Hd />} />
          <Route path="/product/iptv/settop" element={<Settop />} />
          <Route
            path="/product/ip-speaker/ip-speaker-server"
            element={<IpSpeakerServer />}
          />
          <Route
            path="/product/ip-speaker/ip-speaker-broadcast-device"
            element={<IpSpeakerBroadcastDevice />}
          />
          <Route
            path="/product/video-solution/streamer"
            element={<OctopusStreamer />}
          />
          <Route path="/product/video-solution/cms" element={<OctopusCMS />} />

          {/* AI개발 */}
          <Route
            path="/ai/solution/safety-helmet-detection"
            element={<SafetyHelmetDetection />}
          />
          <Route
            path="/ai/solution/grinding-detection"
            element={<GrindingDetection />}
          />
          <Route path="/ai/solution/smart-gauge" element={<SmartGauge />} />
          <Route path="/ai/r&d/furnace" element={<Furnace />} />
          <Route path="/ai/r&d/expansion-joint" element={<ExpansionJoint />} />
          <Route path="/ai/r&d/p&id" element={<PID />} />
          <Route
            path="/ai/vision-engineering"
            element={<VisionEngineering />}
          />

          {/* 파트너 */}
          <Route path="/partner/delivery" element={<Delivery />} />
          <Route path="/partner/parners" element={<Partners />} />

          {/* 고객지원 */}
          <Route path="/support" element={<Support />} />

          {/* 다운로드 */}
          <Route path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
