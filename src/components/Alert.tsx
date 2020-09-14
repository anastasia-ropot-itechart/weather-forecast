import React from 'react';

export interface AlertProps {
    text: string;
}

export const Alert = ({ text }: AlertProps) => (
    <div className="alert alert-warning" role="alert">
        {text}
    </div>
);
