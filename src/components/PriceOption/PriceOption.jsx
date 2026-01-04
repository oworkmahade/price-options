import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

const PriceOption = ({ priceOption }) => {
  const { planName, duration, price, currency, features } = priceOption;

  return (
    <>
      <div className="bg-slate-600 p-8 rounded-xl text-white flex flex-col">
        <div className="price">
          <span>{currency} </span>
          <span className="text-4xl font-bold">{price}</span>{" "}
          <span>/ {duration}</span>
        </div>

        <h1 className="planName text-2xl mt-6">{planName}</h1>

        <ul className="features  text-md mt-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index}>
              <div className="flex flex-row items-center  gap-2 mt-2">
                <span className="bg-green-600 p-1  rounded-3xl text-sm">
                  <FaCheck />{" "}
                </span>{" "}
                <span>{feature}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="button mt-4">
          <button className="bg-green-600 p-2 rounded-xl w-full ">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

PriceOption.propTypes = {
  priceOption: PropTypes.object.isRequired,
};

export default PriceOption;
