import React from 'react';
import Container from '../components/blocks/Container';

const Error = () => {
  return (
    <Container backgroundPath="/images/Error.jpeg">
      <div>
        <p>Oh no, something went wrong!</p>
        <div>
          <p>So sorry, but our site is under maintenance right now.</p>
          <p>We’re doing our best and we’ll back soon </p>
        </div>
      </div>
    </Container>
  );
};

export default Error;
