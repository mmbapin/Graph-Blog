import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"
import FintechCard from './FintechCard';

const FintechIndustry = () => {
  const fintechData = [
    {
      image: "/fintechcardimage.png",
      title: "Fintechs",
      description: "보유하고 있는 회원 Account에 결제 수단을 추가해 보세요."
    },
    {
      image: "/fintechcardimage.png",
      title: "Financial Institutions",
      description: "초기 투자 비용 없이 모바일 서비스와 호환되는 체크카드를 발행하세요."
    },
    {
      image: "/fintechcardimage.png",
      title: "Platform Provider",
      description: "플랫폼 서비스에 고객 잔액을 직접 관리하는 선불계좌를 추가하세요. 기존 서비스와 결제, 송금 기능이 만나면 시너지가 만들어 집니다."
    }
  ]
  return (
    <Box sx={{ marginTop: "220px", marginBottom: "234px" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h1" sx={{ fontSize: "38px", lineHeight: "44px", color: "#000", fontWeight: "600", marginBottom: "20px" }}>산업의 경계를 넘나드는 핀테크</Typography>
          <Typography component="p" sx={{ fontSize: "18px", lineHeight: "27px", color: "#000", fontWeight: "400" }}>핀테크의 활용도는 무궁무진 합니다.<br />
            다양한 산업의 혁신적인 핀테크 활용 사례를 알아보세요.</Typography>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Grid container rowSpacing={8} columnSpacing={8} className="">
            {fintechData?.map((item, index) => (
              <Grid className="fintech__card__inner" item xs={4} key={index}>
                <FintechCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default FintechIndustry