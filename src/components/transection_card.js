const TransCard = ({ item, index }) => {
  console.log(item);
  const { from, to, value } = item;
  const N = 10000000000000000000;

  function intToFloat(num, decPlaces) {
    return num.toFixed(decPlaces);
  }
  return (
    <>
      <div className="flex text-gray-700 justify-between px-4">
        <div className="text-red-600"> {index} </div>
        <div className="text-blue-500"> FROM {from} </div>
        <div className="text-green-500"> TO {to} </div>
        <div className="text-red-700">
          VAL {value < N ? intToFloat(value / N, 18) : intToFloat(value / N, 0)}
          KBTC
        </div>
      </div>
    </>
  );
};
export default TransCard;
