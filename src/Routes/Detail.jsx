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
    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section className='container'>
      <h1 className='detail'>Detail Dentist id </h1>
      <>
        <h4 className='a'>Id</h4>
        <h4 className='b'>Name</h4>
        <h4 className='c'>User</h4>
        <h4 className='d'>Email</h4>
        <h4 className='e'>Phone</h4>
        <h4 className='f' >Website</h4>
      </>
      <>
        <p className='p1'>{details?.id}</p>
        <p className='p2'>{details?.name}</p>
        <p className='p3'>{details?.username}</p>
        <p className='p4'>{details?.email}</p>
        <p className='p5'>{details?.phone}</p>
        <p className='p6'>{details?.website}</p>
      </>
     
      <Button>
        <Link to='/home'>Volver</Link>
      </Button>
    </section>

  )
}

export default Detail