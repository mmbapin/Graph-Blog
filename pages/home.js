import React from 'react';
import KonaPlateService from '../components/KonaPlateService';
import FintechIndustry from '../components/FintechIndustry';
import FooterNew from '../components/FooterNew';
import CardCertification from '../components/CardCertification';
import LaunchPayment from '../components/LaunchPayment';


const home = () => {
  return (
    <div>
      <KonaPlateService />
      <LaunchPayment />
      <FintechIndustry />
      <CardCertification />
      <FooterNew />
    </div>
  )
}

export default home