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

  return (
    <S.Wrapper>
      <S.Content>
        {
        isValidating ? <div>Loading...</div> : (
          <Card title={data.title} data={data.card} image="https://via.placeholder.com/250"/>
          )
        }
      </S.Content>
      <Button color="secondary" callback={callback}>Play</Button>
    </S.Wrapper>
  );
};

export default SortCard;
