import { Box,  useMediaQuery, useTheme,Typography } from '@mui/material'
import React from 'react'
import Form from "./Form"
import { LinkContainer } from './LoginPage.styled'
import {ReactComponent as Logo} from '../../Logo/Logo2.svg'
const LoginPage = () => {
    const theme = useTheme()
    const isNonMobileScreen = useMediaQuery("(min-width:1000px)")
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <LinkContainer>
          <Logo />
          <Typography variant="h4" fontFamily="">
            Inspire
          </Typography>
        </LinkContainer>
      </Box>
      <Box
        width={isNonMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Inspire, Get Inspired
              </Typography>
              <Form/>
      </Box>
    </Box>
  );
}

export default LoginPage