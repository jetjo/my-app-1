/* eslint-disable react/jsx-curly-spacing */
import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useLoad, showToast } from '@tarojs/taro';
import { getLatestTopics } from '@/api/topic';
import ThreadList from '@/components/thread-list';
import styles from './index.module.scss';

// import './index.scss';

export default function Index () {
  const [ loading, setLoading ] = useState( false );
  const [ threads, setThreads ] = useState<any>( [] );

  useEffect( () => {
    getLatestTopics().then( res => {
      setThreads( res );
    } ).catch( () => {
      showToast( {
        title: '获取数据失败',
      } );
    } ).finally( () => {
      setLoading( false );
    } );
  }, [] );

  useLoad( () => {
    console.log( 'Page loaded.' );
  } );

  return (
    <View className={ styles.box }>
      <ThreadList threads={ threads } loading={ loading } />
    </View>
  );
}
