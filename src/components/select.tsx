import React, { ForwardRefRenderFunction } from "react"
import { SelectHTMLAttributes } from "react"

interface Props{
    options: string[]
}

export const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
    return(
        <select ref={ref}>
            {props.options.map(option => <option key={option} value={option} label={option}/>)}
        </select>
    )
})