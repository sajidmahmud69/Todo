import React, { useEffect, memo } from "react";
import Animated, {
    Easing,
    useSharedValue,
    useAnimatedProps,
    withTiming,
    interpolateColor
} from 'react-native-reanimated'
import SVG, { Path, Defs, ClipPath, G } from 'react-native-svg'

const MARGIN = 10 
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
const checkMarkPath = "M0.527241 17.2705L12.7288 31.4612C15.0181 34.1236 19.0944 34.2599 21.5564 31.7563L51.9135 0.886002"
const outlineBoxPath = 'M1 40V11C1 5.47715 5.47715 1 11 1H17H22H42C47.5228 1 52 5.47715 52 11V40C52 45.5228 47.5228 50 42 50H11C5.47715 50 1 45.5228 1 40Z'

const AnimatedCheckBox = () => {
    return (
        <SVG viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
            <Path d={outlineBoxPath} stroke="black"/> 
            <Path d={checkMarkPath} stroke="black"/>
        </SVG>
    )
}


export default AnimatedCheckBox