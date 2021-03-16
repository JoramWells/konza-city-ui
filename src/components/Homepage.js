import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Box, Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import stats from './stats.svg'
import me from './me.jpeg'
import onsare from './onsare.jpeg'
import kim from './kim.jpeg'
import pesh from './pesh.jpeg'
import medical from './medical.svg'
import {Link} from 'react-router-dom'


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
      marginTop:"50px",
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
              <Typography variant="h4" style={{paddingBottom:"15px", paddingTop:"15px"}}>
                  Welcome to XpressCloud
              </Typography>
              <Box style={{paddingLeft:"50px", paddingRight:"50px"}}>
              <Typography component="p">
                 An online  platform that uses modern technology to provide real-time infotmation about traffic status.
              </Typography>
              <Typography component="p">
                The system uses AI to collect data and Machine Learning to analyze the information.
              </Typography>
              <Button color="primary" variant="outlined" style={{marginTop:"20px"}}>LEARN MORE</Button>
              </Box>


          </Grid>
          <Grid style={{marginTop:"20px"}} item xs={5}>
              <img src={stats} alt="omg" style={{width:"500px"}} />
          </Grid>
      </Grid>
      <Grid className={classes.grid2} >
      <Typography variant="h4" style={{paddingTop:"30px"}}>
          Experience our technology
        </Typography>
        <Typography variant="h5">
          Our services
        </Typography>
       <hr/>
      <Grid container >


          <Grid item xs={3} className={classes.grids}>
              <Typography variant="h6">
                 Traffic status
              </Typography>
              <p>
                 
                  Shortest routes<br/>
                  Traffic flow<br/>
                  Avoid traffic

              </p>
          </Grid>
          <Grid xs={3} item className={classes.grids}>
              <Typography variant="h6">
                   Accidents
              </Typography>
              <p>
                  Recent accidents<br/>
                  Updates
              </p>
          </Grid>
          <Grid xs={3} item className={classes.grids}>
              <Typography variant="h6">
                  Parking lots
              </Typography>
              <p>
                Available spaces
              </p>

          </Grid>
          </Grid>
      </Grid>
      <Grid container style={{height:"300px", backgroundColor:"rgb(22,22,29)"}}>
          <Grid item xs={5}>
          <img src={medical} alt="woe" style={{width:"200px", marginTop:"60px"}} />
          </Grid>
          <Grid item style={{marginTop:"50px", color:"white"}}>
              <Typography variant="h4" style={{color:"	#D8D8D8"}}>
                  Help save lives.
              </Typography>
          <Typography component="p" color="textSecondary" style={{color:"	#A9A9A9", paddingTop:"20px", paddingBottom:"20px"}}>
              XpressCloud has helped save lives in ways that we never thought it was possible.
              <br/>
              Ambulances are able to arrive at places of accidents and hospitals more faster.
              <br/>
              Police cars reach at places od crime more faster.

          </Typography>
          <Alert severity="success">Be a part of this!</Alert>

          </Grid>



      </Grid>
      <Grid   spacing={3} style={{height:"350px", backgroundColor:"rgb(40,44,53)", color:"	#F5F5F5"}}>
        <Typography variant="h4" style={{paddingTop:"30px", paddingBottom:"20px"}}>
          Our Team
        </Typography>
<Grid container>
            <Grid item xs={3}>
              <img src={me} alt="abc" style={{width:"150px", borderRadius:"100px"}} />
              <Typography variant="h5">
              Joram Bramuel
            </Typography>
            <Typography variant="body1">
              Software Developer
            </Typography>
            </Grid>

            <Grid item xs={3}>

            <img src={onsare} alt="abc" style={{width:"150px", borderRadius:"100px"}} />

            <Typography variant="h5">
              Dennis Onsare
            </Typography>
            <Typography variant="body1">
              Software Engineer<br/>
              Acturial Scientist
            </Typography>

            </Grid>
            <Grid item xs={3}>
            <img src={kim} alt="abc" style={{width:"150px", borderRadius:"100px"}} />
            <Typography variant="h5">
              Samuel Kimani
            </Typography>
            <Typography variant="body1">
              Software Developer
            </Typography>

            </Grid>
            <Grid item xs={3}>
            <img src={pesh} alt="abc" style={{width:"150px", borderRadius:"100px"}} />
            <Typography variant="h5">
              Patience Njeri
            </Typography>
            <Typography variant="body1">
              Software Developer
            </Typography>

            </Grid>

            </Grid>
      </Grid>
      <Grid style={{height:"400px", backgroundColor:"rgb(22,22,29)"}}>
      <Typography variant="h4" style={{color:"white", paddingTop:"20px"}} >
              Learn More about XpressLite

          </Typography>

      <Grid container >

          <Grid item xs={3} style={{color:"white"}}>
              <Typography variant="h6" component="p">
                  What is XpressLite?
              </Typography>
          </Grid>
          <Grid item xs={3} style={{color:"white"}}>
              <Typography variant="h6" component="p">
                  Car Tracking
              </Typography>
          </Grid>
          <Grid item xs={3} style={{color:"white"}}>
          <Typography variant="h6" component="p">
              Making payments
              </Typography>
          </Grid>

</Grid>
      </Grid>
     

    </div>
  );
}
