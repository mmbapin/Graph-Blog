import React from 'react';
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Link from "next/link"

const FintechCard = ({ item }) => {
  return (
    <Box className='fintech__card'>
      <Link href="/"><img className='fintech__card__image' src={item.image} alt="Fintech Card Image" /></Link>
      <Box className='fintech__title'>
        <Typography component="h2" sx={{ fontSize: "26px", lineHeight: "34px", fontWeight: "600", color: "#000000", borderBottom: "1px solid #000", paddingBottom: "12px", marginTop: "46px" }}>
          {item.title}
        </Typography>
      </Box>
      <Box className='fintech__description fintech__card__flexible'>
        <Typography component="p" sx={{ fontSize: "16px", lineHeight: "24px", fontWeight: "400", color: "#000000", marginTop: "28px" }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default FintechCard