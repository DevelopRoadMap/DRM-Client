import React from 'react';
import Name from '../../atoms/Name';
import Major from '../../atoms/Major';
import { Wrapper } from './Style';


const MainText = () => {
  return (
      <Wrapper>
        <Name/>
        <Major/>
      </Wrapper>
  );
};

export default MainText;