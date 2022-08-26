import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/weightlifter.png'

const Footer = () => {
  return (
    <Box
    mt="80px"
    bgcolor="#B0ACE3"
    >
        <Stack
        direction="row"
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
        pb="40px"
        >
            <img src={Logo} alt="logo" width="48px" height="48px" />
            <Typography  variant="h6">Made by Andre</Typography>
        </Stack>
    </Box>
  )
}

export default Footer