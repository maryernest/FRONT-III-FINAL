import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { endPoint } from './Home'
import '../style/Style.css'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } =  useParams();
  const [details, setDetails] = useState([]);
  

  const getDetail = async () => {
    const res = await fetch(`${endPoint}/${id}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };


  useEffect(() => {
    getDetail();
  }, []);



  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
      <h3>#</h3>
      <p>{details?.id}</p>
      <h3>Name</h3>
      <p>{details?.name}</p>
      <h3>User</h3>
      <p>{details?.username}</p>

      <Link to='/home'>Volver</Link>
    </>

  )
}

export default Detail