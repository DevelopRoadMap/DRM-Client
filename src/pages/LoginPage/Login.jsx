import React from 'react';
import { BackgroundWrapper } from '../../components/LoginPage/atoms/BackgroundWrapper/style';
import MainText from '../../components/LoginPage/molecules/MainText';
import Button from '../../components/LoginPage/atoms/LoginButton';

const Login = () => {
  return (
    <BackgroundWrapper>
      <MainText/>
      <Button/>
    </BackgroundWrapper>
  );
};

export default Login;