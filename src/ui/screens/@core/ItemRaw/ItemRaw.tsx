import { Title } from './Title';

import * as styled from './ItemRaw.styled';

type Props = { onClick?: () => void; hover?: boolean; flat?: boolean; minWidth?: number; minHeight?: number; children?: any;};
type FCItemRaw = React.FC<Props> & {
  Title        : typeof Title;
  Space        : typeof styled.Space;
  Merge        : typeof styled.Merge;
};

const ItemRaw: FCItemRaw = ({hover, flat, minWidth, minHeight, ...props}) => {
  return <styled.RawWrapper data-hover={hover} data-flat={flat} minWidth={minWidth} minHeight={minHeight} {...props} />;
};

ItemRaw.Title         = Title;
ItemRaw.Merge         = styled.Merge;
ItemRaw.Space         = styled.Space;


export default ItemRaw;
export { ItemRaw };
