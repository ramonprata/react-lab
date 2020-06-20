import React from 'react';

/**
 * TODO: set props type flow js
 * type Props = {};
 */

const BoxContent = (props) => {
  const { pd, pt, pr, pb, pl, mg, mt, mr, mb, ml, style } = props;
  return (
    <div
      style={{
        padding: pd ? pd : `${pt}px ${pr}px ${pb}px ${pl}px`,
        margin: mg ? mg : `${mt}mx ${mr}mx ${mb}mx ${ml}px`,
        ...style,
      }}
    >
      {props.children}
    </div>
  );
};

BoxContent.defaultProps = {
  pl: 0,
  pr: 0,
  pb: 0,
  pt: 0,
  ml: 0,
  mr: 0,
  mb: 0,
  mt: 0,
};

export default BoxContent;
