import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovaSerie = () =>{
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)
    const [genres,setGenres] = useState([])
    const [genreId,setGenreId] = useState('')
    const [data,setData] = useState({})

    const onchange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios.post('/api/series',{
        name: name,
        genre_id: genreId

        }).then(res =>{
            console.log(res)
            setSucess(true)
        },[])     
    }

    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res => {
            setGenres(res.data.data)
            const genres = res.data.data
            const encontrado = genres.find(value => data.genre === value.name)
            if(encontrado){
                setGenreId(encontrado.id)
               
            }
        })
    }, [data])

    const onchangeGenre = evt =>{
        setGenreId(evt.target.value)
    }
    
    if(sucess){
       return <Redirect to ='/Series'/>
    }
       return(
        <div className="container">
            <h1>Nova Serie</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                    <input type="text" value = {name} onChange = {onchange} className="form-control" id="name" placeholder="Nome da Serie"/>
                </div>               
            <div className="form-group">
                <label htmlFor="name">Gênero</label>
                    <select className="form-control" onClick = {onchangeGenre} defaultValue={genreId}>
                        { genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>) }
                    </select>
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
        
        
    )
}
export default NovaSerie