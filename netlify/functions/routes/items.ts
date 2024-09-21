import { Router } from "express"

export const itemsRoutes = Router()

itemsRoutes.get("/", (req, res) => {
    res.json({items: [{coffee: "coffee"}]})
})