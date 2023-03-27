import React, {useEffect, useState} from 'react';
import { getFirestore, where, getDoc, collection, query, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

//ItemDetalContainer

const ComercialesId = () => {
    const { id } = useParams()
    const [ items, setItems ] = useState({});

    useEffect(() => {
        const getProducto = async () => {
        const db = getFirestore()      
    // doc, vamos a hacer el filtrado para obtener un producto
        const queryRef = doc(db , "comercial", id);
    // recibimos la info
          const response = await getDoc(queryRef);
    // creamos un nuevo objeto con la info
          const newItem = {
            id: response.id,
            ...response.data(),
          };
    // actualizamos el estado
          setTimeout(()=>{
            setItems(newItem);
          }, 1000)
        };
        getProducto();
    
      }, [id]);

    // NO entiendo por que no funciona!!
/*     useEffect(() => {
      const db = getFirestore();
      const itemCollections = collection(db, 'comercial', id);
      const q = query(itemCollections, where('id', '==', id));
      getDocs(q).then((snapshotList) =>{
        const docs = snapshotList.docs.map(snapshot =>({
          id: snapshot.id,...snapshot.data(),
        }));
        setTimeout(()=>{
            setItems(docs);
          }, 2000)
;
      })
    }, [id]); */

    return (
    <div className='container mt-3'>
      <img src={items.imagen} alt='Imagen heladera' />
      <p>Titulo: {items.title}</p>
      <p>Precio: USD {items.price}</p>
      <p>Capacidad: {items.capacity} litros</p>
      <p>Stock: {items.stock}</p>
    </div>
    );
}


export default ComercialesId;