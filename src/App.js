import Navig from "./Components/Navbar/Navbar.js";
import Formi from "./Components/Form/Form.js";
import "./App.css";
import { Image } from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Navig />
      <Image
        className="img"
        src="https://www.leparisien.fr/resizer/1dAiNYFfq7XNRQ_-gbWi9dJzFAk=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/HVV7FEXN7JES7FFVFAYVWBVCSA.jpg"
        fluid
      />
      <Formi />
    </div>
  );
}

export default App;
