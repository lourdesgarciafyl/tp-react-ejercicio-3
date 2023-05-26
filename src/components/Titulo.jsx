import { Button } from "react-bootstrap";
import { useState } from "react";

const Titulo = ({mensaje}) => {
    const[msj, setMsj]= useState("")
    return(
        <section className="text-center">
            <h1 className="display-3">Hello {mensaje} {msj}</h1>
            <Button className="mt-2" variant="primary" onClick={()=> setMsj("(from changed state)")}>Click here!</Button>
        </section>
    )
    }

export default Titulo;