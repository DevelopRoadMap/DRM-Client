import React from 'react';
import { TimeLineItem } from '../../atoms/TimeLine/TimeLineItem/style';
import { TimeLineDiv } from '../../atoms/TimeLine/TimeLineDiv/style';

const TimeLineContainer = () => {
  return (
      <TimeLineDiv>
        <TimeLineItem/>
        <TimeLineItem/>
        <TimeLineItem/>
        <TimeLineItem/>
        <TimeLineItem/>
      </TimeLineDiv>
  );
};

export default TimeLineContainer;