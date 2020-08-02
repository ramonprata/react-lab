import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

/**
  TODO: ADD TYPE PROPS
 */
const CssGridContainer = (props: CssGridContainerProps) => {
  const { style } = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return (
    <div className={container} style={{ ...style }}>
      {props.children}
    </div>
  );
};

type CssGridContainerProps = {
  templateCol?: string,
  templateRow?: string,
  repeatCol?: boolean,
  repeatRow?: boolean,
  colGap?: number | string,
  rowGap?: number | string,
  gap?: number | string,
  justifyItems?: 'start' | 'end' | 'center' | 'stretch',
  alignItems?: 'start' | 'end' | 'center' | 'stretch',
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly',
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly',
  style?: CSSProperties,
};

CssGridContainer.defaultProps = {
  templateCol: '1fr',
  templateRow: 'auto',
  repeatCol: true,
  repeatRow: false,
  colGap: 0,
  rowGap: 0,
  gap: 0,
  justifyItems: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  alignContent: 'stretch',
  style: {},
};

const useStyles = (props) =>
  makeStyles((theme) => {
    const {
      templateCol,
      templateRow,
      repeatCol,
      repeatRow,
      colGap,
      rowGap,
      gap,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      children,
    } = props;
    const repeatNumber = children.length;
    return createStyles({
      container: {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: repeatCol
          ? `repeat(${repeatNumber},${templateCol})`
          : templateCol,
        gridTemplateRows: repeatRow
          ? `repeat(${repeatNumber},${templateRow})`
          : templateRow,
        columnGap: gap || colGap,
        rowGap: gap || rowGap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
      },
    });
  });
export default CssGridContainer;
