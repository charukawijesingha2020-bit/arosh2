import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-center p-5 z-50">
      <div className="glass px-8 py-4 flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/memories">Memories</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/final">Forever</Link>
      </div>
    </div>
  );
}