'use client';


import { FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ children, ...props }: FormProps) {
    return (
        <form className="space-y-6" {...props}>
            {children}
        </form>
    );
}