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
        <div> {index} </div>
        <div className=""> FROM {from} </div>
        <div> TO {to} </div>
        <div>
          VAL {value < N ? intToFloat(value / N, 18) : intToFloat(value / N, 0)}
          KBTC
        </div>
      </div>
    </>
  );
};
export default TransCard;
