export class CoffeeShopTaxService {


    public calculateTax = (zipCode: string, subTotal: number) => {

        const taxPercentage = parseInt(zipCode.substring(0, 1) || '0', 10) + 1
        const taxRate = taxPercentage / 100
        const tax = subTotal * taxRate

        return tax
    }

    public calculateTotal = (subTotal: number, tax: number) => {

        return subTotal + tax
    }
}