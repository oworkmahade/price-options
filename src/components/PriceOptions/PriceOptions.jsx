import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    fetch("PriceOptions.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl mt-16 text-center font-bold">
        Best Prices in the Town
      </h1>

      <div className="grid md:grid-cols-3 gap-8 p-8">
        {priceOptions.map((priceOption) => (
          <PriceOption
            key={priceOption.id}
            priceOption={priceOption}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
