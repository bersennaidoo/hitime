import ThumbnailPresenter from "./ThumbnailPresenter";

describe("ThumbnailPresenter", () => {
  it("should render a list of thumbnails", () => {
    const items = [
      { itemId: "1", imageId: "images/200x200.png", title: "product1" },
      { itemId: "2", imageId: "images/200x200.png", title: "product2" },
      { itemId: "3", imageId: "images/200x200.png", title: "product3" },
      { itemId: "4", imageId: "images/200x200.png", title: "product4" },
      { itemId: "5", imageId: "images/200x200.png", title: "product5" },
      { itemId: "6", imageId: "images/200x200.png", title: "product6" },
    ];
    cy.mount(<ThumbnailPresenter items={items} />);
  });
});
