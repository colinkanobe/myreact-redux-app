import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";

function renderHeader() {
  return shallow(<Header />);
}
//Shallow render you search for the React component tag
it("contains three navlinks via shallow", () => {
  const numLinks = renderHeader().find("NavLink").length;
  expect(numLinks).toEqual(3);
});
//mount searches final rendered html since it generates final dom
it("contains three navlinks via shallow", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toEqual(3);
});
