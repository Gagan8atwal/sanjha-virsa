'use client';

import { Component, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback: ReactNode;
  onError?: (error: Error) => void;
};

type State = { hasError: boolean };

// Catches any error thrown while loading or rendering a 3D scene (WebGL
// context loss, failed asset, runtime error inside the canvas) and swaps in
// the static fallback so the page never breaks. Reusable across every scene.
export default class AssetErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[SanjhaVirsa 3D] scene error, showing fallback:', error);
    }
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) return <>{this.props.fallback}</>;
    return <>{this.props.children}</>;
  }
}
