export default {
    root: {
        class: [
            //Shape
            'rounded-md',

            //Colors
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'bg-gradient-to-b from-primary-100',
        ]
    },
    header: ({ props }) => ({
        class: [
            // Flex
            'flex items-center justify-between',

            // Colors
            'text-surface-700 dark:text-surface-0/80',
            'bg-transparent',

            //Shape
            'rounded-tl-md rounded-tr-md',
            'border-0',

            // Conditional Spacing
            {
              'p-[1.125rem]': !props.toggleable,
              'py-0.5 md:py-3 px-0.5 md:px-[1.125rem]': props.toggleable
            }
        ]
    }),
    title: {
        class: 'leading-none font-semibold'
    },
    togglerIcon: {
        class: 'inline-block w-4 h-4'
    },
    content: {
        class: [
            // Spacing
            'px-1 pb-4 md:p-[1.125rem] pt-0',

            // Shape
            'border-0 border-t-0 last:rounded-br-md last:rounded-bl-md',

            //Color
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    footer: {
        class: [
            // Spacing
            'p-[1.125rem] pt-0',

            // Shape
            'border-0 border-t-0 rounded-br-lg rounded-bl-lg',

            //Color
            'text-surface-700 dark:text-surface-0/80'
        ]
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
};
