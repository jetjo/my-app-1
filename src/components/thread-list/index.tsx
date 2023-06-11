/* eslint-disable react/jsx-curly-spacing */
import React from "react";
import { View, Button } from "@tarojs/components";
import { navigateTo, switchTab } from "@tarojs/taro";

interface Prop {
  threads: any[],
  loading: boolean;
}

const ThreadList: React.FC<Prop> = ( { threads, loading } ) => {
  console.log( { threads, loading } );
  const handleTap = () => {
    switchTab( {
      url: '/pages/thread-detail/index',
      // events: {
      //   acceptDataFromOpenedPage: function ( data ) {
      //   },
      //   someEvent: function ( data ) {
      //   }
      // },
      // success: function ( res ) {
      //   res.eventChannel.emit( 'acceptDataFromOpenerPage', { data: 'test' } );
      // }
    } );
  };
  return (
    <View >
      ThreadList
      <View>
        <Button onTap={ handleTap }>查看详情</Button>
      </View>
    </View>
  );
};

export default ThreadList;
