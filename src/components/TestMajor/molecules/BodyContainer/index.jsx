import React from 'react';
import ButtonContainer from '../ButtonCotainer';
import Question from '../../atoms/Question';
import { Wrapper } from './style';
import TimeLineContainer from '../TimeLineContainer';


const BodyContainer = () => {
  return (
      <Wrapper>
        <Question>개발을 좋아하시나요?</Question>
        <ButtonContainer/>
        <TimeLineContainer/>
      </Wrapper>
  );
};

export default BodyContainer;