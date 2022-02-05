import React, { useRef, useState } from "react";
import { getCurrencies } from "../../api/getCurrencies";
import "./Main.scss";

const Main = () => {
  const [currencies, setCurrencies] = useState(null);
  const currencyInput = useRef();

  const handleClick = () => {
    const inputValue = currencyInput.current.value;
    const [quantity, baseCurrency, , wantedCurrency] = inputValue.split(" ");

    getCurrencies(baseCurrency).then(({ data }) => {
      const baseRate = data.conversion_rates[wantedCurrency.toUpperCase()];
      const calculateExchange = baseRate * quantity;
      setCurrencies({
        totalSum: calculateExchange.toFixed(2),
        fromCurrency: baseCurrency,
        toCurrency: wantedCurrency,
        quantity,
      });
    });

    currencyInput.current.value = "";
  };

  return (
    <>
      <section className="main-section">
        <fieldset className="main-section__fieldset">
          <legend className="main-section__legend">
            Enter text like in example: "10 usd in uah" and get currency
            exchange value:
          </legend>
          <input className="main-section__input" ref={currencyInput}></input>
          <button className="main-section__btn" onClick={handleClick}>
            Exchange
          </button>
          <div className="main-section__exchanged-container">
            {currencies !== null && (
              <p className="main-section__exchanged-value">
                {`${
                  currencies.quantity
                } ${currencies.fromCurrency.toUpperCase()} =  ${
                  currencies.totalSum
                } ${currencies.toCurrency.toUpperCase()}`}
              </p>
            )}
          </div>
        </fieldset>
      </section>
    </>
  );
};

export default Main;
