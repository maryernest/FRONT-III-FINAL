import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { endPoint } from './Home'
import { Button } from '@mui/material'
import '../style/Style.css'


const Detail = () => {

  const { id } = useParams();
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
    <section>
      <h1>Detail Dentist id </h1>

      <div className='titulo'>
        <h4>Id</h4>
        <h4>Name</h4>
        <h4>User</h4>
        <h4>Email</h4>
        <h4>Phone</h4>
        <h4>Website</h4>
      </div>
      <div className='decrip'>
        <p>{details?.id}</p>
        <p>{details?.name}</p>
        <p>{details?.username}</p>
        <p>{details?.email}</p>
        <p>{details?.phone}</p>
        <p>{details?.website}</p>
      </div>
      <Button>
        <Link to='/home'>Volver</Link>
      </Button>
    </section>

  )
}

export default Detail