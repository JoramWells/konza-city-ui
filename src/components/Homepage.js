import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';
import stats from './stats.svg'
import medical from './medical.svg'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar:{
    backgroundColor:"rgb(40,44,53)",


  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grids:{
      color:"white",
      paddingTop:theme.spacing(5),
      marginTop:"100px",
      marginLeft:theme.spacing(5),

  },
  grid2:{
    color:"white",
    height:"400px",
    backgroundColor:"rgb(40,44,53)",


},
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
           <Link to="/dashboard">
           XpressLite
           </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container style={{height:"500px", backgroundColor:"rgb(22,22,29)"}}>
          <Grid className={classes.grids}  item xs={6}>
              <Typography variant="h4">
                  Welcome to XpressCloud Platform
              </Typography>
              <Typography component="p">
                  An Online platform that helps you manage traffic.
              </Typography>

          </Grid>
          <Grid style={{marginTop:"20px"}} item xs={5}>
              <img src={stats} alt="omg" style={{width:"500px"}} />
          </Grid>
      </Grid>
      <Grid container className={classes.grid2}>

          <Grid item xs={3} className={classes.grids}>
              <Typography variant="h6">
                 Parking Lots
              </Typography>
              <p>
                  ExpressCloud helps you view available parking lots
              </p>
          </Grid>
          <Grid xs={3} item className={classes.grids}>
              <Typography variant="h6">
                  Recent Accidents
              </Typography>
              <p>
                  ExpressCloud helps you view available parking lots
              </p>
          </Grid>
          <Grid xs={3} item className={classes.grids}>
              <Typography variant="h6">
                  Traffic Updates
              </Typography>

          </Grid>

      </Grid>
      <Grid container style={{height:"300px", backgroundColor:"rgb(22,22,29)"}}>
          <Grid item xs={5}>
          <img src={medical} alt="woe" style={{width:"200px", marginTop:"60px"}} />
          </Grid>
          <Grid item style={{marginTop:"50px", color:"white"}}>
              <Typography variant="h4" style={{color:"white"}}>
                  Helped save lives
              </Typography>
          <Typography component="p" color="textSecondary" style={{color:"white"}}>
              XpressCloud has helped save lives in ways that we never thought it was possible
          </Typography>
          </Grid>



      </Grid>
      <Grid  container style={{height:"300px", backgroundColor:"rgb(40,44,53)"}}>

      </Grid>
      <Grid container style={{height:"400px", backgroundColor:"rgb(22,22,29)"}}>

</Grid>

    </div>
  );
}
