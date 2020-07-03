import React from 'react';
import './styles.css';
import {Container, Box, TableFooter} from '@material-ui/core'

function App() {
  return (
    <>
      <Box className="header">
        <ul>
          <li><a href="#tutorial">tutorial</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#author">author</a></li>
        </ul>
      </Box>
      <Box className="tutorial" id="tutorial">

      </Box>
      <Box className="about" id="about">
        
      </Box>
      <Box className="author" id="author">

      </Box>
      <Box  
        className="footer"
        display="flex" 
        alignItems="center"
        justifyContent="center"
      >
      <TableFooter> &copy; 2020 Guula</TableFooter>
      </Box>
    </>
  );
}

export default App;
