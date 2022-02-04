// @flow
import * as React from 'react';

type Props = {
    error: Error,
    resetErrorBoundary: any
};

export const ErrorFallback = ({error, resetErrorBoundary}: Props) => {
    return (
        <div role={"alert"}>
            <p>Something wen wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Tray Again</button>
        </div>
    );
};
