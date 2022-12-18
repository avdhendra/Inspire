import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material'
import { styled } from '@mui/system'
import FlexBetween from '../../Components/FlexBetween'

export const FlexBoxComponent = styled(FlexBetween)(({ theme }) => ({
    padding: '1rem 6%',
   

}))
export const LinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:"5px",
  cursor: "pointer",
  "& img": {
    width: "100%",
  },
}));

export const MobileNav = styled(Box)(({ theme }) => ({
    poistion: "fixed",
    right: "0",
    bottom: "0",
    height: "100%",
    zindex: "10",
    maxWidth: "500px",
    minWidth: "300px",
    
}))

