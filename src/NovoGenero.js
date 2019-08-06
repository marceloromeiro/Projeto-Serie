import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovoGenero = () =>{
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)
    const onchange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios.post('/api/genres/',{
        name: name   
        }).then(res =>{
            console.log(res)
            setSucess(true)
        },[])     
    }
    if(sucess){
       return <Redirect to ='/Generos'/>
    }
    return(
        <div className="container">
            <h1>Novo Gênero</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" value = {name} onChange = {onchange} className="form-control" id="name" placeholder="Nome do Gênero"/>
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}
export default NovoGenero