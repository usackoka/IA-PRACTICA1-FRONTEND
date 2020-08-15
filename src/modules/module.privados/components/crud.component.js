import React, { useState } from 'react'
import MaterialTable from 'material-table';

const CRUDPrivados = props =>{
    const [state, setState] = useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
      });
    
      return (
        <MaterialTable
          title="Listado de Privados"
          columns={state.columns}
          data={state.data}
        />
      );
}

export default CRUDPrivados;