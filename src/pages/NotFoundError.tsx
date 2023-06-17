import Container from '../components/blocks/Container';
import { Link } from 'react-router-dom';

const NotFoundError = () => {
  return (
    <Container backgroundPath="/images/Error.jpeg" height="100vh">
      <div className="text-black h-full grid grid-rows-2 content-between">
        <div className="flex justify-center">
          <div>
            <div>404</div>
            <div>Oh no, Seems you are lost.</div>
          </div>
        </div>
        <div className="flex items-end justify-center pb-11">
          <Link to="/">
            <span>Click here to return to homepage</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundError;
