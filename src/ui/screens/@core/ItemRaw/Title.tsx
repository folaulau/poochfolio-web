import * as styled from './ItemRaw.styled';
import { Align } from './ItemRaw.styled';

type Props = {
  bold?: boolean;
  flex?: number;
  align?: Align;
  hover?: boolean;
  children?: any;
};

export const Title: React.FC<Props> = ({ children, bold, flex = 1, align, hover }) => {
  return (
    <styled.Title flex={flex} data-bold={bold} align={align} hover={hover}>
      {children}
    </styled.Title>
  );
};
