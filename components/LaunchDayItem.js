import React from 'react'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const LaunchDayItem = ({ item }) => {
  return (
    <Box className='launchpayment__item'>
      <Box className='launchpayment__item__left'>
        <Typography component="h1" sx={{ fontSize: "64px", lineHeight: "74px", color: "#000", display: "flex" }}><Typography component="span" sx={{ fontSize: "14px", lineHeight: "16px", fontWeight: "700", marginTop: "7px" }}>DAY</Typography>{item.day}</Typography>
      </Box>
      <Box className='launchpayment__item__right' sx={{ borderTop: "1px solid #000", paddingTop: "16px", marginTop: "15px" }}>
        <Typography component="h1" sx={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#000", marginTop: "10px" }}>{item.title}</Typography>
        <Typography component="p" sx={{ fontSize: "16px", lineHeight: "24px", fontWeight: "400", color: "#000" }}>{item.description}</Typography>
      </Box>

    </Box>
  )
}

export default LaunchDayItem