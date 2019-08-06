import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditarGenero = ({match}) =>{
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)

    useEffect(() => {
        axios.get('/api/genres/' + match.params.id)
        .then(res =>{
            setName(res.data.name)
        })
    }, [match.params.id])
    console.log(match)

    const onchange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios.put('/api/genres/' + match.params.id,{
        name: name   
        }).then(res =>{
            console.log(res)
            setSucess(true)
        })     
    }
    if(sucess){
       return <Redirect to ='/Generos'/>
    }
    return(
        <div className="container">
            <h1>Editar Gênero</h1>
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
export default EditarGenero