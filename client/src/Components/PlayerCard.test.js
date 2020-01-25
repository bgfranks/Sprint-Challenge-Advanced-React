import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

test("Player Card Container", () => {
  const { getByTestId } = render(<PlayerCard />);

  getByTestId("card-container");
});
