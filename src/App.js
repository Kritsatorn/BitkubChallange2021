import "./App.css";
import { useContext, useEffect, useState } from "react";
import { BKTCContext } from "./context/bktc";
import TransCard from "./components/transection_card";
function App() {
  const { transData } = useContext(BKTCContext);
  const { count, setCount } = useState([]);
  useEffect(() => {
    console.log(transData);
  }, [transData]);
  const cal = (item) => {
    console.log(item);
  };
  return (
    <div className="App">
      {transData &&
        transData.map((item, index) => (
          <TransCard key={count} item={item} index={index} />
        ))}
      {transData && transData.map((item, index) => cal(item))}
    </div>
  );
}

export default App;
