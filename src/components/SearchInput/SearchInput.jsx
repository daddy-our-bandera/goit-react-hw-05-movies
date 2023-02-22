import PropTypes from 'prop-types';
import { useState } from 'react';

import { Btn, Form, FormBox, Input } from './SearchInput.styled';

export default function SearchInput({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return alert(' Please input something for search!');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <FormBox>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.currentTarget.value);
          }}
        />

        <Btn type="submit"> </Btn>
      </Form>
    </FormBox>
  );
}
SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
