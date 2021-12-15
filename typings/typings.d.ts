export {};
declare global {
  interface ITheme {
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      secondary: string;
      accentPrimary: string;
      accentSecondary: string;
    };
    roundness: number;
  }
}
