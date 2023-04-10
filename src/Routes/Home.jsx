import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import "../style/Style.css"
export const endPoint = "https://jsonplaceholder.typicode.com/users";


const Home = () => {

  const [details, setDetails] = useState([]);

  const getDetail = async () => {
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <main className="">
    <h1>Home</h1>

    <section className="card-grid">
      {details.length
        ? details.map((detail) =>
          <
            Card key={detail.id}
            name={detail.name}
            username={detail.username}
            id={detail.id}
          />)
        : null}
    </section>

    </main>
  )
}

export default Home