import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"

const CardCertification = () => {
  const cardImage = [
    { image: "/img_BC card.png" },
    { image: "/img_국민.png" },
    { image: "/img_visa.png" },
    { image: "/img_mastercard.png" }
  ];

  const certificationImage = [
    { image: "/img_emvco.png" },
    { image: "/img_pcodss.png" },
    { image: "/img_iso9001.png" },
    { image: "/img_iso27001.png" }
  ]
  return (
    <Box sx={{ marginTop: "234px", marginBottom: "336px" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", marginBottom: "96px" }}>
          <Typography component="h1" sx={{ fontSize: "38px", lineHeight: "44px", color: "#000", fontWeight: "600", marginBottom: "20px" }}>신뢰할 수 있는 파트너와 함께 합니다.</Typography>
          <Typography component="p" sx={{ fontSize: "18px", lineHeight: "27px", color: "#000", fontWeight: "400" }}>KONA PLATE는 국내외 다양한 고객들과 만나고 있습니다..</Typography>
        </Box>
        <Box>
          <Typography component="h5" sx={{ fontSize: "20px", lineHeight: "28px", textAlign: "center", fontWeight: "600", marginBottom: "24px" }}>Card Network</Typography>
          <Box className='card__group' sx={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", padding: "39px 0" }}>
            <Grid container rowSpacing={5} columnSpacing={2}>
              {cardImage?.map((carditem, index) => (
                <Grid className="" item xs={6} sm={3}>
                  <img src={carditem.image} alt="Card Image" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box sx={{ marginTop: "72px" }}>
          <Typography component="h5" sx={{ fontSize: "20px", lineHeight: "28px", textAlign: "center", fontWeight: "600", marginBottom: "24px" }}>Certification</Typography>
          <Box className='certification__group' sx={{ borderTop: "1px solid #000", borderBottom: "1px solid #000", padding: "39px 0" }}>
            <Grid container rowSpacing={5} columnSpacing={2}>
              {certificationImage?.map((carditem, index) => (
                <Grid className="" item xs={6} sm={3}>
                  <img src={carditem.image} alt="Card Image" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CardCertification