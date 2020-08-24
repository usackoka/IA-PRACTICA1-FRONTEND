import React from 'react'
import { useStyles } from './material.styles'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import {db} from './../../../../firebase'

const CRUDPrivados = props => {
  const classes = useStyles();

  const handleSubmit = async () => {
    await db.collection('test').doc().set({name:'test',age:'0'})
    console.log("guardado")
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction="column" justify="center" alignItems="stretch">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Insertar Estudiante</h2>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Datos Personales</h3>
            <form className={classes.rootTxt} noValidate autoComplete="off">
              <TextField required id="standard-required" label="Nombre" helperText="Nombre Completo" />
              <TextField required id="standard-required" label="CUI" helperText="Documento único de identficación" />
              <TextField required id="standard-required" label="Correo" helperText="Información de contacto" />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Datos Universitarios</h3>
            <form className={classes.rootTxt} noValidate autoComplete="off">
              <TextField required id="standard-required" label="Carnet" helperText="Número de carnet" />
              <TextField required id="standard-required" label="Semestre" helperText="Semestre actual" />
              <TextField required id="standard-required" label="Año" helperText="Año que se presenta la solicitud (YYYY)" />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Datos del Grupo</h3>
            <form className={classes.rootTxt} noValidate autoComplete="off">
              <TextField required id="standard-required" label="Grupo" helperText="Nombre del grupo a asignar" />
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Tooltip title="Guardar" placement="right-end" onClick={handleSubmit}>
        <Fab color="secondary" className={classes.absolute}>
          <SaveIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default CRUDPrivados;