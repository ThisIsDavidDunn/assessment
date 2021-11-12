import { render } from "@testing-library/react";
import SupportView from "./SupportView";

const testContact = {
  name: "John Smith",
  email: "john.smith@feefo.com",
};

test("renders correct support details", () => {
  const component = render(<SupportView contact={testContact} />);

  const name = component.getByText(testContact.name);
  const email = component.getByText(testContact.email);
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
