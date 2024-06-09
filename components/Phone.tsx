import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean;
}

export const Phone = ({ imgSrc, dark = false, className, ...props }: Props) => {
    return (
        <div
            className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
            {...props}
        >
            <img
                src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
                className="pointer-events-none z-50 select-none"
                alt="phone case image"
            />

            <div className="absolute -z-10 inset-0">
                <img src={imgSrc} className="object-cover" alt="overlay img" />
            </div>
        </div>
    );
};
