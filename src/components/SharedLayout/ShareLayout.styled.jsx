import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const BlurFilter = styled.div`
  width: 100%;
  height: 4rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100' height='100' style='filter:url(%23f)' opacity='.2'/%3E%3C/svg%3E");
  mask: linear-gradient(black 7rem, transparent);
  -webkit-mask: linear-gradient(black 3rem, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
  touch-action: none;
`;

export const Header = styled.header`
  width: 100%;
  height: 8rem;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 67px;
`;
export const HeaderList = styled.ul`
  padding-top: 20px;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  list-style: none;
  gap: 20px;
`;
export const HeaderLink = styled(Link)`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 1px 15px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  :disabled {
    pointer-events: none;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
