import axios from "axios";
import React, { useState, useEffect } from "react";

const BKTCContext = React.createContext();
var config = {
  method: "get",
  url:
    "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0xEcA19B1a87442b0c25801B809bf567A6ca87B1da&startblock=0&endblock=999999999&sort=asc&apikey=K7ST5DC6VP2Z5ZVWWD1IB3JDB5AHIEV274",
};

const BKTCContextProvider = (props) => {
  const [transData, setTransData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(config);
      const res = await result.data.result;
      return res;
    };

    fetchData().then((res) => setTransData(res));
  }, []);
  useEffect(() => {
    // console.log(transData);
  }, [transData]);
  return (
    <BKTCContext.Provider
      value={{
        transData,
      }}
    >
      {props.children}
    </BKTCContext.Provider>
  );
};

export { BKTCContextProvider, BKTCContext };
