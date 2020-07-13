import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const CssGridItem = (props: CssGridItemProps) => {
  const {} = props;
  const classes = useStyles(props)();
  const { item } = classes;

  return <div className={item}>{props.children || null}</div>;
};

type CssGridItemProps = {};

CssGridItem.defaultProps = {};

const useStyles = (props: CssGridItemProps) => {
  const { justify, align, place, children, ...otherProps } = props;
  return makeStyles((theme) =>
    createStyles({
      item: {
        justifySelf: justify,
        alignSelf: align,
        placeSelf: `${place} ${place}`,
        ...otherProps,
      },
    })
  );
};

export default CssGridItem;
