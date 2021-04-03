import "./App.css";
import { useContext, useEffect, useState } from "react";
import { BKTCContext } from "./context/bktc";
import TransCard from "./components/transection_card";

const address = "0xEcA19B1a87442b0c25801B809bf567A6ca87B1da";
function App() {
  const { transData } = useContext(BKTCContext);
  const { user, setUser } = useState([]);
  useEffect(() => {
    // console.log(transData);
    console.log();
  }, [transData]);
  const cal = ({ item }) => {};
  return (
    <div className="App">
      {transData &&
        transData.map((item, index) => (
          <TransCard key={index} item={item} index={index} />
        ))}
      {transData && transData.map((item, index) => cal(item))}
    </div>
  );
}

export default App;
