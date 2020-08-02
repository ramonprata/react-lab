import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const CssGridItem = (props: CssGridItemProps) => {
  const { className, style } = props;
  const classes = useStyles(props)();
  const { item } = classes;

  return (
    <div className={[item, className].join(' ')} style={{ ...style }}>
      {props.children}
    </div>
  );
};

type StartEnd = {
  startLine: string | number,
  endLine: string | number,
};

type CssGridItemProps = {
  style?: CSSProperties,
  className?: String,
  colStartEnd?: string,
  rowStartEnd?: string,
  startEnd: string,
  justify?: 'start' | 'end' | 'center' | 'stretch',
  align?: 'start' | 'end' | 'center' | 'stretch',
  placeSelf?: string,
};

CssGridItem.defaultProps = {
  style: {},
  align: 'stretch',
  justify: 'stretch',
};

const useStyles = (props: CssGridItemProps) => {
  const {
    colStartEnd,
    rowStartEnd,
    startEnd,
    justify,
    align,
    placeSelf,
  } = props;
  return makeStyles((theme) =>
    createStyles({
      item: {
        gridColumn: startEnd || colStartEnd,
        gridRow: startEnd || rowStartEnd,
        justifySelf: justify,
        alignSelf: align,
        placeSelf: placeSelf,
      },
    })
  );
};

export default CssGridItem;
