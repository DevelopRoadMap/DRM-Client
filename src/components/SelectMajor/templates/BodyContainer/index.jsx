import React from 'react';
import { Container } from './style';
import Title from '../../atoms/Title';
import MajorButtonBody from '../../organisms/MajorButtonBody';
import SelectButton from '../../atoms/SelectButton';
import FindMajor from '../../atoms/FindMajorText'

const SectionContainer = () => {
  return (
    <Container>
      <Title/>
      <MajorButtonBody/>
      <SelectButton/>
      <FindMajor/>
    </Container>
  );
};

export default SectionContainer;