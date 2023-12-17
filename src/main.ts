import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("agency", {
  name: "Alpine Travel Agency",
  featuredCountries: [
    { name: "USA", content: "Lorem Ipsum" },
    { name: "Canada", content: "Lorem Ipsum" },
    { name: "Switzerland", content: "Lorem Ipsum" },
  ],
});

Alpine.start();
