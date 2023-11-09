import axios from "axios";

const BASE_URL =
  "https://de1.api.radio-browser.info/json/countries?order=name&limit=10";

const getCountryData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCountryData;
export { getCountryData };
