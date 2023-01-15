import React from 'react';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ServiceCard = ({ item }) => {
  return (
    <Box className='service__card' sx={{ background: "#fff", paddingTop: "50px" }}>
      <Box className='service__card__group' sx={{ padding: "0 50px" }}>
        <Typography component="h6" sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: "700", color: "#000", marginBottom: "12px" }}>{item.groupName}</Typography>
      </Box>
      <Box className='service__card__title' sx={{ padding: "0 50px" }}>
        <Typography component="h2" sx={{ fontSize: "30px", lineHeight: "36px", fontWeight: "600", color: "#000", marginBottom: "16px" }}>{item.title}</Typography>
      </Box>
      <Box className='service__card__desc service__card__flexible' sx={{ padding: "0 50px" }}>
        <Typography component="p" sx={{ fontSize: "18px", lineHeight: "26px", fontWeight: "300", color: "#000", marginBottom: "29px" }}>{item.description}</Typography>
      </Box>
      <Box className='service__card__btnwrap' sx={{ padding: "0 50px 50px", color: "#6200D0", fontSize: "14px", lineHeight: "17px", fontWeight: "800" }}>
        <Link href="/"><Box component="span" sx={{ display: "inline-flex", alignItem: "center", cursor: "pointer" }}>더 알아보기<img src="/color-right-arrow.png" alt="color right arrow" style={{ marginLeft: "6px" }} /></Box></Link>
      </Box>
      <img className='service__card__image' src={item.image} alt="Card Image" />
    </Box>

  )
}

export default ServiceCard