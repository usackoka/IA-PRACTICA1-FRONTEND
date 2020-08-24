import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table';
import {db} from './../../../../firebase'

const ListPrivados = props =>{
    const [state, setState] = useState({
        columns: [
          { title: 'Nombre', field: 'nombre' },
          { title: 'Carnet', field: 'carnet' },
          { title: 'CUI', field: 'cui' },
          { title: 'Semestre', field: 'semestre'},
          { title: 'Año', field: 'year'},
          { title: 'Grupo', field: 'grupo'},
          { title: 'Correo', field: 'correo'},
        ],
        data: [],
      });

      const getPrivados = async () => {
        db.collection('Solicitudes').onSnapshot((querySnapshot)=>{
          let list = []
          querySnapshot.forEach((doc)=>{
            list.push({
              ...doc.data(),id:doc.id
            })
          });
          setState({...state,data:list})
        });
      }

      useEffect(()=>{
        getPrivados()
      },[])
    
      return (
        <MaterialTable
          title="Listado de Privados"
          columns={state.columns}
          data={state.data}
        />
      );
}

export default ListPrivados;