import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
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
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    color: #ffffff;
    :after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
`;
