import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">⚠️ Something went wrong</h1>
            <p className="text-gray-700 mb-6">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <details className="text-left bg-white p-4 rounded border border-red-200 mb-4">
              <summary className="font-mono text-sm font-bold text-red-600 cursor-pointer">
                Error Details
              </summary>
              <pre className="text-xs overflow-auto mt-2 text-gray-700">
                {this.state.error?.toString()}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
