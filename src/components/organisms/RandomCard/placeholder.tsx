import styled from 'styled-components';
import Skeleton from 'components/atoms/Skeleton';

const Placeholder = () => {
  return <Wrapper>
    <Skeleton />
  </Wrapper>;
};

export default Placeholder;

const Wrapper = styled.div`
  width: 25rem;
  height: 46rem;
`;
