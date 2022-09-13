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
// import checkmark from '../assessts/images/blue-check.png'
function Home1(props) {

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
   
    eStatistics,
    eStatistics1,
    howItWorks2,

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

    spanText54,
 
    spanText56,

    spanText58,

    spanText60,
 
    spanText62,
  
    spanText64,
  
    spanText66,
  
    spanText68,
   
    spanText70,
  
    spanText72,

    spanText74,

    spanText76,

    spanText78,
    nationwide,

    spanText80,

    spanText82,

    spanText84,

    spanText86,

    spanText88,
  
    spanText90,

    spanText92,

    spanText94,
 
    spanText96,
 
    spanText98,

    spanText100,
  
    spanText102,
 
    spanText104,
    poochMarketplace,
    features,
   
    spanText106,
  spanText108,

    spanText111,
   
    spanText113,
    spanText115,
    spanText117,
    spanText118,
    spanText120,
    spanText123,
    spanText125,
    spanText127,
    spanText130,
    spanText132,
    spanText134,
    spanText136,
   
    spanText138,
  
    spanText140,
  
    spanText142,
    investorRelations,
    x2022PoochTechnol,
  } = props;

  return (
    <div className="landing-page screen" style={{ backgroundColor: 'black' }}>
      <OverlapGroup7>
        <ColorFill2></ColorFill2>
        <Nav style={{ backgroundColor: '#077997', zIndex: 1, position: 'sticky' }}>
          <Logo src={logo} />
          <Link
            to="landingpage/marketplace"
            style={{
              minHeight: '20px',
              marginTop: '10.98px',
              minWidth: '104px',
              letterSpacing: 0,
              lineHeight: '30.4px',
              whiteSpace: 'nowrap',
            }}
          >
            {marketplace}
          </Link>
          <MANAGEMENT>{management1}</MANAGEMENT>
          <HOWITWORKS>{howItWorks1}</HOWITWORKS>
          <Group9 />
          <Link
            to="sign-up/signup"
            style={{
              height: '46px',
              marginLeft: '16px',
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
            <SignUp>{signUp}</SignUp>
          </Link>
          <Group53 />
        </Nav>
        <Slider
          style={{
            backgroundImage: `url(${slider})`,
            ZIndex: 999,
          }}
        >
          <OverlapGroup>
            <MarketingAndManag>
              <span
                className="museosansrounded-900-normal-metallic-seaweed-60px"
                style={{ color: '#077997', fontSize: 53 }}
              >
                {spanText1}
              </span>
              <span
                className="museosansrounded-900-normal-mine-shaft-60px"
                style={{ fontSize: 53 }}
              >
                {spanText2}
              </span>
              <span
                className="museosansrounded-900-normal-metallic-seaweed-60px"
                style={{ color: '#077997', fontSize: 53 }}
              >
                {spanText3}
              </span>
              <span
                className="museosansrounded-900-normal-mine-shaft-60px"
                style={{ fontSize: 53 }}
              >
                {spanText4}
              </span>
              <span
                className="museosansrounded-900-normal-mine-shaft-60px"
                style={{ fontSize: 53 }}
              >
                {spanText5}
              </span>
              <span
                className="museosansrounded-900-normal-mine-shaft-60px"
                style={{ fontSize: 53 }}
              >
                {spanText6}
              </span>
            </MarketingAndManag>
            <ButtonCopy3 />
            <Untitled1 src={untitled1} />
          </OverlapGroup>
        </Slider>
        <Marketplace id="marketplace">
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
        <div
          style={{ position: 'relative', marginBottom: 100, height: 900, backgroundColor: 'white' }}
          id="management"
        >
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
            {/* <AnalyticsAndQuickB>
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
            </PoochProfileAndIn> */}

            {/* <Shape6Copy3 src={shape6Copy3} /> */}
            <Link
              to="/sign-up/signup"
              style={{
                position: 'absolute',
                height: '68px',
                top: '658px',
                marginLeft: '7%',
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
            <EStatistics1 src={eStatistics1} />
            <EStatistics src={eStatistics} />
          </OverlapGroup3>
        </div>
        <OverlapGroup4 id="works">
          <HowItWorks>{howItWorks2}</HowItWorks>
          {/* <Group76 src={group76} /> */}
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
            to="/sign-up/signup"
            style={{
              position: 'absolute',
              height: '68px',
              top: '849px',
              left: '40%',
              display: 'flex',
              padding: '10.9px 91.2px',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              minWidth: '247px',
              backgroundColor: '#95e8f7',
              borderRadius: '33.95px',
              boxShadow: '-9.184850467946473e-16px 15px 20px #00a3ce26',
              zIndex: 1,
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
                    <span className="museosansrounded-300-normal-charlotte-15px">{spanText50}</span>
                    <span className="museosansrounded-300-normal-charlotte-15px">{spanText51}</span>
                    <span className="museosansrounded-300-normal-charlotte-15px">{spanText52}</span>
                  </Address>
                  <OverlapGroup8>
                    <LOSANGELESCOUNTY>{losAngelesCounty}</LOSANGELESCOUNTY>
                    <Rectangle1046></Rectangle1046>
                    <VeniceCAS>
                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.1,
                        }}
                      >
                        {spanText54}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText56}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText58}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText60}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText62}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText64}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText66}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText68}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText70}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText72}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText74}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText76}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-16px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText78}
                      </span>
                    </VeniceCAS>
                  </OverlapGroup8>
                  <OverlapGroup12>
                    <NATIONWIDE>{nationwide}</NATIONWIDE>
                    <LosAngelesCA>
                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText80}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText82}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText84}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText86}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText88}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText90}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText92}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText94}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText96}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText98}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText100}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {spanText102}
                      </span>

                      <span
                        className="museosansrounded-300-normal-charlotte-12px"
                        style={{
                          fontSize: 14,
                          paddingnBottom: 40,
                          marginTop: 10,
                          lineHeight: 1.3,
                        }}
                      >
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
                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText106}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText108}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText111}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText113}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText115}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText117}
                    </span>
                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText118}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText120}
                    </span>

                    <span
                      className="museosansrounded-300-normal-charlotte-12px"
                      style={{
                        fontSize: 14,
                        paddingnBottom: 40,
                        marginTop: 10,
                        lineHeight: 1.3,
                      }}
                    >
                      {spanText123}
                    </span>
                  </ListOnThePooc>
                  <Rectangle1046></Rectangle1046>
                </OverlapGroup22>
                <PayrollAndEmpl>
                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText125}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText127}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText130}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText132}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText134}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText136}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText138}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {spanText140}
                  </span>

                  <span
                    className="museosansrounded-300-normal-charlotte-12px"
                    style={{
                      fontSize: 14,
                      paddingnBottom: 40,
                      marginTop: 10,
                      lineHeight: 1.3,
                    }}
                  >
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
  );
}

const OverlapGroup7 = styled.div`
  // width: 8076px;
  // height: 7983px;
width:100%;
  // margin-left: -1161px;
  margin-left: auto;
  margin-right: auto;
  background-color:white;
`;

const ColorFill2 = styled.div`
  // position: absolute;
  // width: 100%
  // height: 7983px;
  top: 0;
  // left: 131px;
  background-color: white;
`;

const Nav = styled.div`
  ${Museosansrounded500NormalWhite15px}
  position: sticky;
  height: 130px;
  top: 0px;
  left: 0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  // left: 1144px;
  display: flex;
  // padding: 25px 246px;
  align-items: center;
  // min-width: 1634px;
  background-size: cover;
  background-position: 50% 50%;
  // width: 100%;
  padding-right:200px
`;

const Logo = styled.img`
  width: 142px;
  height: 63px;
  object-fit: cover;
  margin-left: 8%;
  margin-right:12%
`;


const MANAGEMENT = styled.div`
  min-height: 20px;
  padding-left: 12%;
  margin-top: 10.98px;
  min-width: 105px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

const HOWITWORKS = styled.div`
  min-height: 20px;
 padding-left: 12%;
 
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
  marginLeft:8%;

`;

  const Slider = styled.div`
    position: relative;
    height: 1205px;
    top: 0px;
    // left: 1179px;
    left:0;
    display: flex;
    padding-top: 68px 
    padding-left:130px
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
object-fit:contain;
    // width: 1950;
    padding-right: 200px;

  `;

  const OverlapGroup = styled.div`
    width: 100%;
    height: 874px;
    position: relative;
  `;
  const Untitled1 = styled.img`
  position: absolute;
  width: 100%
  height: 626px;
  top: 50px;
  left: 60%;
  object-fit: cover;
`;

const MarketingAndManag = styled.h1`
  ${Museosansrounded900NormalMineShaft6}
  position: absolute;
  width: 559px;
  height: 466px;
  top: 125px;
  left: 15%;
  letter-spacing: 0;
  line-height: 72px;
`;


const Marketplace = styled.div`
  position: relative;
  height: 845px;
  top: 15px;
  // left: 8%;
  display: flex;
  align-items: flex-start;
  min-width: 100%;
  background-color:white;
  padding-left:9%;

  justify-content:flex-start
  ;
  margin-top:20px;
  
`;

const EIphoneX1Copy = styled.img`
  width: 654px;
  height: 795px;
  margin-top: 0;
  object-fit: contain;
  margin-right:100px;
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
  width: 100%;
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
  padding-left: 0;
  letter-spacing: 0;
  line-height: 48px;
`;

const STOPWORRYINGABOUTVACANCY = styled.div`
  ${Museosansrounded900NormalBlack16px}
  position: absolute;
  width: 100%;
  height: 79px;
  top: 0;
  // left: 16%;
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
  width: 100%;
  height: 726px;
  top: 0px;
 padding-left: 14%;
  background-color:white;
  display:flex;
  padding-bottom:100px
`;




const EStatistics = styled.img`
  position: absolute;
  width: 669px;
  height: 675px;
  top: 31px;
  left: 50%;
  object-fit: cover;
`;

const EStatistics1 = styled.img`
  position: absolute;
  width: 499px;
  height: 395px;
  top: 120px;
 
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
top: -560px;
  left: -1px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
`;

const HowItWorks = styled.div`
  ${Museosansrounded900NormalMineShaft4}
  position: absolute;
  width: 100%;
  height: 164px;
  top: 427px;
  justify-content: center;
  text-align: center;
  letter-spacing: 0;
  line-height: 48px;
  background-color: white;
`;


const OverlapGroup5 = styled.div`
  position: absolute;
  height: 316px;
  top: 532px;
  left: 8%;
  display: flex;
  padding: 82.1px 9.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
  background-color: white;
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
  left: 36%;
  display: flex;
  padding: 73.1px 8.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
  background-color: white;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  height: 311px;
  top: 537px;
  left: 64%;
  display: flex;
  padding: 82.1px 9.3px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 454px;
  background-size: cover;
  background-position: 50% 50%;
  background-color: white;
`;

const Powered = styled.div`
  position: absolute;
  width: 100%;
  top: 3659px;
  // left: 1406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 208px;
  background-color: white;
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
  height: 704px;
  top: 3874px;
  // left: 1159px;
  display: flex;
  padding: 107.1px 73.6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 100%;
  background-size: cover;
  // background-position: 50% 50%;
  background-color: #077997;
  border-top-right-radius:20px;
  border-top-left-radius:20px;
`;

const FlexCol3 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 510px;
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

const VeniceCAS = styled.div`
  ${MyriadproRegularNormalCharlotte12px}
  position: absolute;
  width: 197px;
  height: 457px;
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
  left:-150px;
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
  margin-left:-100px;
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

export default Home1;