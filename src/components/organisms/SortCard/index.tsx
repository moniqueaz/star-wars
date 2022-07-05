import * as S from './styles';
import { useCard } from 'service/hooks/card';
import Card from 'components/molecules/Card';
import Button from 'components/atoms/Button';

type SortCardProps = {
  count: number,
  callback?: () => any,
  slug: string | string[]
}

const SortCard = ( { count, callback, slug }:SortCardProps) => {
  const { data, error, isValidating } = useCard(slug, count);

  if (!!error) {
    return <div>Error</div>;
  }

  if (isValidating) {
    return <div>Loading...</div>;
  }

  return (
    <S.Wrapper>
      <Card title={data.title} data={data.card} image="https://via.placeholder.com/250"/>
      <Button color="secondary" callback={callback}>Play</Button>
    </S.Wrapper>
  );
};

export default SortCard;
