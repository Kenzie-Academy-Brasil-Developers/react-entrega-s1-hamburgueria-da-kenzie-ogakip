import "./style.css"
import { useState } from "react"

export const InputSearch = ({ searchFunction }) => {

    const [valueInput, setValueInput] = useState("")

    return (

        <div className="inputSearchBox">
            <input type="text" onChange={(event) => {
                setValueInput(event.target.value.toLowerCase())
            }} placeholder="Digitar Pesquisa"/>
            <button onClick={() => searchFunction(valueInput)} >Pesquisar</button>
        </div>

    )
}