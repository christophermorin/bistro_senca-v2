import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Sections render", () => {
  beforeEach(async () => {
    render(<Home />);
  })
  it("Hero", async () => {

    const hero = screen.getByTestId("hero");

    expect(hero).toBeInTheDocument();
  });
  // it("About", async () => {

  //   const about = screen.getByTestId("about");
  //   expect(about).toBeInTheDocument();
  // });
  // it("Specials", async () => {

  //   const specials = screen.getByTestId("specials");
  //   expect(specials).toBeInTheDocument();
  // });
  // it("Reviews", async () => {

  //   const reviews = screen.getByTestId("reviews");
  //   expect(reviews).toBeInTheDocument();
  // });
  // it("Contact", async () => {

  //   const contact = screen.getByTestId("contact");
  //   expect(contact).toBeInTheDocument();
  // });
  // it("Footer", async () => {

  //   const footer = screen.getByTestId("footer");
  //   expect(footer).toBeInTheDocument();
  // });
});
