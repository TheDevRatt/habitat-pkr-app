import {
  Text as DefaultText,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  TextInput as DefaultTextInput,
  SafeAreaView as DefaultSafeAreaView,
  Image as DefaultImage,
} from "react-native";

import Colors from "@/constants/Colors";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps &
  DefaultText["props"] & { textColor?: string };
export type ViewProps = ThemeProps & DefaultView["props"];
export type TouchableOpacityProps = ThemeProps &
  DefaultTouchableOpacity["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView["props"];
export type ImageProps = ThemeProps & DefaultImage["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const colorFromProps = props.light;

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors.light[colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, textColor, ...otherProps } = props;
  const color =
    textColor || useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultTouchableOpacity
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultTextInput style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function Image(props: ImageProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultImage style={[{ backgroundColor }, style]} {...otherProps} />;
}
