import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Memories from "./pages/Memories";
import Timeline from "./pages/Timeline";
import FinalLove from "./pages/FinalLove";
import MusicPlayer from "./components/MusicPlayer";




export default function App() {
  return (
    <BrowserRouter>
      {/* Lives outside Routes so it never unmounts on navigation */}
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/final" element={<FinalLove />} />
      </Routes>
    </BrowserRouter>
  );
}
