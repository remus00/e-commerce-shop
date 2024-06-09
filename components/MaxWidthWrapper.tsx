import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
};

export const MaxWidthWrapper = ({ children, className }: Props) => {
    return (
        <div className={cn('h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    );
};
