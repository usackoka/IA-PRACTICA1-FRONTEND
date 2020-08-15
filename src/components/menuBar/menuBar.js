import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MenuBook as MenuBookIcon, Menu as MenuIcon, SupervisedUserCircle as SupervisedUserCircleIcon } from '@material-ui/icons';
import { StyledMenu, StyledMenuItem, useStyles } from './material.styles'
import { useHistory } from 'react-router-dom';

const MenuBar = props => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const history = useHistory()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goTo = (path) => {
        if(history.location.pathname!==path) history.push(path)
        handleClose()
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background:"#505261"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick} >
                        <MenuIcon />
                    </IconButton>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem onClick={() => { goTo('/') }}>
                            <ListItemIcon>
                                <MenuBookIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Consultas" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => { goTo('/crud') }}>
                            <ListItemIcon>
                                <SupervisedUserCircleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Administración" />
                        </StyledMenuItem>
                    </StyledMenu>
                    <Typography variant="h6" className={classes.title}>Menu</Typography>
                    <Button color="inherit" onClick={()=>{goTo('/')}}>HOME</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuBar;