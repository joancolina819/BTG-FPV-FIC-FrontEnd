import React from "react";
import Box from '@mui/material/Box';

export default function Banner(){

    return(
        <Box sx={{
            width: "full",
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }} >

        </Box>
    )
}