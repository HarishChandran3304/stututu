import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import TurboLogoImg from "../../../assets/images/turbo.png";

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        text-black
        m-1
    `};
`;

const Image = styled.div`
    ${tw`
        m-3
        h-6
        md:h-9
        scale-150
    `};

    img {
        width: auto;
        height: 100%;
    }
`;

export function Logo() {
    return  <LogoContainer>
        <Image>
            <img src={TurboLogoImg} />
        </Image>
        <LogoText>Stututu</LogoText>
    </LogoContainer>
}