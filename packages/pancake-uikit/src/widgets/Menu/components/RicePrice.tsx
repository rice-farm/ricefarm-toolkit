import React from "react";
import styled from "styled-components";
import { RiceRoundIcon, TeslaSafeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  ricePriceUsd?: number;
  coin?: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const RicePrice: React.FC<Props> = ({ ricePriceUsd, coin }) => {
  const tokenAddress =
    coin === "TeslaSafe" ? "0x3504de9e61FDFf2Fc70f5cC8a6D1Ee493434C1Aa" : "0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861";
  const infoUrl = `https://pancakeswap.info/token/${tokenAddress}`;
  return ricePriceUsd ? (
    <PriceLink href={infoUrl} target="_blank">
      {coin === "TeslaSafe" ? <TeslaSafeRoundIcon width="24px" mr="8px" /> : <RiceRoundIcon width="24px" mr="8px" />}
      <Text color="textSubtle" bold>{`$${ricePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(RicePrice);
