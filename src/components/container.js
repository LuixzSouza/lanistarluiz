import { twMerge } from 'tailwind-merge';

export function ContainerGrid({children, className}) {
    //Classes Padrões
    const defaultClass = 'w-full max-w-grid mx-auto px-6 @desktop:px-28'
    //Classes Combinadas
    const combinedClasses = twMerge(defaultClass, className)

    return(
        <div className={combinedClasses}>
            {children}
        </div>
    )
}