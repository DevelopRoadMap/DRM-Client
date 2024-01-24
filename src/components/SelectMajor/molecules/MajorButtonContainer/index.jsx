import * as S from './style';
import { MajorButton } from '../../atoms/MajorButton/style';

function MajorButtonContainer() {
  return (
    <>
    <S.MajorButtonContainer>
      <MajorButton>FrontEnd</MajorButton>
      <MajorButton>BackEnd</MajorButton>
      <MajorButton>IOS</MajorButton>
      <MajorButton>AOS</MajorButton>
      <MajorButton>DevOps</MajorButton>
      <MajorButton>Design</MajorButton>
      <MajorButton>AI</MajorButton>
    </S.MajorButtonContainer>
    <S.MajorButtonContainer>
    <MajorButton>게임개발</MajorButton>
      <MajorButton>보안</MajorButton>
      <MajorButton>네트워크</MajorButton>
      <MajorButton>로보틱스</MajorButton>
      <MajorButton>금융권</MajorButton>
      <MajorButton>공무원</MajorButton>
      <MajorButton>공기업</MajorButton>
    </S.MajorButtonContainer>
    </>
  );
}

export default MajorButtonContainer;
