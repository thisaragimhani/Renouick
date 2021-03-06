import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon  from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import WorkIcon from '@material-ui/icons/Work';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
//placeholder avatar
import DescriptionIcon from '@material-ui/icons/Description';
import testAvatar from '../../../assests/AdminDash/admin.png';
import { Menu, MenuItem, ListItem, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//utility for constructing className strings conditionally
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from '../../../store/actions/auth';
//routing to material ui buttons
const MyLink = React.forwardRef((props, ref) => <NavLink exact activeStyle={{color: 'blue', backgroundColor: '#CDC9C9'}} innerRef={ref} {...props} />);



const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    textAlign: 'center',
    backgroundColor: '#E5E8F3'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: '#BFC2CB'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const AdminHeader = (props) =>  {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handlelogout = () => {
        props.onLogout();
        props.history.replace('/');
        
    };

    

    const [menuAnchor, setMenuAnchor] = React.useState(null);

    //open logout menu
    const handleOpenMenu = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    //close logout menu
    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

   


    let avatar = null;
    if(open) {
        avatar = <div>
                    <img alt="Profile pic" 
                    src={testAvatar} 
                    style={{height: '90px', width: '90px', alignSelf: 'center', borderRadius: '50%'}}
                    />
                    <br/>
                    <Typography variant="caption">Logged in as</Typography>
                    <h6>Admin</h6>
                    <Divider/>
                </div>

    }


    return (
        <div className={classes.root}>
            <AppBar
            position="fixed" style={{background:'#111134', color:'#faba39'}}
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Grid justify="flex-end" container spacing={2} >
                        <Grid item>
                            <h6 style={{marginTop: "10px", color:'#faba39'}}>{props.fName}</h6>
                        </Grid>
                        <Grid item>
                            <IconButton 
                            color="inherit"
                            aria-controls="logout-menu"
                            aria-haspopup="true"
                            style={{outline: 'none'}}
                            onClick={handleOpenMenu} 
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                            id="logout-menu"
                            anchorEl={menuAnchor}
                            keepMounted
                            open={Boolean(menuAnchor)}
                            onClose={handleMenuClose}>
                                <MenuItem onClick={handlelogout}>Log out</MenuItem>
                            </Menu>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
            open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                {avatar}
                <List>

                    <ListItem button to="/admin" component={MyLink}>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>

                    <ListItem button to="/admin/admin_registration" component={MyLink} >
                        <ListItemIcon>
                            <WorkIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Admin Registration"/>
                    </ListItem>

                    <ListItem button to="/admin/edit_admin_profile" component={MyLink} >
                        <ListItemIcon>
                            <CreateIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Ëdit Admin Profile"/>
                    </ListItem>
                    <ListItem button to="/admin/report_view" component={MyLink}>
                        <ListItemIcon>
                            <DescriptionIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Report View"/>
                    </ListItem>
                    <ListItem button to="/admin/join_requests" component={MyLink}>
                        <ListItemIcon>
                            <PermIdentityIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Join Requests"/>
                    </ListItem>
                    
                </List>
            </Drawer>
        </div>
    );
    
};
const matchDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

const mapStateToProps = state => {
    return {
        fName: state.email,
    }
}


export default connect(mapStateToProps,matchDispatchToProps)(AdminHeader);