import * as React from 'react';
import Text from '../../Text/Text';
import View from '../../View/View';
import EquallyGrid from '../EquallyGrid';

export default (
  <EquallyGrid uxpId="EquallyGrid-1" cols={3} spacing={16}>
    <View uxpId="View-1">
      <Text uxpId="Text-1">EquallyGrid 1</Text>
    </View>
    <View uxpId="View-2">
      <Text uxpId="Text-2">EquallyGrid 2</Text>
    </View>
    <View uxpId="View-3">
      <Text uxpId="Text-3">EquallyGrid 3</Text>
    </View>
  </EquallyGrid>
);
