import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  padding-top: 30px;
  color: #ddd;
  gap: 20px;
  list-style: none;
`;
export const Item = styled.li`
  width: 220px;
  transition: all 200ms ease-out;

  :hover {
     box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, 
     rgba(0, 0, 0, 0.22) 0px 15px 12px;   
     transform: scale(1.05);
  }

  :after {
      padding-bottom: 100%
      display: block
  }
`;

export const OnLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
