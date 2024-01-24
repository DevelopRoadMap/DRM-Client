import React from 'react';
import { Background } from './style';
import Header from '../../public/Header'
import BodyContainer from '../../components/TestMajor/molecules/BodyContainer';
import TimeLineContainer from '../../components/TestMajor/molecules/TimeLineContainer';

const TestMajor = () => {
  return (
    <Background>
      <Header/>
      <BodyContainer/>
    </Background>
  );
};

export default TestMajor;