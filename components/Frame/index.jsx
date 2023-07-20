import React from "react";
import styled from "styled-components";
import { OrbitronNormalWhite24px, OrbitronNormalWhite23px, OrbitronNormalBlueJeans16px } from "../../styledMixins";


function Frame(props) {
  const { image, naviRevealsS1MpleFifthAnniversary, className } = props;

  return (
    <Frame1 className={`frame-35 ${className || ""}`}>
      <IMAGE className="image-13" src={image} alt="IMAGE" />
      <Date className="date-1">April 2, 2021</Date>
      <NAVIRevealsS1mpleFifthAnniversary className="navi-reveals-s1mple-fifth-anniversary">
        {naviRevealsS1MpleFifthAnniversary}
      </NAVIRevealsS1mpleFifthAnniversary>
    </Frame1>
  );
}

const Frame1 = styled.div`
  width: 312px;
  height: 321px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const IMAGE = styled.img`
  width: 312px;
  height: 189px;
  object-fit: cover;
`;

const Date = styled.div`
  ${OrbitronNormalBlueJeans16px}
  margin-top: 29px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const NAVIRevealsS1mpleFifthAnniversary = styled.p`
  ${OrbitronNormalWhite23px}
  width: 281px;
  min-height: 68px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: 34px;
`;

const T1UnveilPartnershipWithRazer = styled.p`
  ${OrbitronNormalWhite24px}

  .frame-35.frame-36  & {
    width: 283px;
  }
`;

const A1esportsSharesNewPicture = styled.div`
  ${OrbitronNormalWhite24px}

  .frame-35.frame-37  & {
    width: 302px;
  }
`;

const RXSecuresContentPartnershipWith = styled.p`
  ${OrbitronNormalWhite23px}

  .frame-35.frame-38  & {
    width: 268px;
  }
`;

export default Frame;
