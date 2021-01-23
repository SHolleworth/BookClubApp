import Animated, { block, cond, Easing, timing } from 'react-native-reanimated'

const {
    Value,
    set,
} = Animated

export const transitionSelector = (clock, dest) => {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
      };
    
      const config = {
        duration: 1000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease),
      };

      return block([
        cond(
            clockRunning(clock),
            [
                set(config.toValue, dest),
                timing(clock, state, config),
            ]
        ),
        state.position
      ])
}