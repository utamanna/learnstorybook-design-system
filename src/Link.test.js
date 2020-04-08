import React from "react";
import ReactDom from "react-dom";
import { Link } from "./Link";

const LinkWrapper = (props) => <a {...props} />;

it("has a href attributre when rendering with linkWrapper", () => {
  const div = document.createElement("div");

  ReactDom.render(
    <Link href="https://learnstorybook.com" LinkWrapper={LinkWrapper}>
      Link Text
    </Link>,
    div
  );

  expect(
    div.querySelector('a[href="https://learnstorybook.com"]')
  ).not.toBeNull();
  expect(div.textContent).toEqual("Link Text");

  ReactDom.unmountComponentAtNode(div);
});
