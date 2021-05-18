import styled, { keyframes } from "styled-components";

const PulseAnimation = keyframes`
from{
    background-position: 0% 0%;
}to{
    background-position: -150% 0%;

}`;

const SkeletonWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, rgba(13, 28, 54, 0.1) 15%, rgba(250, 250, 250, 0.1) 50%, rgba(13, 28, 54, 0.2) 80%);
  background-size: 300% 300%;
  animation: ${PulseAnimation} 3s linear infinite;
`;

export const LoadingSkeleton = () => <SkeletonWrapper />;
