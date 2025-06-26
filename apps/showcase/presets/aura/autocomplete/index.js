export default {
    root: ({ props }) => ({
        class: [
            'relative',

            // Flex
            'inline-flex',

            // Size
            { 'w-full': props.multiple },

            // Color
            'text-surface-900 dark:text-surface-0',

            //States
            {
                'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled
            }
        ]
    }),
    inputtoken: {
        class: ['py-1 px-0 ml-2', 'inline-flex flex-auto']
    },
    pcInput: ({ props, parent }) => ({
        class: [
            // Font
            'text-base leading-none',

            // Shape
            'appearance-none rounded-md',
            { 'rounded-tr-none rounded-br-none': props.dropdown },
            { 'outline-none shadow-none rounded-none': props.multiple },

            // Size
            { 'w-full': props.multiple },

            // Spacing
            'm-0',
            { 'py-2 px-3': !props.multiple, 'p-0': props.multiple },

            // Colors
            'text-surface-700 dark:text-white/80',
            'border',
            {
                'bg-surface-0 dark:bg-surface-950': !props.multiple,
                ' border-surface-300 dark:border-surface-700': !props.multiple && !props.invalid,
                'border-0 bg-transparent': props.multiple
            },

            // Invalid State
            { 'border-red-500 dark:border-red-400': props.invalid },

            // States
            { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10': !props.multiple },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== '' },

            // Transition
            'transition-colors duration-200'
        ]
    }),
    loader: {
        class: ['text-surface-500 dark:text-surface-0/70', 'absolute top-[50%] right-[0.5rem] -mt-2 animate-spin']
    },
    list: {
        class: [
            // Colors
            'bg-surface-50 dark:bg-surface-900',
        ]
    },
    option: ({ context }) => ({
        class: [
            'relative',

            // Font
            'leading-none',

            // Spacing
            'm-0 px-4 py-6 md:px-3 md:py-2',

            // Shape
            'border-t border-primary border-dashed',

            // Colors
            {
                'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                'text-primary-highlight-inverse': context.selected,
                'bg-primary-highlight': context.selected
            },

            //States
            { 'hover:bg-primary-highlight-hover': context.selected },

            // Transition
            'transition-shadow duration-200',

            // Misc
            'cursor-pointer overflow-hidden whitespace-nowrap'
        ]
    }),
    optionGroup: {
        class: [
            'font-semibold',

            // Spacing
            'm-0 py-2 px-3',

            // Colors
            'text-surface-400 dark:text-surface-500',

            // Misc
            'cursor-auto'
        ]
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-2 px-3',

            // Color
            'text-surface-800 dark:text-white/80',
            'bg-transparent'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
