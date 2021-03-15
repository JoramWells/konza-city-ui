import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{color:"#ff8080"}} />
      </ListItemIcon>
      <ListItemText style={{color:"white", fontWeight:"2rem"}} primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{color:"#ff8080"}}>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText style={{color:"white", fontWeight:"2rem"}} primary="Traffic Flow" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{color:"#ff8080"}} />
      </ListItemIcon>
      <ListItemText style={{color:"white", fontWeight:"2rem"}} primary="Accidents" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{color:"#ff8080"}} />
      </ListItemIcon>
      <ListItemText style={{color:"white", fontWeight:"2rem"}} primary="Track Vehicle" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{color:"#ff8080"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"white", fontWeight:"2rem"}} primary="Parking" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);