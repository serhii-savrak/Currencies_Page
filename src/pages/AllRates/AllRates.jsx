import { useEffect, useState } from "react";
import { getCurrencies, getBaseCurrencies } from "../../api/getCurrencies";
import "./AllRates.scss";

const AllRates = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("UAH");
  const [targetCurrency, setTargetCurrency] = useState([]);
  const [targetValue, setTargetValue] = useState("");

  useEffect(() => {
    getCurrencies("USD").then(({ data }) => {
      const currencyNamesList = Object.keys(data.conversion_rates);
      setCurrencyOptions(currencyNamesList);
    });

    getBaseCurrencies("USD", baseCurrency).then(({ data }) => {
      setTargetCurrency([[data.base_code, data.conversion_rate]]);
    });
  }, []);

  useEffect(() => {
    if (targetValue) {
      getBaseCurrencies(targetValue, baseCurrency).then(({ data }) => {
        setTargetCurrency([[data.base_code, data.conversion_rate]]);
      });
    }
  }, [baseCurrency]);

  const handleOnChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleOnChangeTarget = (e) => {
    setTargetValue(e.target.value);

    getBaseCurrencies(e.target.value, baseCurrency).then(({ data }) => {
      setTargetCurrency([[data.base_code, data.conversion_rate]]);
    });
  };

  return (
    <>
      <section className="currencies-section">
        <h2 className="currencies-section__title">
          Here you can find all the currencies due to baseCurrency
        </h2>

        <p className="currencies-section__select-name">Choose base currency:</p>
        <select
          onChange={handleOnChange}
          className="currencies-section__base-currency"
        >
          {currencyOptions.map((el) => {
            return (
              <option
                key={Math.random() * 3}
                selected={baseCurrency === el.toUpperCase()}
              >
                {el.toUpperCase()}
              </option>
            );
          })}
        </select>

        <p className="currencies-section__select-name">
          Choose target currency:
        </p>
        <select
          onChange={handleOnChangeTarget}
          className="currencies-section__target-currency"
        >
          {currencyOptions.map((el) => {
            return <option key={Math.random() * 2}>{el.toUpperCase()}</option>;
          })}
        </select>

        <ul className="currencies-section__current-currency-list current-currency-list">
          {targetCurrency.map((el) => (
            <li key={el[0] + 1} className="current-currency-list-item">{`1 ${
              el[0]
            } = ${el[1].toFixed(2)} ${baseCurrency}`}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AllRates;
