import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import ServiceCard from './ServiceCard';
import Typography from '@mui/material/Typography';

const KonaPlateService = () => {
  const serviceCardData = [
    {
      groupName: "For Fintech",
      title: "결제 수단",
      description: "회원 잔액 및 포인트와 연결된 선불형 체크카드를 도입하여 서비스 사용처를 확대하세요.",
      image: "/Embedded Finance.png"
    },
    {
      groupName: "Embedded Finance",
      title: "디지털 월렛(머니)",
      description: "계좌 없이도 모바일 선불 계정을 탑재하여 송금, 결제, 이체 서비스 제공이 가능합니다.",
      image: "/Embedded Finance.png"
    },
    {
      groupName: "For Fintech",
      title: "결제 수단",
      description: "회원 잔액 및 포인트와 연결된 선불형 체크카드를 도입하여 서비스 사용처를 확대하세요.",
      image: "/Embedded Finance.png"
    },
    {
      groupName: "Embedded Finance",
      title: "디지털 월렛(머니)",
      description: "계좌 없이도 모바일 선불 계정을 탑재하여 송금, 결제, 이체 서비스 제공이 가능합니다.",
      image: "/Embedded Finance.png"
    },
    {
      groupName: "For Fintech",
      title: "결제 수단",
      description: "회원 잔액 및 포인트와 연결된 선불형 체크카드를 도입하여 서비스 사용처를 확대하세요.",
      image: "/Embedded Finance.png"
    },
    {
      groupName: "Embedded Finance",
      title: "디지털 월렛(머니)",
      description: "계좌 없이도 모바일 선불 계정을 탑재하여 송금, 결제, 이체 서비스 제공이 가능합니다.",
      image: "/Embedded Finance.png"
    }
  ]
  return (
    <Box sx={{ background: "linear-gradient(180deg, #F9F5FF 0%, #F8F8F8 100%)", paddingBottom: "251px", paddingTop: "168px" }}>
      <Container maxWidth="lg" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box sx={{ marginBottom: "72px" }}>
          <Typography component="h1" sx={{ fontSize: "38px", lineHeight: "48px", fontWeight: "600", color: "#000" }}>KONA PLATE의<br />
            차별화된 서비스를 만나 보세요.</Typography>
        </Box>
        <Box className='service__cardwrap'>
          <Grid container rowSpacing={8} columnSpacing={3} className="service__cardmaingrid">
            {serviceCardData?.map((item, index) => (
              <Grid className='service__card__inner' item xs={6} md={6} key={index}>
                <ServiceCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className='service__btngrp' sx={{ display: "flex", justifyContent: "flex-end" }}>
          <div>Button</div>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <h1>Hello Mobile</h1>
      </Container>
    </Box>
  )
}

export default KonaPlateService