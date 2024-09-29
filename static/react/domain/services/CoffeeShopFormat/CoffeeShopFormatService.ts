import { format } from "path"

export class CoffeeShopFormatService {

    public setFormattedPhone = (newNumber: string) => {
        const digits = newNumber.replace(/\D/g, '')
        let formatted = digits.substring(0, 3)
        if (digits.length === 3 && newNumber[3] === '-') {
            formatted = `${formatted}-`
        } else if (digits.length > 3) {
            formatted = `${formatted}-${digits.substring(3, 6)}`
        }
        if (digits.length === 6 && newNumber[7] === '-') {
            formatted = `${formatted}-`
        } else if (digits.length > 6) {
            formatted = `${formatted}-${digits.substring(6, 10)}`
        }

        return formatted
    }
}