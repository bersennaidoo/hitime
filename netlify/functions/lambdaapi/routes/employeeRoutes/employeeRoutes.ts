import { Router } from "express"
import { EmployeeHandlers } from "../../handlers/employeeHandlers/employeeHandlers"

export class EmployeeRoutes {

    router: Router
    ehandler: EmployeeHandlers

    constructor(router: Router, ehandler: EmployeeHandlers) {
        this.router = router
        this.ehandler = ehandler

         this.router.route("/")
          .get(this.ehandler.getEmployeeOfTheMonth)
    }
}