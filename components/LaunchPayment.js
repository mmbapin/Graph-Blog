import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import LaunchDayItem from './LaunchDayItem';

const LaunchPayment = () => {
  const launchDayCount = [
    {
      day: "01",
      title: "계약 체결",
      description: "플랫폼 온보딩에 필요한 조건을 협의하고 계약을 체결합니다."
    },
    {
      day: "15",
      title: "시나리오 확정",
      description: "고객사 시나리오에 따라 API 이용 범위와 서비스 정책을 확정합니다."
    },
    {
      day: "30",
      title: "API 연동",
      description: "네트워크 연동 및 API 개발 및 테스트를 진행합니다."
    },
    {
      day: "45",
      title: "카드 상품 설계",
      description: "카드 디자인, 혜택, 배송 수단을 결정합니다."
    },
    {
      day: "75",
      title: "통합 테스트",
      description: "API 결제 통합테스트를 통해 기능을 점검합니다."
    },
    {
      day: "90",
      title: "서비스 출시",
      description: "고객을 맞이할 준비가 완료되었습니다!"
    }
  ]
  return (
    <Box sx={{ marginTop: "266px", paddingBottom: "220px" }}>
      <Container maxWidth="lg">
        <Box className='launchpayment__gridwrap'>
          <Box className='launchpayment__leftitem'>
            <Box>
              <Typography component="h1" sx={{ fontSize: "38px", lineHeight: "48px", fontWeight: "600", color: "#000", marginBottom: "20px" }}>
                90일안에<br />
                결제 서비스를 런칭하세요
              </Typography>
              <Typography component="p" sx={{ fontSize: "18px", lineHeight: "26px", fontWeight: "400", color: "#000", marginBottom: "50px" }}>
                복잡한 라이선스 취득, 초기투자 비용 없이<br />
                나만의 결제 수단을 출시 할 수 있습니다.
              </Typography>
              <Box>Buton</Box>
            </Box>
            <Box className='launchpayment__imgwrp'>
              <img className='launch__image' src="/launchpayment.png" alt="Launch Image" />
            </Box>
          </Box>
          <Box className='launchpayment__rightitem' sx={{ paddingTop: "100px", display: { xs: "none", sm: "block" } }}>
            {launchDayCount?.map((item, index) => (
              <LaunchDayItem item={item} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LaunchPayment