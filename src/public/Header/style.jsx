import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  border-bottom: 1px solid #000;
  background: #000014;
`;

export const Logo = styled.span`
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
`;

export const NavContainer = styled.div`
  width: 239px;
  height: 23px;
  display: flex;
  justify-content: space-between;
`;
export const NavText = styled.span`
  color: #FFF;

/* H5 */
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
`
export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;
