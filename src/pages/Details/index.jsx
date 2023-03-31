import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export function Details() {
 const [details, setDetails] = useState({});
 const { id } = useParams()

 useEffect(() => {
    async function getDetails() {
        const response = await fetch(`https://stranger-things-api.fly.dev/api/v1/characters/${id}`)
        const data = await response.json();

        setDetails(data);
    }
    getDetails()
 }, [])

  return (
    <>
      <h1>{details.name} </h1>
      <img src={details.photo} alt={`Foto de ${details.name}`}/>
    </>
  );
}
