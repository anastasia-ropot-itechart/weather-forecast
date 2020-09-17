import React, { ReactNode } from 'react';

export interface PanelProps {
    title: string;
    children: ReactNode;
}

export const Panel: React.FC<{ title: string; children: ReactNode }> = ({ title, children }: PanelProps) => {
    return (
        <div className="panel">
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
};
