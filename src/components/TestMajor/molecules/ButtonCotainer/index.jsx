import React from 'react';
import { TestMajorButton } from '../../atoms/Button/style';
import { Wrapper } from './style';


const ButtonContainer = () => {
  return (
      <Wrapper>
        <TestMajorButton>네</TestMajorButton>
        <TestMajorButton>아니오</TestMajorButton>
      </Wrapper>
  );
};

export default ButtonContainer;