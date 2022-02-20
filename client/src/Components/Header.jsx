import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

import HamburgerDrawer from "./HamburgerDrawer";

const useStyles = makeStyles({
   header : {
      background : '#fff',
      height : '72px',
      boxhadow: "0 2px 5px 0 rgb(0 0 0 / 16%)!important, 0 2px 10px 0 rgb(0 0 0 / 12%)!important"
   },
   logo : {
     cursor : 'pointer',
     height : '56px',
     margin : '41%',
     padding : '8px'  
   },
   menu : {
    background : '#303036'
   }
})

export const Header = ( {setCategory} ) => {

  const classes = useStyles();

  return (
  <AppBar className={classes.header}>
    <Toolbar>
        <HamburgerDrawer setCategory={setCategory}/>
    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" className={classes.logo}/>
    </Toolbar>
  </AppBar>
  )
}

