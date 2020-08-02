import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import CodePreview from './CodePreview';

const DemoTemplate = (props: Props) => {
  const { hashTag } = props;
  const myRef = useRef<null | HTMLDivElement>(null);

  const location = useLocation();
  useEffect(() => {
    if (myRef && location.hash.includes(hashTag)) {
      myRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  }, [myRef, location.hash, hashTag]);


  const { demo, componentName, codeSnippet, description } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      spacing={3}
      style={{ marginBottom: 50 }}>
      <Grid item ref={myRef}>
        <Typography component='h1' variant='h5'>{componentName}</Typography>
      </Grid>
      {
        description &&
        <Grid item>
          {description}
        </Grid>
      }
      <Grid item>
        <Paper variant='outlined' elevation={0}>
          <Grid container justify='center' alignItems='center' className={classes.demoContainer}>
            {demo}
          </Grid>
        </Paper>
      </Grid>
      <Grid item container>
        <CodePreview>
          {codeSnippet}
        </CodePreview>
      </Grid>
      <Divider />
    </Grid>
  );
};

type Props = {
  type: 'component' | 'hook',
  componentName: string,
  demo: React.ReactElement<any>,
  codeSnippet: string,
  hashTag: string,
  description?: React.ReactElement<any>,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: 50,
    },
    demoContainer: {
      minHeight: 100,
    },
    codeContainer: {
      backgroundColor: grey[800],
      color: theme.palette.common.white
    }
  }),
);

export default DemoTemplate;