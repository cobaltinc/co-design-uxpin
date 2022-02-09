import * as React from 'react';
import Col from '../../Col/Col';
import Text from '../../Text/Text';
import Grid from '../Grid';

export default (
  <Grid uxpId="Grid-1" direction="row" spacing={16}>
    <Col uxpId="Col-1" span={4}>
      <Text uxpId="Text-1">Col 1</Text>
    </Col>
    <Col uxpId="Col-2" span={4}>
      <Text uxpId="Text-2">Col 2</Text>
    </Col>
    <Col uxpId="Col-3" span={4}>
      <Text uxpId="Text-3">Col 3</Text>
    </Col>
  </Grid>
);
