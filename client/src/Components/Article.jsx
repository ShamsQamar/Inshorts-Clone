import { Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles( theme => ({

  component : {
    marginBottom: "20px",
    borderRadius: "3px",
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
  },
  container : {
    padding : "8px",
    paddingBottom : '4px!important'
 },
 rightContainer : {
    margin : "5px 0px 0 -25px",
    display : 'flex',
    flexDirection : 'column',
    [theme.breakpoints.down('sm')] : {
      margin : "5px 0"
    }
 },
  image : {
     height : 268,
     width : 320,
     borderRadius : 4
  },
  title : {
    color: "#44444d",
    fontWeight: 300,
    fontSize : 22,
    lineHeight : '27px'
  },
  author : {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: '22px',
    color: '#808290'
  },
  description : {
    fontSize: '16px',
    lineHeight: '22px',
    marginTop : '5px'
  },
  publisher : {
    fontSize : 12,
    fontWeight: 600,
    marginTop : 'auto',
    marginBottom : 10,
    '& > *' : {
      textDecoration : 'none',
      color : '#000',
      fontWeight : 700
    }
  }
}))

const Article = ({ article } ) => {
  const classes = useStyles();
  const time = new Date().toTimeString();
   return (
     <Card className={classes.component}>
       <CardContent className={classes.container}>
          <Grid container>
            <Grid item lg={5} md={5} sm={5} xs={12} >
              <img src={article.url} alt="articeImage" className={classes.image}/>
            </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer} >
                <Typography className={classes.title}>{article.title}</Typography>
               <Typography className={classes.author}>
                 <b>short</b> by {article.author} / on {article.timestamp}
               </Typography>
               <Typography className={classes.description}>{article.description}</Typography>
               <Typography className={classes.publisher}>
                 read more at <a href={article.link} target="_blank" rel="noreferrer" >{article.publisher}</a>
               </Typography>
              </Grid>
          </Grid>
       </CardContent>
     </Card>
   )
}

export default Article;