import React, { useEffect, useState  } from 'react';
import Header from './Header'
import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'

const Home = () =>{
  return <h1> Home</h1>
}

function App() {
  const [data,setData] = useState({})
  useEffect(() =>{
   axios.get('/api').then(res => {
     setData(res.data)
   })
  },[])
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path = '/' exact component = {Home} />
          
          <Route path = '/Generos/Novo' exact component = {NovoGenero} />
          <Route path = '/Generos/:id' exact component = {EditarGenero} />
          <Route path = '/Generos/' exact component = {Generos} />

          <Route path = '/Series/Novo' exact component = {NovaSerie} />
          <Route path = '/Series/:id' exact component = {InfoSerie} />
          <Route path = '/Series/' exact component = {Series} />
          <pre>{JSON.stringify(data)}</pre>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
