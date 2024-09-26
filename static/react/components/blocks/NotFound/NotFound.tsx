import React, { FC } from "react"
import { Link } from "react-router-dom"

interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = (props: INotFoundProps) => {

    const {} = props

    return (

        <div className="not-found-component">
            <h2>Page Not Found</h2>
            <Link to="/coffeeshop">Return Home</Link>
        </div>
    )
}

export default NotFound