import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  footer : {
    backgroundColor: '#222',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  name : {
    fontSize: '20px',
    padding: '20px 30px 15px',
    color: 'white'
  },
  
  a :{
    color: 'white'
  },
  
  iconContainer : {
    width: '60%',
    height: '50px',
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <span className={classes.name}>
        Inshorts clone made by -{" "}
        <a className={classes.a} href="https://www.linkedin.com/in/shams-qamar-703a21212" target="__blank">
          Shams Qamar
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <Box className={classes.iconContainer}>
        <a className={classes.a} href="https://www.instagram.com/shams.qamar90/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a className={classes.a} href="https://www.linkedin.com/in/shams-qamar-703a21212" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a className={classes.a} href="https://www.facebook.com/shams.qamar.71" target="__blank">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </Box>
    </Box>
  );
};



export default Footer;