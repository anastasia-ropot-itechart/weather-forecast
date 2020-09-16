import React from 'react';

export interface AlertProps {
    text: string;
}

export const Alert: React.FC<{ text: string }> = ({ text }: AlertProps) => <div className="alert">{text}</div>;
