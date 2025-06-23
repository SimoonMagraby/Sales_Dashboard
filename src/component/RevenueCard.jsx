import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';


const RevenueCard = (props) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#1c1c24',
            dark: '#13131a',
          },
        },
      }}
    >
    <Box
        sx={{
          
          width: {
            xs: '100%',
            sm: 'calc((100% - 14px) / 2)',     // 2 per row with 1 gap
            md: 'calc((100% - 3 * 14px) / 4)'     // 4 per row (with spacing)
          },
          height: 150,
          backgroundColor: 'primary.main',
          color: 'white',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pl: 1.5,
          boxSizing: 'border-box',
          
          
        }}
    >
        <div className='spmr-content'>
            <h3>{props.name}</h3>
            <h2>${props.number}</h2>
            <h4>compared to ${props.compNumber}</h4>
        </div>


    </Box>
    </ThemeProvider>
  )
}

export default RevenueCard
