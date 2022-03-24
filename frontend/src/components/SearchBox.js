import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='search'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Groceries...'
        className='me-2'
      />
      <Button type='submit' variant='outline-dark' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
