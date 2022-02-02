import petal1 from './graphics/petal-1.svg';
import petal2 from './graphics/petal-2.svg';
import petal3 from './graphics/petal-3.svg';
import petal4 from './graphics/petal-4.svg';

import styled, { keyframes } from "styled-components";

const petalFloatAnimation = randomY => keyframes`
  0% {
    left: 0;
    transform: rotate(0deg);
  }
  30% {
    left: 40% ;
    transform: rotate(60deg);
  }
  100% {
    left: 100%;
    transform: rotate(-360deg);
  }
`;

const PetalSvg = styled.svg`
  position: absolute;
  top: 40%;
  height: 50vmin;
  animation: ${ petalFloatAnimation() } infinite 2s linear;
  `;

export default function Petal() {

    const petalVersions = [ 'petal-1.svg', 'petal-2.svg', 'petal-3.svg', 'petal-4.svg', 'petal-5.svg' ];

    return <PetalSvg
        src = {petal1}
    > 
    </PetalSvg>;
}
