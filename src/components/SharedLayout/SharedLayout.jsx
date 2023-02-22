import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  BlurFilter,
  Header,
  HeaderLink,
  HeaderList,
} from './ShareLayout.styled';
import { Loader } from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <BlurFilter />
      <Header>
        <HeaderList>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="movies">Movies</HeaderLink>
          </li>
        </HeaderList>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <footer></footer>
    </>
  );
}
