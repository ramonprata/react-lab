import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

/**
  TODO: ADD TYPE PROPS
 */
const CssGridContainer = (props) => {
  const {} = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return <div className={container}>{props.children}</div>;
};

// type CssGridContainerProps = {};

CssGridContainer.defaultProps = {
  repeatCol: true,
  templateCol: '1fr',
  // templateRow: 'auto',
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
      children,
      ...otherProps
    } = props;
    const repeatNumber = children.length;
    return createStyles({
      container: {
        display: 'grid',
        gridTemplateColumns: repeatCol
          ? `repeat(${repeatNumber},${templateCol})`
          : templateCol,
        gridTemplateRows: repeatRow
          ? `repeat(${repeatNumber},${templateRow})`
          : templateRow,
        ...otherProps,
      },
    });
  });
export default CssGridContainer;
