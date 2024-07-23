import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      textDisabled: string;
      greyOutput: string;
      greyPlaysholder: string;
      greyBackgroundPaper: string;
      greyPrimary: string;
      secondary: string;
      hoverColor: string;
      background: string;
      gradient: string;
      gradientYellow: string;
      gradientHover: string;
      gradientBlack: string;
      gradientBackground: string;
      gradientSubNavGrey: string;
      warning: string;
      error: string;
      success: string;
    };
    transition: {
      main: string;
    };
  }
}
