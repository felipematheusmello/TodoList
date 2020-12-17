import "./App.css";
import { useState } from "react";
import Routes from "./components/routes";
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Routes
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
}

export default App;
