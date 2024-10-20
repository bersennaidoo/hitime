import React, { FC, useState } from "react"

type TUserFormProps = {}

const UserForm: FC<TUserFormProps> = (props: TUserFormProps) => {
    const [userid, setUserid] = useState<string>("")

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ui = e.target.value
        setUserid((prev) => (
            prev = ui
        ))
    }

    const onMouseEnterHandler = (e: React.MouseEvent) => {
        const node = document.getElementById("signup")
        node.style.color! = "red"
        node.innerText = "Hi from React"

    }

    return (
        <form id="signup" method="post" action="">
            <div>
                <span className="label">User Id *</span>
                <input type="text" className="infobox" value={userid} onChange={onChangeHandler} name="userid" />
                <span className="error">This field cannot be blank</span>
            </div>
            <input className="submit" type="submit" value="Submit" />
            <button onMouseEnter={onMouseEnterHandler} type="button">Change Color</button>
        </form>
    )
}

export default UserForm