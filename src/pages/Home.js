import React from 'react';
import Group9 from '../components/landing-page/Group9';
import Group53 from '../components/landing-page/Group53';
import ButtonCopy3 from '../components/landing-page/ButtonCopy3';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Museosansrounded500NormalGraniteGra1,
  Museosansrounded500NormalMetallicSe,
  Museosansrounded700NormalWhite15px,
  Museosansrounded500NormalGraniteGra,
  Museosansrounded900NormalBlack16px,
  Museosansrounded900NormalMetallicSe1,
  Museosansrounded900NormalMineShaft4,
  Museosansrounded900NormalMineShaft6,
  Museosansrounded300NormalCharlotte11,
  Museosansrounded300NormalCharlotte1,
  Museosansrounded900NormalCharlotte1,
  MyriadproRegularNormalCharlotte12px,
  Museosansrounded500NormalWhite15px,
  Museosansrounded900NormalMetallicSe,
  Museosansrounded700NormalMineShaft1,
} from '../styledMixins';
import './LandingPage.css';
import LogoClouds from '../components/LogoClouds';

function Home2(props) {
  const {
    logo,
    marketplace,
    management1,
    howItWorks1,
    signUp,
    slider,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    untitled1,
    eIphoneX1Copy,
    spanText7,
    spanText8,
    spanText9,
    stopWorryingAboutVacancy,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    shape6,
    shape6Copy,
    shape6Copy21,
    shape6Copy22,
    listYourBusinessOnOurMarketplace,
    spanText14,
    spanText15,
    spanText16,
    management2,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,

    spanText23,

    spanText25,

    spanText27,

    spanText29,

    spanText31,
    spanText32,

    spanText35,

    spanText37,

    spanText39,

    spanText41,

    spanText43,

    spanText45,
    shape6Copy3,
    eStatistics,
    howItWorks2,
    group76,
    overlapGroup,
    spanText46,
    spanText47,
    overlapGroup1,
    acceptBookings,
    overlapGroup2,
    spanText48,
    spanText49,
    poweredBy,
    eLine2,
    spanText50,
    spanText51,
    spanText52,
    losAngelesCounty,
    spanText53,
    spanText54,
    spanText55,
    spanText56,
    spanText57,
    spanText58,
    spanText59,
    spanText60,
    spanText61,
    spanText62,
    spanText63,
    spanText64,
    spanText65,
    spanText66,
    spanText67,
    spanText68,
    spanText69,
    spanText70,
    spanText71,
    spanText72,
    spanText73,
    spanText74,
    spanText75,
    spanText76,
    spanText77,
    spanText78,
    nationwide,
    spanText79,
    spanText80,
    spanText81,
    spanText82,
    spanText83,
    spanText84,
    spanText85,
    spanText86,
    spanText87,
    spanText88,
    spanText89,
    spanText90,
    spanText91,
    spanText92,
    spanText93,
    spanText94,
    spanText95,
    spanText96,
    spanText97,
    spanText98,
    spanText99,
    spanText100,
    spanText101,
    spanText102,
    spanText103,
    spanText104,
    poochMarketplace,
    features,
    spanText105,
    spanText106,
    spanText107,
    spanText108,
    spanText109,
    spanText110,
    spanText111,
    spanText112,
    spanText113,
    spanText114,
    spanText115,
    spanText116,
    spanText117,
    spanText118,
    spanText119,
    spanText120,
    spanText121,
    spanText122,
    spanText123,
    spanText124,
    spanText125,
    spanText126,
    spanText127,
    spanText128,
    spanText129,
    spanText130,
    spanText131,
    spanText132,
    spanText133,
    spanText134,
    spanText135,
    spanText136,
    spanText137,
    spanText138,
    spanText139,
    spanText140,
    spanText141,
    spanText142,
    investorRelations,
    x2022PoochTechnol,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <OverlapGroup7>
          <ColorFill2></ColorFill2>
          <Nav style={{ backgroundColor: '#077997', zIndex: 1 }}>
            <Logo src={logo} />
            <MARKETPLACE>{marketplace}</MARKETPLACE>
            <MANAGEMENT>{management1}</MANAGEMENT>
            <HOWITWORKS>{howItWorks1}</HOWITWORKS>
            <Group9 />
            <Link
              to="/signup"
              style={{
                height: '46px',
                marginLeft: '8%',
                marginTop: '2px',
                display: 'flex',
                padding: '9px 29.4px',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                minWidth: '108px',
                backgroundColor: '#ebfdff',
                borderRadius: '22.83px',
              }}
            >
              {/* <SignUp>{signUp}</SignUp> */}
            </Link>
            <Group53 />
          </Nav>
          <Slider
            style={{
              backgroundImage: `url(${slider})`,
            }}
          >
            <OverlapGroup>
              <MarketingAndManag>
                <span
                  className="museosansrounded-900-normal-metallic-seaweed-60px"
                  style={{ color: '#077997' }}
                >
                  {spanText1}
                </span>
                <span className="museosansrounded-900-normal-mine-shaft-60px">{spanText2}</span>
                <span
                  className="museosansrounded-900-normal-metallic-seaweed-60px"
                  style={{ color: '#077997' }}
                >
                  {spanText3}
                </span>
                <span className="museosansrounded-900-normal-mine-shaft-60px">{spanText4}</span>
                <span className="museosansrounded-900-normal-mine-shaft-60px">{spanText5}</span>
                <span className="museosansrounded-900-normal-mine-shaft-60px">{spanText6}</span>
              </MarketingAndManag>
              <ButtonCopy3 />
              <Untitled1 src={untitled1} />
            </OverlapGroup>
          </Slider>
          <Marketplace>
            <EIphoneX1Copy src={eIphoneX1Copy} />
            <FlexCol>
              <OverlapGroup2>
                <OverlapGroup1>
                  <ThePoochMarketplac>
                    <span className="museosansrounded-900-normal-metallic-seaweed-40px">
                      {spanText7}
                    </span>
                    <span className="museosansrounded-900-normal-mine-shaft-40px">{spanText8}</span>
                    <span className="museosansrounded-900-normal-mine-shaft-40px">{spanText9}</span>
                  </ThePoochMarketplac>
                  <STOPWORRYINGABOUTVACANCY>{stopWorryingAboutVacancy}</STOPWORRYINGABOUTVACANCY>
                  <DirectListingOnTh>
                    <span
                      className="museosansrounded-500-normal-granite-gray-20px"
                      style={{ fontSize: 16 }}
                    >
                      {spanText10}
                    </span>
                    <span
                      className="museosansrounded-500-normal-granite-gray-15px"
                      style={{ fontSize: 16 }}
                    >
                      {spanText11}
                    </span>
                    <span
                      className="museosansrounded-500-normal-granite-gray-15px"
                      style={{ fontSize: 16 }}
                    >
                      {spanText12}
                    </span>
                    <span
                      className="museosansrounded-500-normal-granite-gray-15px"
                      style={{ fontSize: 16 }}
                    >
                      {spanText13}
                    </span>
                  </DirectListingOnTh>
                  <Shape6 src={shape6} />
                </OverlapGroup1>
                <Shape6Copy src={shape6Copy} />
                <Shape6Copy2 src={shape6Copy21} />
                <Shape6Copy21 src={shape6Copy22} />
              </OverlapGroup2>
              <Button>
                <LISTYOURBUSINESSONOURMARKETPLACE>
                  {listYourBusinessOnOurMarketplace}
                </LISTYOURBUSINESSONOURMARKETPLACE>
              </Button>
            </FlexCol>
          </Marketplace>
          <OverlapGroup3>
            <BusinessManagementFeatures>
              <span className="museosansrounded-900-normal-mine-shaft-40px">{spanText14}</span>
              <span className="museosansrounded-900-normal-metallic-seaweed-40px">
                {spanText15}
              </span>
              <span className="museosansrounded-900-normal-metallic-seaweed-40px">
                {spanText16}
              </span>
            </BusinessManagementFeatures>
            <STOPWORRYINGABOUTVACANCY>{management2}</STOPWORRYINGABOUTVACANCY>
            <PoochProfileAndIn>
              <span
                className="museosansrounded-500-normal-granite-gray-15px"
                style={{ fontSize: 16 }}
              >
                {spanText17}
              </span>
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText18}
              </span>
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText19}
              </span>
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText20}
              </span>
              <span
                style={{ fontSize: 14 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText21}
              </span>
              <div style={{ height: 10 }} />
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText23}
              </span>
              <div style={{ height: 10 }} />
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText25}
              </span>
              <div style={{ height: 33 }} />
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText27}
              </span>
              <div style={{ height: 10 }} />
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText29}
              </span>
              <div style={{ height: 15 }} />
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText31}
              </span>
            </PoochProfileAndIn>
            <AnalyticsAndQuickB>
              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText32}
              </span>
              <div style={{ height: 22 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText35}
              </span>
              <div style={{ height: 22 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText37}
              </span>
              <div style={{ height: 17 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText39}
              </span>
              <div style={{ height: 20 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText41}
              </span>
              <div style={{ height: 19 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText43}
              </span>
              <div style={{ height: 17 }} />

              <span
                style={{ fontSize: 16 }}
                className="museosansrounded-500-normal-granite-gray-15px"
              >
                {spanText45}
              </span>
            </AnalyticsAndQuickB>
            <Shape6Copy3 src={shape6Copy3} />
            <Link
              to="/signup"
              style={{
                position: 'absolute',
                height: '68px',
                top: '658px',
                left: '1px',
                display: 'flex',
                padding: '10.9px 91.2px',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                minWidth: '247px',
                backgroundColor: '#95e8f7',
                borderRadius: '33.95px',
                boxShadow: '-9.184850467946473e-16px 15px 20px #00a3ce26',
                zIndex: 999,
              }}
            >
              <SIGNUP className="sign-up-1">SIGN UP</SIGNUP>
            </Link>
            <EStatistics src={eStatistics} />
          </OverlapGroup3>
          <OverlapGroup4>
            <HowItWorks>{howItWorks2}</HowItWorks>
            <Group76 src={group76} />
            <OverlapGroup5 style={{ backgroundImage: `url(${overlapGroup})` }}>
              <SignUpAndInputAListing>
                <span className="museosansrounded-700-normal-mine-shaft-18px">{spanText46}</span>
                <span className="museosansrounded-700-normal-mine-shaft-18px">{spanText47}</span>
              </SignUpAndInputAListing>
            </OverlapGroup5>
            <OverlapGroup11 style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <SignUpAndInputAListing>{acceptBookings}</SignUpAndInputAListing>
            </OverlapGroup11>
            <OverlapGroup21 style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <SignUpAndInputAListing>
                <span className="museosansrounded-700-normal-mine-shaft-18px">{spanText48}</span>
                <span className="museosansrounded-700-normal-mine-shaft-18px">{spanText49}</span>
              </SignUpAndInputAListing>
            </OverlapGroup21>
            <Link
              to="/signup"
              style={{
                position: 'absolute',
                height: '68px',
                top: '849px',
                left: '1837px',
                display: 'flex',
                padding: '10.9px 91.2px',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                minWidth: '247px',
                backgroundColor: '#95e8f7',
                borderRadius: '33.95px',
                boxShadow: '-9.184850467946473e-16px 15px 20px #00a3ce26',
              }}
            >
              <SIGNUP className="sign-up-1">SIGN UP</SIGNUP>
            </Link>
          </OverlapGroup4>
          <Powered>
            <POWEREDBY>{poweredBy}</POWEREDBY>
            <ELine2 src={eLine2} />
            <LogoClouds />
          </Powered>
          <Footer>
            <FlexCol3>
              <GroupContainer>
                <OverlapGroup6>
                  <EShape1670Copy src={'/landing-page/poochFolio.svg'} />
                  <OverlapGroup51>
                    <Address>
                      <span className="museosansrounded-300-normal-charlotte-15px">
                        {spanText50}
                      </span>
                      <span className="museosansrounded-300-normal-charlotte-15px">
                        {spanText51}
                      </span>
                      <span className="museosansrounded-300-normal-charlotte-15px">
                        {spanText52}
                      </span>
                    </Address>
                    <OverlapGroup8>
                      <LOSANGELESCOUNTY>{losAngelesCounty}</LOSANGELESCOUNTY>
                      <Rectangle1046></Rectangle1046>
                      <VeniceCAS>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText53}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText54}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText55}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText56}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText57}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText58}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText59}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText60}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText61}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText62}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText63}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText64}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText65}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText66}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText67}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText68}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText69}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText70}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText71}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText72}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText73}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText74}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText75}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText76}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText77}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText78}
                        </span>
                      </VeniceCAS>
                    </OverlapGroup8>
                    <OverlapGroup12>
                      <NATIONWIDE>{nationwide}</NATIONWIDE>
                      <LosAngelesCA>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText79}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText80}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText81}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText82}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText83}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText84}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText85}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText86}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText87}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText88}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText89}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText90}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText91}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText92}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText93}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText94}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText95}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText96}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText97}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText98}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText99}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText100}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText101}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText102}
                        </span>
                        <span className="myriadpro-regular-normal-charlotte-12px">
                          {spanText103}
                        </span>
                        <span className="museosansrounded-300-normal-charlotte-12px">
                          {spanText104}
                        </span>
                      </LosAngelesCA>
                      {/* <Rectangle1046></Rectangle1046> */}
                    </OverlapGroup12>
                    <PoochMarketplace>{poochMarketplace}</PoochMarketplace>
                    <EAppsStore src={'/landing-page/apps-store@3x.webp'} />
                    <EGooglePlay src={'/landing-page/google-play@3x.webp'} />
                  </OverlapGroup51>
                </OverlapGroup6>
                <Group7Copy2>
                  <OverlapGroup22>
                    <NATIONWIDE>{features}</NATIONWIDE>
                    <ListOnThePooc>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText105}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText106}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText107}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText108}
                      </span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText109}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText110}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText111}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText112}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText113}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText114}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText115}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText116}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText117}
                      </span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText118}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText119}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText120}
                      </span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText121}
                      </span>
                      <span className="myriadpro-regular-normal-charlotte-12px">{spanText122}</span>
                      <span className="museosansrounded-300-normal-charlotte-12px">
                        {spanText123}
                      </span>
                    </ListOnThePooc>
                    <Rectangle1046></Rectangle1046>
                  </OverlapGroup22>
                  <PayrollAndEmpl>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText124}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText125}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText126}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText127}
                    </span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText128}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText129}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText130}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText131}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText132}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText133}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText134}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText135}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText136}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText137}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText138}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText139}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText140}
                    </span>
                    <span className="myriadpro-regular-normal-charlotte-12px">{spanText141}</span>
                    <span className="museosansrounded-300-normal-charlotte-12px">
                      {spanText142}
                    </span>
                  </PayrollAndEmpl>
                </Group7Copy2>
              </GroupContainer>
              <FlexRow>
                <InvestorRelations>{investorRelations}</InvestorRelations>
                <X2022POOCHTECHNOL>{x2022PoochTechnol}</X2022POOCHTECHNOL>
              </FlexRow>
            </FlexCol3>
          </Footer>
        </OverlapGroup7>
      </div>
    </div>
  );
}

const OverlapGroup7 = styled.div`
  width: 100%;
  height: 7983px;
  position: relative;
  // margin-left: -1161px;
`;

const ColorFill2 = styled.div`
  position: absolute;
  width: 7945px;
  height: 7983px;
  top: 0;
  left: 131px;
  background-color: var(--white);
`;

const Nav = styled.div`
  ${Museosansrounded500NormalWhite15px}
  position: absolute;
  height: 130px;
  top: 0;
  left: 1144px;
  display: flex;
  padding: 25px 246px;
  align-items: flex-start;
  min-width: 1634px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Logo = styled.img`
  width: 142px;
  height: 63px;
  object-fit: cover;
`;

const MARKETPLACE = styled.div`
  min-height: 20px;
  margin-left: 80px;
  margin-top: 10.98px;
  min-width: 104px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

const MANAGEMENT = styled.div`
  min-height: 20px;
  margin-left: 65px;
  margin-top: 10.98px;
  min-width: 105px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

const HOWITWORKS = styled.div`
  min-height: 20px;
  margin-left: 84px;
  margin-top: 10.98px;
  min-width: 113px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

const SignUp = styled.div`
  ${Museosansrounded500NormalMetallicSe}
  min-height: 20px;
  min-width: 54px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

const Slider = styled.div`
  position: absolute;
  height: 905px;
  top: 110px;
  left: 1159px;
  display: flex;
  padding: 68px 133.6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1402px;
  background-size: contain;
  // background-position: 50% 50%;
  background-repeat: no-repeat;
  z-index: 900;
  width: 1800;
  padding-right: 200px;
`;

const OverlapGroup = styled.div`
  width: 1337px;
  height: 874px;
  position: relative;
`;
const Untitled1 = styled.img`
  position: absolute;
  width: 761px;
  height: 626px;
  top: 0;
  left: 476px;
  object-fit: cover;
`;

const MarketingAndManag = styled.h1`
  ${Museosansrounded900NormalMineShaft6}
  position: absolute;
  width: 559px;
  height: 466px;
  top: 125px;
  left: 0;
  letter-spacing: 0;
  line-height: 72px;
`;

const Marketplace = styled.div`
  position: absolute;
  height: 745px;
  top: 965px;
  left: 1311px;
  display: flex;
  align-items: flex-start;
  min-width: 1341px;
`;

const EIphoneX1Copy = styled.img`
  width: 654px;
  height: 795px;
  margin-top: 0;
  object-fit: contain;
`;
const SIGNUP = styled.div`
  ${Museosansrounded900NormalMetallicSe}
  min-height: 20px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 47.2px;
  white-space: nowrap;
`;

const FlexCol = styled.div`
  width: 585px;
  align-self: center;
  margin-left: 32px;
  margin-top: 88.35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 432px;
`;

const OverlapGroup2 = styled.div`
  width: 585px;
  height: 333px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 585px;
  height: 329px;
  top: 0;
  left: 0;
`;

const ThePoochMarketplac = styled.div`
  ${Museosansrounded900NormalMineShaft4}
  position: absolute;
  width: 585px;
  height: 164px;
  top: 25px;
  left: 0;
  letter-spacing: 0;
  line-height: 48px;
`;

const BusinessManagementFeatures = styled.div`
  ${Museosansrounded900NormalMetallicSe1}
  position: absolute;
  width: 585px;
  height: 164px;
  top: 25px;
  left: 0;
  letter-spacing: 0;
  line-height: 48px;
`;

const STOPWORRYINGABOUTVACANCY = styled.div`
  ${Museosansrounded900NormalBlack16px}
  position: absolute;
  width: 585px;
  height: 79px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 19.2px;
`;

const DirectListingOnTh = styled.p`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 429px;
  height: 188px;
  top: 141px;
  left: 49px;
  letter-spacing: 0;
  line-height: 50px;
`;

const Shape6 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 155px;
  left: 2px;
  object-fit: cover;
`;

const Shape6Copy = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 207px;
  left: 2px;
  object-fit: cover;
`;

const Shape6Copy2 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 257px;
  left: 2px;
  object-fit: cover;
`;

const Shape6Copy21 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 309px;
  left: 2px;
  object-fit: cover;
`;

const Button = styled.div`
  height: 68px;
  margin-top: 31px;
  margin-left: 2.62px;
  display: flex;
  padding: 10.9px 68.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 461px;
  background-color: var(--anakiwa);
  border-radius: 33.95px;
  box-shadow: -9.184850467946473e-16px 15px 20px #00a3ce26;
`;

const LISTYOURBUSINESSONOURMARKETPLACE = styled.p`
  ${Museosansrounded900NormalMetallicSe}
  min-height: 20px;
  min-width: 324px;
  text-align: center;
  letter-spacing: 0;
  line-height: 47.2px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1188px;
  height: 726px;
  top: 1820px;
  left: 1390px;
`;

const PoochProfileAndIn = styled.p`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 237px;
  height: 515px;
  top: 163px;
  left: 33px;
  letter-spacing: 0;
  line-height: 22px;
`;

const AnalyticsAndQuickB = styled.p`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 223px;
  height: 516px;
  top: 163px;
  left: 331px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Shape6Copy3 = styled.img`
  position: absolute;
  width: 314px;
  height: 400px;
  top: 164px;
  left: 0;
  object-fit: cover;
`;

const EStatistics = styled.img`
  position: absolute;
  width: 669px;
  height: 675px;
  top: 31px;
  left: 519px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 3709px;
  height: 1647px;
  top: 2308px;
  left: -1px;
`;

const HowItWorks = styled.div`
  ${Museosansrounded900NormalMineShaft4}
  position: absolute;
  width: 585px;
  height: 164px;
  top: 427px;
  left: 1670px;
  text-align: center;
  letter-spacing: 0;
  line-height: 48px;
`;

const Group76 = styled.img`
  position: absolute;
  width: 3709px;
  height: 1647px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  height: 316px;
  top: 532px;
  left: 1346px;
  display: flex;
  padding: 82.1px 9.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SignUpAndInputAListing = styled.div`
  ${Museosansrounded700NormalMineShaft1}
  width: 326px;
  height: 75px;
  text-align: center;
  letter-spacing: 0;
  line-height: 21.6px;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  height: 307px;
  top: 541px;
  left: 1732px;
  display: flex;
  padding: 73.1px 8.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  height: 311px;
  top: 537px;
  left: 2121px;
  display: flex;
  padding: 82.1px 9.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Powered = styled.div`
  position: absolute;
  width: 1108px;
  top: 3359px;
  left: 1406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 208px;
`;

const POWEREDBY = styled.div`
  ${Museosansrounded500NormalGraniteGra1}
  margin-top: -43px;
  margin-bottom: -84px;
  min-height: 16px;
  margin-left: 6.4px;
  min-width: 98px;
  text-align: center;
  letter-spacing: 2.4px;
  line-height: 100px;
  white-space: nowrap;
`;

const ELine2 = styled.img`
  width: 1108px;
  height: 1px;
  margin-top: 32px;
  margin-left: 0;
  object-fit: cover;
`;

const Footer = styled.div`
  position: absolute;
  height: 904px;
  top: 3674px;
  left: 1159px;
  display: flex;
  padding: 107.1px 73.6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1602px;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #077997;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const FlexCol3 = styled.div`
  width: 1147px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 493px;
  // left: -200px;
`;

const GroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1147px;
  // left: -200px;
`;

const OverlapGroup6 = styled.div`
  width: 624px;
  height: 410px;
  position: relative;
  left: -200px;
`;

const EShape1670Copy = styled.img`
  position: absolute;
  width: 142px;
  height: 63px;
  top: 8px;
  left: 1px;
  object-fit: cover;
`;

const OverlapGroup51 = styled.div`
  position: absolute;
  width: 624px;
  height: 410px;
  top: 0;
  // left: -200px;
`;

const Address = styled.p`
  ${Museosansrounded300NormalCharlotte11}
  position: absolute;
  width: 254px;
  height: 163px;
  top: 114px;
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 254px;
  height: 410px;
  top: 0;
  left: 205px;
`;

const LOSANGELESCOUNTY = styled.div`
  ${Museosansrounded700NormalWhite15px}
  position: absolute;
  width: 254px;
  height: 163px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
`;

const Rectangle1046 = styled.div`
  position: absolute;
  width: 53px;
  height: 3px;
  top: 29px;
  left: 0;
  background-color: var(--anakiwa);
`;

const VeniceCAS = styled.p`
  ${MyriadproRegularNormalCharlotte12px}
  position: absolute;
  width: 197px;
  height: 357px;
  top: 53px;
  left: 2px;
  letter-spacing: 0;
  line-height: 12px;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  width: 175px;
  height: 394px;
  top: 0;
  left: 449px;
`;

const NATIONWIDE = styled.div`
  ${Museosansrounded700NormalWhite15px}
  position: absolute;
  width: 167px;
  height: 61px;
  top: 0;
  left: 200;
  letter-spacing: 0;
  line-height: 18px;
`;

const LosAngelesCA = styled.p`
  ${MyriadproRegularNormalCharlotte12px}
  position: absolute;
  width: 173px;
  height: 341px;
  top: 53px;
  left: 2px;
  letter-spacing: 0;
  line-height: 12px;
`;

const PoochMarketplace = styled.div`
  ${Museosansrounded900NormalCharlotte1}
  position: absolute;
  width: 254px;
  height: 163px;
  top: 209px;
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
`;

const EAppsStore = styled.img`
  position: absolute;
  width: 132px;
  height: 44px;
  top: 244px;
  left: 1px;
  object-fit: cover;
`;

const EGooglePlay = styled.img`
  position: absolute;
  width: 132px;
  height: 44px;
  top: 300px;
  left: 1px;
  object-fit: cover;
`;

const Group7Copy2 = styled.div`
  height: 370px;
  margin-left: 34px;
  margin-top: 1.5px;
  display: flex;
  align-items: flex-start;
  min-width: 490px;
`;

const OverlapGroup22 = styled.div`
  width: 202px;
  height: 373px;
  position: relative;
  margin-top: -1.5px;
  left: -150px;
`;

const ListOnThePooc = styled.p`
  ${MyriadproRegularNormalCharlotte12px}
  position: absolute;
  width: 200px;
  height: 320px;
  top: 53px;
  letter-spacing: 0;
  line-height: 12px;
`;

const PayrollAndEmpl = styled.p`
  ${MyriadproRegularNormalCharlotte12px}
  width: 214px;
  height: 281px;
  align-self: center;
  margin-left: -100px;
  margin-top: 15.29px;
  letter-spacing: 0;
  line-height: 12px;
`;

const FlexRow = styled.div`
  ${Museosansrounded300NormalCharlotte1}
  height: 51px;
  position: relative;
  margin-top: 32px;
  display: flex;
  align-items: flex-end;
  min-width: 1142px;
`;

const InvestorRelations = styled.p`
  width: 312px;
  height: 50px;
  letter-spacing: 0;
  line-height: 14.4px;
`;

const X2022POOCHTECHNOL = styled.p`
  width: 378px;
  height: 50px;
  margin-left: 72px;
  text-align: center;
  letter-spacing: 0;
  line-height: 14.4px;
`;

export default Home2;
