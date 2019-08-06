import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Series = () => {
    const [data, setData] = useState([])
        useEffect(() =>{
        axios
        .get('/api/series')
        .then(res =>{
            
         setData(res.data.data)
        })
    }, []) 
    const deleteSerie = id =>{
       axios.delete('/api/series/' + id)
       .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
       }) 
    }
    
    const renderizaLinha = record =>{
    return(
        <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>{record.genre}</td>       
        <td>
            <button className = 'btn btn-danger'onClick = {() => deleteSerie(record.id)} >Deletar</button>
            {' '}
           <Link to ={'/Series/'+record.id}><button className ='btn btn-success'>Alterar</button></Link>
        </td>
      </tr>
        )        
    }

    if(data.length === 0 ){
        return(
        <div className = "container">
            <div><Link to = '/Series/Novo'><button className ='btn btn-primary'>Nova Série</button></Link></div>
            <div className = "alert alert-warning" role ="alert">
                Você não possui Series criadas
            </div>
        </div>
        )
    }

    return (
    <div className ="container">
        <h1> Series </h1>
        <pre>{JSON.stringify(data)}</pre>
        <div><Link to = '/Series/Novo'><button className ='btn btn-primary'>Nova Série</button></Link></div>
        <p></p>
        <table className="table table-dark">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Gênero</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {data.map(renderizaLinha)}
        </tbody>
        </table>
    </div>
    )
    
  } 
export default Series