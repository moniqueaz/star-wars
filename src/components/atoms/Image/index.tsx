import * as S from './styles';

type ImageProps = {
  src: string,
  size?: 'normal' | 'full'
}
const Image = ( { src, size = 'normal' }: ImageProps) => {
  if (!src) {
    return null;
  }
  return (
    <S.Image src={src} size={size}/>
  );
};

export default Image;
