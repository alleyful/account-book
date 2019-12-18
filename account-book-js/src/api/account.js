import axios from "axios";

export const getAccounts = async () => {
  const response = await axios.get("/accounts");
  return response.data;
};

export const getAccountByDate = async id => {
  const response = await axios.get(`/accounts/${id}`);
  return response.data;
};
