import { Box, makeStyles } from '@material-ui/core';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
import {Header} from './Components/Header';
import { InfoHeader } from './Components/InfoHeader';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  container : {
   marginTop : 110,
   width : '900px',
   margin : '0 auto',
   [theme.breakpoints.down('md')] : {
     width : '75%'
   },
   [theme.breakpoints.down('sm')] : {
    width : '85%'
  }
  }

}))

function App() {
  

  const [category, setCategory] = useState('General');
  
  return (
  <Box>
   <Header setCategory={setCategory}/> 
   <Box className={useStyles().container}>
   <InfoHeader/>
   <Articles category={category}/>
   </Box>
   <Footer/>
  </Box>
  );
}

export default App;
