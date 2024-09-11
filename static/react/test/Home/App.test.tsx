import React, { act } from "react";
import ReactDOM from "react-dom/client";
import App from "../../App"

import "@testing-library/jest-dom/extend-expect"

describe("Home page", () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement("div")
        document.body.replaceChildren(container)
    })

    const render = (component: React.ReactNode) => {
        act(() => {
            ReactDOM.createRoot(container).render(component)
        })
    }

    it("it should render text content entry point react", () => {

        render(<App />)
        expect(document.body.textContent).toContain("Entry point react")
    })
})