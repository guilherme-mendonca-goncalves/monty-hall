import * as Style from './Card.style';

interface CardProps {
  children?: any,
  bgcolor?: string
}

const Card = (props: CardProps) => {
  return (
    <Style.Container bgcolor={props.bgcolor}>
      {props.children}
    </Style.Container>
  );
};

export default Card;
