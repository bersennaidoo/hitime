import { Request, Response } from "express";

export class ItemsHandlers {
  public getItems(req: Request, res: Response) {
    setTimeout(
      () =>
        res.json([
          {
            itemId: "coffee",
            imageId: "/images/coffee/coffee.png",
            title: "Coffee",
            price: 0.99,
            description: "",
            salePrice: 0,
          },
          {
            itemId: "cookie",
            imageId: "/images/coffee/cookie.png",
            title: "Cookie",
            price: 1,
            description: "May contain nuts.",
            salePrice: 0.5,
          },
          {
            itemId: "croissant",
            imageId: "/images/coffee/croissant.png",
            title: "Croissant",
            price: 2.5,
          },
          {
            itemId: "cupcake",
            imageId: "/images/coffee/cupcake.png",
            title: "Cupcake",
            price: 3,
          },
          {
            itemId: "french-press",
            imageId: "/images/coffee/french-press.png",
            title: "French Press",
            price: 1.75,
          },
          {
            itemId: "iced-coffee",
            imageId: "/images/coffee/iced-coffee.png",
            title: "Iced Coffee",
            price: 1.25,
          },
          {
            itemId: "latte",
            imageId: "/images/coffee/latte.png",
            title: "Latte",
            price: 2,
          },
          {
            itemId: "milk",
            imageId: "/images/coffee/milk.png",
            title: "Milk",
            price: 0.5,
          },
          {
            itemId: "sandwich",
            imageId: "/images/coffee/sandwich.png",
            title: "Sandwich",
            price: 6,
          },
          {
            itemId: "tea",
            imageId: "/images/coffee/tea.png",
            title: "Tea",
            price: 1.5,
          },
        ]),
      500
    );
  }
}
