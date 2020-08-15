import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import { StyledMenu, StyledMenuItem, useStyles } from './material.styles'

const MenuBar = props => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={handleClick} />
                    </IconButton>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <DraftsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <InboxIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </StyledMenuItem>
                    </StyledMenu>

                    <Typography variant="h6" className={classes.title}>Menu</Typography>
                    <Button color="inherit">HOME</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuBar;