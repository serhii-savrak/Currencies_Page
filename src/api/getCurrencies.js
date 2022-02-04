import axios from "axios";

export const getCurrencies = (currencyType) => {
  return axios.get(
    `https://v6.exchangerate-api.com/v6/7f8c78ca3c4827bbf14d1180/latest/${currencyType}`
  );
};

export const getBaseCurrencies = (baseCurrency, targetCurrency) => {
  return axios.get(
    `https://v6.exchangerate-api.com/v6/7f8c78ca3c4827bbf14d1180/pair/${baseCurrency}/${targetCurrency}/1`
  );
};
