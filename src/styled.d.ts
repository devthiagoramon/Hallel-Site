import "styled-components";
import { ThemeType } from "./AppTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
