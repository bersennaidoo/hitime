import React, { FC, useState, useEffect, useRef } from "react"
import  $  from "jquery"

type TButtonTProps = {}

const ButtonT: FC<TButtonTProps> = (props: TButtonTProps) => {

    /*useEffect(() => {
        $(".btnt").on("click", function() {
            $(this).css("background-color", "blue")
        })

    }, [])*/

    const onClickSubmit = (e: any) => {
        $(".btnt").css({
            "background-color": "blue",
            "color": "white",
            "display": "none"
        })
    }

    const onClickColor = (e: any) => {
        e.target.style = "background-color: red; width: 200px; height: 200px; color: white"
    }

    return (
        <>
        <button className="btnt" onMouseEnter={onClickSubmit} type="submit">Submit</button>
        <button onClick={onClickColor} type="button">Click</button>
        </>
    )
}

export default ButtonT 