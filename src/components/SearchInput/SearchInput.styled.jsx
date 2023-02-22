import styled from '@emotion/styled';

export const FormBox = styled.div`
  justify-content: center;
  display: flex;
`;
export const Form = styled.form`
  justify-content: center;
  display: flex;
  position: relative;
  padding: 15px 10px 10px;
  margin-top: 10px;
  width: 50%;
`;
export const Input = styled.input`
  width: 50%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;

  padding: 1px 0;
  background: transparent;
  transition: border-color 0.2s;

  :focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/128/2811/2811790.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
