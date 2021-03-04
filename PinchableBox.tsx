import React from 'react';
import { Animated, Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

interface PinchableBoxProps {
  imageUri: string;
}

const screen = Dimensions.get('window');

const PinchableBox = ({ imageUri }: PinchableBoxProps) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchEvent}
      onHandlerStateChange={onPinchStateChange}
    >
      <Animated.Image
        source={{ uri: imageUri }}
        style={{
          width: screen.width,
          height: 300,
          transform: [{ scale: scale }],
        }}
        resizeMode='cover'
      />
    </PinchGestureHandler>
  );
};

export default PinchableBox;
