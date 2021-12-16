import 'react-redux';
import {Component} from 'react';

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
declare module 'react-redux' {
  export interface InferableComponentDecorator<TOwnProps> {
    // noinspection TsLint
    <T extends Component<TOwnProps>>(component: T): T;
  }
  // noinspection TsLint
  export interface Connect {
    // noinspection TsLint
    <
      TStateProps = any,
      TDispatchProps = any,
      TOwnProps = any,
      TMergedProps = any,
    >(
      mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
      mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
      mergeProps?: MergeProps<
        TStateProps,
        TDispatchProps,
        TOwnProps,
        TMergedProps
      >,
      options?: Options,
    ): InferableComponentDecorator<TOwnProps>;
  }
}
