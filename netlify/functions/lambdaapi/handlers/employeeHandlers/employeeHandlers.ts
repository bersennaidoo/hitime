import { Request, Response } from "express";

export class EmployeeHandlers {
  public currentEmployeesOfTheMonth = ["alice", "bob"];

  public getEmployeeOfTheMonth = (req: Request, res: Response) => {

    let name = req?.query?.name || ""
    name = String(name).toLowerCase()
    const result = this.currentEmployeesOfTheMonth.includes(name)

    res.json({ isEmployeeOfTheMonth: result })
  }
}
