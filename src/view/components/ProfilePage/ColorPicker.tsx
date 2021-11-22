import React from 'react';
import styled from 'styled-components';
import { ColorResult, HuePicker } from 'react-color'

import { StyledText } from '../../../styles/reset.css';
import { devices } from '../../../styles/responsive';

interface Props {
  setColor(boolean): void,
  currentColor?: string
}

const Picker: React.FC<Props> = ({ setColor, currentColor }) => {

  function onChange(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) {
    setColor(color.hex);
  }

  return (
    <Box>
      <StyledText>Choose background color for Todo Page</StyledText>
      <HuePicker
        color={currentColor}
        onChange={onChange} ></HuePicker>
    </Box>
  )
}

export default Picker;

const Box = styled.div`
  margin: 1rem;

  @media ${devices.laptop} {
    margin: 3rem;
  }
`