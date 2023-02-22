import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieSection = styled.section`
  margin-top: 30px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  gap: 50px;
`;

export const StyledLink = styled(Link)`
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;

  :after {
    position: absolute;
    left: 80%;
    top: 54%;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
  }

  :hover {
    background: black;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    padding: 0rem 0.5rem 1rem 0.5rem;
    color: #ffffff;
    :after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
`;
