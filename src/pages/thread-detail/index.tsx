import React from "react";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";

const ThreadDetail = () => {
  useLoad( () => {
    console.log( 'Page loaded.');
  })
  return (
    <View>
      ThreadDetail
    </View>
  );
};

export default ThreadDetail;
