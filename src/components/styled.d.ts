import 'styled-components';
import theme from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: (typeof theme)['palette'];
    colors: (typeof theme)['colors'];
    staticColors: (typeof theme)['staticColors'];
    fonts: (typeof theme)['fonts'];
    sizes: (typeof theme)['sizes'];
    breakpoints: (typeof theme)['breakpoints'];
  }
}
