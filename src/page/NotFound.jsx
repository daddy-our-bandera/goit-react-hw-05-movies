import { BackLink } from 'components/BackLink/BackLink.styled';
import { Container } from 'components/Container/Container.styled';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import imgError from '../components/Images/imgError.jpg';

export default function NotFound() {
  const navigate = useLocation();
  const backLink = useRef(navigate.state?.from ?? '/');

  return (
    <Container>
      <BackLink to={backLink.current}>Go back</BackLink>
      <div
        style={{
          paddingTop: '40px',
        }}
      >
        <p> Something went wrong, try reloading the page or come back later</p>
        <img src={imgError} alt="" width="1000px" />
      </div>
    </Container>
  );
}
