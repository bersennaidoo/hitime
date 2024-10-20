import UserForm from "./UserForm"

describe("UserForm", () => {

    it("should render a button", () => {
        cy.mount(<UserForm  />)
    })
})