import React from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import Link from "next/link"

const FooterNew = () => {
  return (
    <Box sx={{ background: "#180034", padding: "33px 0" }}>
      <Container maxWidth="lg">
        <Box className='footer__gridwrp'>
          <Box className='footer__leftgrid'>
            <Box className='footer__lefttop'>
              <Box className='footer__lefttop__location'>
                <img className='footer__logo' src="/logo_kona plate.png" alt="Footer Logo" />
                <Typography component="p" sx={{ marginTop: "14px", marginBottom: "26px", fontSize: "12px", lineHeight: "19px", color: "#595959" }}>
                  8F, 3, Eunhaeng-ro, Yeongdeungpo-gu, Seoul, Republic of Korea.<br />
                  Tel : +82 2-2168-7500     FAX : +82 2-769-1670
                </Typography>
                <Typography className='footer__mobvisible' component="p" sx={{ fontSize: "12px", lineHeight: "15px", color: "#595959", marginTop: "23px" }}>
                  Copyright 2022. KONA I Co., Ltd. all rights reserved.
                </Typography>
              </Box>
              <Box>
                <Box className='footer_toplinkgroup'>
                  <a className='footer_toplinkitem' href="www.google.com">KONA PLATE 이용약관</a>
                  <a className='footer_toplinkitem' href="www.google.com">개인정보 처리방침</a>
                </Box>
                <Box className='footer__leftbottom footer__mobvisible' sx={{ marginTop: "20px" }}>
                  <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                    <img src="/ic_socialmedia-01.png" alt="" />
                  </a>
                  <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                    <img src="/ic_socialmedia-02.png" alt="" />
                  </a>
                  <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                    <img src="/ic_pdf 1.png" alt="" />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className='footer__leftbottom footer__pcvisible'>
              <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                <img src="/ic_socialmedia-01.png" alt="" />
              </a>
              <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                <img src="/ic_socialmedia-02.png" alt="" />
              </a>
              <a className='footer_leftbottomlinkitem' href="www.google.com" target="_blank">
                <img src="/ic_pdf 1.png" alt="" />
              </a>
            </Box>
          </Box>
          <Box className='footer__rightgrid footer__pcvisible'>
            <Box>
              <ul>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
                <li>
                  <Link href="/home">
                    개발자 센터
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box className='footer__copyrightgrid footer__pcvisible'>
          <Typography component="p" sx={{ fontSize: "12px", lineHeight: "15px", color: "#595959" }}>
            Copyright 2022. KONA I Co., Ltd. all rights reserved.
          </Typography>
          <Typography component="p" sx={{ fontSize: "12px", lineHeight: "15px", color: "#A7A7A7" }}>Famity Site +</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default FooterNew