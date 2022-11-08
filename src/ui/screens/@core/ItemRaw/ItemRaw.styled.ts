/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { COLOR } from '../../../../assets/colors';

export type Align = 'center' | 'left' | 'right';
export type Justify = 'start' | 'center'

export const RawWrapper = styled.div<{ minWidth?: number, minHeight?: number, isDark?: boolean }>`
	background     : white;

	display        : flex;
	align-items    : center;
	justify-content: space-between;
	min-width      : 100%;
	min-height     : ${({ minHeight }) => `${minHeight === undefined ? 66 : minHeight}px`};

  & > * {
    flex: 1;
    ${({ minWidth }) => `min-width: ${minWidth != undefined ? minWidth : 100}px`};
  }

  &:not(:last-child) {
    // border-bottom: 1px solid gray;
  }

  & > p:first-child {
    text-align: left;
  }

  & > div:first-child {
    justify-content: left;
  }

  &[data-hover=true]:hover{
    background-color: ${COLOR.gray2};
    cursor: pointer
  }

  &[data-flat=true] {
    padding: 0;
  }
`;

export const Title = styled.p<{ flex?: number, align?: Align, hover?: boolean, width?: string }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}
  ${({ width }) => width ? `width: ${width};` : null};

  color: ${COLOR.gray2};

  position     : relative;
  text-align   : ${({ align }) => align ? `${align} !important` : 'center'};;
  text-overflow: ellipsis;
  overflow     : hidden;
  font-size    : 15px;
  font-family  : 'MuseoSansRouned500';
  margin: 5px 0;

  &[data-bold=true] {
    font-weight: bold;
  }

  &:hover {
    ${({ hover }) => hover ? 'color: #1FC8BE;' : null};
  }
`;

export const Merge = styled.div<{ flex?: number, justify?: Justify, margin?: string }>`
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}

  display    : flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ? `${justify} !important` : 'start'};
  ${({ margin }) => margin ? `margin:${margin}` : ''};
  & > *:not(:last-child) {
    margin-right: 12px;
  }

  & > p {
    text-align: left;
  }
`;

export const Space = styled.div<{ flex?: number, minWidth?: number }>`
  ${({ minWidth }) => minWidth != undefined ? `min-width: ${minWidth}px;` : ''}
  ${({ flex }) => flex != undefined ? `flex: ${flex} !important;` : ''}

  display        : flex;
  justify-content: center;
  align-items    : center;
`;
