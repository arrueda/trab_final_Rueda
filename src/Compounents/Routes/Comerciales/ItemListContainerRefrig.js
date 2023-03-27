import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import carrito from '../../Images/carrito.png';
import '../../css/app.css'

// PostListContainer. Listado de heladeras

const Comerciales = () => {

  const [ items, setItems ] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db, 'comercial');

    getDocs(itemCollections).then((snapshotList) =>{
      const docs = snapshotList.docs.map(snapshot =>({
        id: snapshot.id,...snapshot.data(),
      }));
      setItems(docs);
    })
  }, [])

    return (
      <div className='contenedor mt-3'>
        {items.map((item) => (
        <div className='container'>
          <img src={item.imagen} alt='Imagen heladera' />
          <p>Titulo: {item.title}</p>
          <p>Precio: {item.price}</p>
          <Link to={`/comerciales/${item.id}`} className="btn btn-primary">Ver más</Link>
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <div>
            <button>
            <img className='carrito-compras-img' src={carrito} alt='Imagen de carrito de compras' />
            <span>Sumar al carrito</span>
            </button>
          </div>
        </div>
        ))}
      </div>
    );
}


export default Comerciales;