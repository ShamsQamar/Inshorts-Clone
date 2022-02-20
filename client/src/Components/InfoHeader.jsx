import { Box, Typography,makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({  // whenever to use breakpoint with theme, don't forget to wrap with ()
  container : {
    background : '#f44336',
    color : '#ffffff',
    height : 48,
    display : 'flex',
    alignItems : 'center',
    marginBottom : '33px',
    [theme.breakpoints.down('md')] : {
      display : 'none'
    }
  },
  text : {
    fontSize : '14px',
    marginLeft : '48px',
    fontWeight : 300,
    fontFamily : "'Roboto' ,sans-serif"
  },
  logo : {
    cursor : 'pointer',
    height : '38px',
    '&:last-child': {
      margin : '4px 61px 0 20px'
    }
  }
}))

export const InfoHeader = () => {
const classes = useStyles()

const appleStore = "https://assets.inshorts.com/website_assets/images/appstore.png"
const playStore = "https://assets.inshorts.com/website_assets/images/playstore.png"

  return (
   <Box className={classes.container}>
     <Typography className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
     <Box style={{marginLeft: 'auto'}}>
     <img src={appleStore} alt='apple' className={classes.logo}/>
     <img src={playStore} alt='google' className={classes.logo}/>
     </Box>
   </Box>
  )
}
