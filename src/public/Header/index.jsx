import React from 'react';
import * as S from './style';
import ProfileImg from '../../assets/svg/Profile.svg';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>name</S.Logo>
      <S.NavContainer>
        <S.NavText>전공</S.NavText>
        <S.NavText>로드맵</S.NavText>
      </S.NavContainer>
      <S.ProfileImg src={ProfileImg}></S.ProfileImg>
    </S.HeaderContainer>
  );
};

export default Header;