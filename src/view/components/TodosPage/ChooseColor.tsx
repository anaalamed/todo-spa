import React from 'react';
import styled from 'styled-components';
import { StyledText } from '../../../styles/reset.css';

interface Props {
    setColor(boolean): void,
    currentColor: string
}

const ChooseColor: React.FC<Props> = ({ setColor, currentColor }) => {

    const colorsArr = ["lightcyan", "lightblue", "beige", "darkkhaki", "cadetblue"];

    return (
        <>
            <StyledText>Choose Todo color:  </StyledText>
            <Box>
                {colorsArr.map((color, i) =>
                    <Button key={i}
                        onClick={() => setColor(color)}
                        border={currentColor === color}
                        style={{ backgroundColor: color }}
                    >
                    </Button>
                )}
            </Box>
        </>
    )
}

export default ChooseColor;

const Box = styled.div`
  flex-direction: row;
  margin-bottom: 10px;
`

const Button = styled.button`
  width: 30px;
  height: 25px;
  border: 2px solid navy;
  border-color: ${(props) => props.border ? "red" : 'navy'};
`




