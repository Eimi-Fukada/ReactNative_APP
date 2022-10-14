import {View, Text, StyleSheet} from 'react-native';
import React, {FC, memo} from 'react';
import {ViewModal} from './viewModel';
import * as ss from './styles';
import {TemplateProps} from './const';
import Navigation from '../../components/navigation';

const styles = StyleSheet.create(ss);

const Component: FC<TemplateProps> = (props: any) => {
  const {} = ViewModal();

  return (
    <>
      <Navigation title="模板页面" />
      <View style={styles.page}>
        <Text>Template</Text>
      </View>
    </>
  );
};

const Template = memo(Component);
export default Template;
