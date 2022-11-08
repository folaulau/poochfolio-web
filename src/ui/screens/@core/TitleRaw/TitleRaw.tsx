import * as styled from './TitleRaw.styled';

type Props = {
  cleanBackground?: boolean;
  splitter?: boolean;
  flat?: boolean;
  minWidth?: number;
  height?: number;
  children?: any
};
type FCTitleRaw = React.FC<Props> & {
  Space   : typeof styled.Space;
  Item    : typeof styled.Name;
  Merge   : typeof styled.Merge;
};

const TitleRaw: FCTitleRaw = ({ children, cleanBackground, splitter, flat, minWidth, height }) => {
  return (
    <styled.RawWrapper data-clean-background={cleanBackground} data-splitter={splitter} data-flat={flat} minWidth={minWidth} height={height}>
      {children}
    </styled.RawWrapper>
  );
};

TitleRaw.Item     = styled.Name;
TitleRaw.Merge    = styled.Merge;
TitleRaw.Space    = styled.Space;

export default TitleRaw;
export { TitleRaw };
