import React, { useState } from 'react'
import MaterialTable from 'material-table';

const ListPrivados = props =>{
    const [state, setState] = useState({
        columns: [
          { title: 'Nombre', field: 'nombre' },
          { title: 'Carnet', field: 'carnet' },
          { title: 'CUI', field: 'CUI' },
          { title: 'Semestre', field: 'semestre'},
          { title: 'Año', field: 'year'},
          { title: 'Grupo', field: 'grupo'},
          { title: 'Correo', field: 'correo'},
        ],
        data: [],
      });
    
      return (
        <MaterialTable
          title="Listado de Privados"
          columns={state.columns}
          data={state.data}
        />
      );
}

export default ListPrivados;