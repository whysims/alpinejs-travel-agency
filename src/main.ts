import "./style.css";
import Alpine from "alpinejs";
import axios from "axios";

window.Alpine = Alpine;
const apiEndpoint = "https://657f7be36ae0629a3f53598f.mockapi.io/api/v1";

const api = axios.create({ baseURL: apiEndpoint });

const randomCountries = [
  "Ireland",
  "Japan",
  "France",
  "Germany",
  "Italy",
  "United States",
];

const buildUnsplashUrl = (keyword: string) => {
  const unsplashBase = "https://api.unsplash.com/";
  const accessKey = "zEEtNXMlOjoTQ2viCSMsE1ifKbx1VNDPBAAMn3ifC3M";
  return `${unsplashBase}search/photos?query=${keyword}&client_id=${accessKey}`;
};

Alpine.store("agency", {
  name: "Alpine Travel Agency",
  featuredImage: buildUnsplashUrl(
    randomCountries[Math.floor(Math.random() * randomCountries.length)]
  ),
  featuredCountries: async () => {
    return api
      .get<{ name: string; description: string }[]>("/countries")
      .then((response) => response.data.slice(0, 3));
  },
});

Alpine.start();
