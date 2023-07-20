import React from "react";
import Frame from "../Frame";
import styled from "styled-components";
import {
  OrbitronNormalGunsmoke11px,
  OrbitronNormalWhite16px,
  OrbitronNormalMountainMist15px,
  OrbitronNormalWhite64px,
  OrbitronNormalBlueJeans16px,
  OrbitronNormalWhite18px,
} from "../../styledMixins";
import "./Desktop.css";

function Desktop(props) {
  const {
    frame1,
    futureOfEsports1,
    unleashTheNextGenerationOfGaming,
    loremIpsumDolorSi,
    exploreMore,
    viewOurTeam,
    image3,
    facebook,
    instagram,
    twitch,
    place,
    about1,
    team1,
    shop1,
    pages,
    text1,
    number,
    contactUs1,
    image5,
    futureOfEsports2,
    customizeYour,
    ownCharacter,
    sedUtPerspiciatis,
    image7,
    image8,
    image9,
    image10,
    futureOfEsports3,
    latestNews,
    articles,
    readMore,
    image12,
    date,
    esportsGroupTeams,
    loremIpsumDolorAm,
    menuItems,
    blog,
    contactUs2,
    about2,
    shop2,
    otherPages,
    styleguide,
    licenses,
    team2,
    changelog,
    frame1Props,
    frame2Props,
    frame3Props,
    frame4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop screen">
        <Frame1>
          <Frame2 style={{ backgroundImage: `url(${frame1})` }}>
            <OverlapGroup1>
              <Rectangle></Rectangle>
              <Frame3>
                <Frame4>
                  <Frame5>
                    <IMAGE src="/img/image-3.svg" alt="IMAGE" />
                    <FUTUREOFESPORTS>{futureOfEsports1}</FUTUREOFESPORTS>
                  </Frame5>
                  <OverlapGroup>
                    <IMAGE1 src="/img/image-2.svg" alt="IMAGE" />
                    <UnleashTheNextGenerationOfGaming>
                      {unleashTheNextGenerationOfGaming}
                    </UnleashTheNextGenerationOfGaming>
                  </OverlapGroup>
                  <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
                  <Frame6>
                    <Frame7>
                      <ExploreMore>{exploreMore}</ExploreMore>
                    </Frame7>
                    <ViewOurTeam>{viewOurTeam}</ViewOurTeam>
                  </Frame6>
                </Frame4>
                <IMAGE2 src={image3} alt="IMAGE" />
              </Frame3>
              <FACEBOOK>{facebook}</FACEBOOK>
              <INSTAGRAM>{instagram}</INSTAGRAM>
              <TWITCH>{twitch}</TWITCH>
              <Frame8>
                <IMAGE3 src="/img/image-4.svg" alt="IMAGE" />
                <Frame9>
                  <Place>{place}</Place>
                  <About>{about1}</About>
                  <Team>{team1}</Team>
                  <Shop>{shop1}</Shop>
                  <Frame10>
                    <Pages>{pages}</Pages>
                    <Text1>{text1}</Text1>
                  </Frame10>
                </Frame9>
                <Frame11>
                  <Frame12>
                    <Frame13>
                      <Number>{number}</Number>
                    </Frame13>
                  </Frame12>
                  <Frame14>
                    <ContactUs>{contactUs1}</ContactUs>
                  </Frame14>
                </Frame11>
              </Frame8>
            </OverlapGroup1>
          </Frame2>
          <Frame15>
            <Frame16>
              <IMAGE4 src={image5} alt="IMAGE" />
              <Frame17>
                <Frame18>
                  <IMAGE5 src="/img/image-11.svg" alt="IMAGE" />
                  <FUTUREOFESPORTS1>{futureOfEsports2}</FUTUREOFESPORTS1>
                </Frame18>
                <CustomizeYour>{customizeYour}</CustomizeYour>
                <OwnCharacter>{ownCharacter}</OwnCharacter>
                <SedUtPerspiciatis>{sedUtPerspiciatis}</SedUtPerspiciatis>
                <Frame19>
                  <Frame20>
                    <IMAGE6 src={image7} alt="IMAGE" />
                    <ImageContainer>
                      <IMAGE7 src={image8} alt="IMAGE" />
                      <IMAGE8 src={image9} alt="IMAGE" />
                      <IMAGE8 src={image10} alt="IMAGE" />
                    </ImageContainer>
                  </Frame20>
                </Frame19>
              </Frame17>
            </Frame16>
          </Frame15>
          <Frame21>
            <Frame22>
              <Frame23>
                <Frame24>
                  <IMAGE9 src="/img/image-12.svg" alt="IMAGE" />
                  <FUTUREOFESPORTS2>{futureOfEsports3}</FUTUREOFESPORTS2>
                </Frame24>
                <LatestNews>{latestNews}</LatestNews>
                <Articles>{articles}</Articles>
              </Frame23>
              <Frame25>
                <ReadMore>{readMore}</ReadMore>
              </Frame25>
            </Frame22>
            <Frame26>
              <Frame27>
                <IMAGE10 src={image12} alt="IMAGE" />
                <Date>{date}</Date>
                <EsportsGroupTeams>{esportsGroupTeams}</EsportsGroupTeams>
              </Frame27>
              <Frame28>
                <FrameContainer>
                  <Frame
                    image={frame1Props.image}
                    naviRevealsS1MpleFifthAnniversary={frame1Props.naviRevealsS1MpleFifthAnniversary}
                  />
                  <Frame
                    image={frame2Props.image}
                    naviRevealsS1MpleFifthAnniversary={frame2Props.naviRevealsS1MpleFifthAnniversary}
                    className={frame2Props.className}
                  />
                </FrameContainer>
                <FrameContainer>
                  <Frame
                    image={frame3Props.image}
                    naviRevealsS1MpleFifthAnniversary={frame3Props.naviRevealsS1MpleFifthAnniversary}
                    className={frame3Props.className}
                  />
                  <Frame
                    image={frame4Props.image}
                    naviRevealsS1MpleFifthAnniversary={frame4Props.naviRevealsS1MpleFifthAnniversary}
                    className={frame4Props.className}
                  />
                </FrameContainer>
              </Frame28>
            </Frame26>
          </Frame21>
          <Frame29>
            <Frame30>
              <Frame31>
                <Frame32>
                  <IMAGE3 src="/img/image-18.svg" alt="IMAGE" />
                  <LoremIpsumDolorAm>{loremIpsumDolorAm}</LoremIpsumDolorAm>
                </Frame32>
                <Frame33>
                  <MenuItems>{menuItems}</MenuItems>
                  <OverlapGroup2>
                    <Blog>{blog}</Blog>
                    <ContactUs1>{contactUs2}</ContactUs1>
                    <About1>{about2}</About1>
                    <Shop1>{shop2}</Shop1>
                  </OverlapGroup2>
                </Frame33>
                <Frame33>
                  <MenuItems>{otherPages}</MenuItems>
                  <OverlapGroup3>
                    <Styleguide>{styleguide}</Styleguide>
                    <Licenses>{licenses}</Licenses>
                    <Team1>{team2}</Team1>
                    <Changelog>{changelog}</Changelog>
                  </OverlapGroup3>
                </Frame33>
              </Frame31>
              <Frame34></Frame34>
            </Frame30>
          </Frame29>
        </Frame1>
      </div>
    </div>
  );
}

const Frame1 = styled.div`
  display: flex;
  position: relative;
  margin-left: -331px;
  flex-direction: column;
  width: 2101px;
  align-items: center;
`;

const Frame2 = styled.div`
  position: relative;
  width: 1440px;
  height: 1069px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  width: 1420px;
  height: 1069px;
  left: 20px;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 634px;
  height: 1069px;
  top: 0;
  left: 786px;
  background-color: var(--blue-jeans);
`;

const Frame3 = styled.div`
  position: absolute;
  height: 528px;
  top: 291px;
  left: 40px;
  display: flex;
  align-items: center;
  min-width: 1320px;
`;

const Frame4 = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 528px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  min-width: 660px;
  gap: 8px;
`;

const IMAGE = styled.img`
  width: 32px;
  height: 32px;
`;

const FUTUREOFESPORTS = styled.div`
  ${OrbitronNormalBlueJeans16px}
  width: 203px;
  margin-bottom: 6px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 656px;
  height: 258px;
  position: relative;
  margin-top: 13px;
`;

const IMAGE1 = styled.img`
  position: absolute;
  width: 434px;
  height: 16px;
  top: 168px;
  left: 219px;
`;

const UnleashTheNextGenerationOfGaming = styled.h1`
  position: absolute;
  width: 656px;
  top: 0;
  left: 0;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--white);
  font-size: 72px;
  letter-spacing: 0;
  line-height: 86px;
`;

const LoremIpsumDolorSi = styled.p`
  width: 615px;
  min-height: 56px;
  margin-top: 45px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--mountain-mist);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 28px;
`;

const Frame6 = styled.div`
  ${OrbitronNormalWhite18px}
  margin-top: 54px;
  display: flex;
  align-items: center;
  min-width: 660px;
  gap: 40px;
`;

const Frame7 = styled.div`
  height: 70px;
  display: flex;
  padding: 20px 34px;
  align-items: flex-start;
  min-width: 203px;
  background-color: var(--blue-jeans);
`;

const ExploreMore = styled.div`
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const ViewOurTeam = styled.div`
  width: 148px;
  margin-bottom: 2px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const IMAGE2 = styled.img`
  width: 660px;
  height: 518px;
  object-fit: cover;
`;

const FACEBOOK = styled.div`
  ${OrbitronNormalGunsmoke11px}
  position: absolute;
  width: 81px;
  top: 635px;
  left: -28px;
  transform: rotate(-90deg);
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const INSTAGRAM = styled.div`
  ${OrbitronNormalGunsmoke11px}
  position: absolute;
  width: 105px;
  top: 493px;
  left: -40px;
  transform: rotate(-90deg);
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const TWITCH = styled.div`
  position: absolute;
  width: 113px;
  top: 362px;
  left: -44px;
  transform: rotate(-90deg);
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--gunsmoke);
  font-size: 10px;
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const Frame8 = styled.div`
  position: absolute;
  height: 62px;
  top: 20px;
  left: 40px;
  display: flex;
  align-items: center;
  min-width: 1320px;
`;

const IMAGE3 = styled.img`
  width: 170px;
  height: 48px;
`;

const Frame9 = styled.div`
  margin-left: 132px;
  display: flex;
  padding: 0 89.8px;
  align-items: flex-start;
  min-width: 716px;
  gap: 60px;
`;

const Place = styled.div`
  width: 52px;
  margin-top: -1px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: #fac422;
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const About = styled.div`
  ${OrbitronNormalWhite16px}
  width: 56px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Team = styled.div`
  ${OrbitronNormalWhite16px}
  width: 54px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Shop = styled.div`
  ${OrbitronNormalWhite16px}
  width: 48px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Frame10 = styled.div`
  height: 26px;
  display: flex;
  align-items: flex-start;
  min-width: 85px;
  gap: 10px;
`;

const Pages = styled.div`
  ${OrbitronNormalWhite16px}
  width: 61px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  width: 14px;
  align-self: center;
  margin-bottom: 2px;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Frame11 = styled.div`
  margin-left: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 250px;
  gap: 40px;
`;

const Frame12 = styled.div`
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 32px;
  background-image: url(/img/image-5.svg);
  background-size: 100% 100%;
`;

const Frame13 = styled.div`
  height: 18px;
  margin-top: -8px;
  display: flex;
  padding: 0 6px;
  align-items: flex-start;
  min-width: 21px;
  background-color: var(--white);
  border-radius: 9px;
`;

const Number = styled.div`
  width: 9px;
  margin-top: -1px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: #141820;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const Frame14 = styled.div`
  height: 62px;
  display: flex;
  padding: 14px 30px;
  align-items: flex-start;
  min-width: 178px;
  border: 1px solid;
  border-color: var(--white);
`;

const ContactUs = styled.div`
  ${OrbitronNormalWhite18px}
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Frame15 = styled.div`
  position: relative;
  width: 1440px;
  height: 695px;
  background-color: #2a313c;
`;

const Frame16 = styled.div`
  position: relative;
  left: 60px;
  display: flex;
  align-items: flex-start;
  min-width: 1320px;
  gap: 128px;
`;

const IMAGE4 = styled.img`
  width: 596px;
  height: 695px;
  margin-top: -0.42px;
  object-fit: cover;
`;

const Frame17 = styled.div`
  width: 596px;
  align-self: center;
  margin-bottom: 0.02px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 529px;
`;

const Frame18 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 596px;
  gap: 8px;
`;

const IMAGE5 = styled.img`
  width: 32px;
  height: 32px;
  margin-top: -0.3px;
`;

const FUTUREOFESPORTS1 = styled.div`
  ${OrbitronNormalBlueJeans16px}
  width: 203px;
  align-self: center;
  margin-bottom: 6.59px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const CustomizeYour = styled.div`
  ${OrbitronNormalWhite64px}
  margin-top: 11px;
  letter-spacing: 0;
  line-height: 74px;
  white-space: nowrap;
`;

const LatestNews = styled.div`
  margin-top: 11px;
  letter-spacing: 0;
  line-height: 74px;
  white-space: nowrap;
`;

const OwnCharacter = styled.div`
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--white);
  font-size: 63px;
  letter-spacing: 0;
  line-height: 74px;
  white-space: nowrap;
`;

const SedUtPerspiciatis = styled.p`
  width: 561px;
  min-height: 120px;
  margin-top: 38px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: #dfdfdfcc;
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 30px;
`;

const Frame19 = styled.div`
  width: 596px;
  height: 125px;
  margin-top: 55px;
  display: flex;
  align-items: flex-start;
`;

const Frame20 = styled.div`
  width: 196px;
  margin-top: -0.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 125px;
  gap: 960px;
  background-color: #3b3d46;
  border-radius: 20px;
`;

const IMAGE6 = styled.img`
  width: 174px;
  height: 102px;
  margin-top: -1051px;
  margin-left: -160.5px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  align-self: flex-end;
  margin-right: -397px;
  display: flex;
  align-items: flex-start;
  min-width: 582px;
  gap: 30px;
`;

const IMAGE7 = styled.img`
  width: 174px;
  height: 103px;
  object-fit: cover;
`;

const IMAGE8 = styled.img`
  width: 174px;
  height: 102px;
  object-fit: cover;
`;

const Frame21 = styled.div`
  position: relative;
  width: 1320px;
  height: 1222px;
`;

const Frame22 = styled.div`
  position: absolute;
  height: 196px;
  top: 130px;
  left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 1320px;
  gap: 493px;
`;

const Frame23 = styled.div`
  ${OrbitronNormalWhite64px}
  width: 652px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 196px;
`;

const Frame24 = styled.div`
  display: flex;
  align-items: center;
  min-width: 652px;
  gap: 8px;
`;

const IMAGE9 = styled.img`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  margin-bottom: -0.39px;
`;

const FUTUREOFESPORTS2 = styled.div`
  ${OrbitronNormalBlueJeans16px}
  width: 203px;
  margin-bottom: 5.22px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Articles = styled.div`
  letter-spacing: 0;
  line-height: 74px;
  white-space: nowrap;
`;

const Frame25 = styled.div`
  height: 70px;
  margin-bottom: -0.39px;
  display: flex;
  padding: 20px 34px;
  align-items: flex-start;
  min-width: 175px;
  background-color: var(--blue-jeans);
`;

const ReadMore = styled.div`
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--white);
  font-size: 17px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const Frame26 = styled.div`
  position: absolute;
  height: 702px;
  top: 390px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 1320px;
  gap: 24px;
`;

const Frame27 = styled.div`
  width: 648px;
  height: 702px;
  display: flex;
  flex-direction: column;
  padding: 0.4px 0;
  align-items: flex-start;
`;

const IMAGE10 = styled.img`
  width: 648px;
  height: 510px;
  object-fit: cover;
`;

const Date = styled.div`
  margin-top: 53px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--blue-jeans);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

const EsportsGroupTeams = styled.p`
  width: 607px;
  min-height: 92px;
  margin-top: 28px;
  font-family: var(--font-family-orbitron);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  line-height: 46px;
`;

const Frame28 = styled.div`
  height: 682px;
  display: flex;
  align-items: flex-start;
  min-width: 648px;
  gap: 24px;
`;

const FrameContainer = styled.div`
  width: 312px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 682px;
  gap: 40px;
`;

const Frame29 = styled.div`
  position: relative;
  width: 1440px;
  height: 507px;
  background-color: #222730;
`;

const Frame30 = styled.div`
  position: relative;
  width: 1320px;
  top: 130px;
  left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 317px;
  gap: 48px;
`;

const Frame31 = styled.div`
  height: 202px;
  display: flex;
  align-items: flex-start;
  min-width: 1320px;
  gap: 150px;
`;

const Frame32 = styled.div`
  width: 294px;
  display: flex;
  flex-direction: column;
  padding: 0.4px 0;
  align-items: flex-start;
  min-height: 202px;
  gap: 34px;
`;

const LoremIpsumDolorAm = styled.p`
  ${OrbitronNormalMountainMist15px}
  width: 289px;
  min-height: 100px;
  letter-spacing: 0;
  line-height: 25px;
`;

const Frame33 = styled.div`
  width: 168px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 202px;
  gap: 23px;
`;

const MenuItems = styled.div`
  ${OrbitronNormalWhite18px}
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  ${OrbitronNormalMountainMist15px}
  width: 97px;
  height: 149px;
  position: relative;
`;

const Blog = styled.div`
  position: absolute;
  width: 40px;
  top: 37px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const ContactUs1 = styled.div`
  position: absolute;
  width: 97px;
  top: 111px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const About1 = styled.div`
  position: absolute;
  width: 52px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const Shop1 = styled.div`
  position: absolute;
  width: 46px;
  top: 74px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  ${OrbitronNormalMountainMist15px}
  width: 95px;
  height: 149px;
  position: relative;
`;

const Styleguide = styled.div`
  position: absolute;
  width: 93px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const Licenses = styled.div`
  position: absolute;
  width: 81px;
  top: 74px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const Team1 = styled.div`
  position: absolute;
  width: 50px;
  top: 111px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const Changelog = styled.div`
  position: absolute;
  width: 95px;
  top: 37px;
  left: 0;
  letter-spacing: 0;
  line-height: 37.5px;
  white-space: nowrap;
`;

const Frame34 = styled.div`
  width: 1320px;
  height: 67px;
`;

export default Desktop;
