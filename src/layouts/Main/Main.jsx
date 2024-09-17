import { Popular } from "../Popular/Popular";
import { Slider } from "../../components/Slider/Slider";
import { Pizza } from "../Pizza/Pizza";
import { Combo } from "../Combo/Combo";
import { Snacks } from "../Snacks/Snacks";
import { Desserts } from "../Desserts/Desserts";
import { Drinks } from "../Drinks/Drinks";

export const Main = () => {
  return (
    <>
      <Slider />
      <Popular />
      <Pizza />
      <Combo />
      <Snacks />
      <Desserts />
      <Drinks />
    </>
  );
};
