export default {
    root: {
        class: [
            // Display and Position
            'inline-flex',
            'max-w-full',
            'relative'
        ]
    },
    inputicon: {
        class: ['absolute top-[50%] -mt-2', 'text-surface-600 dark:text-surface-200', 'right-[.75rem]']
    },
    dropdown: {
        root: {
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Shape
                'rounded-r-md',

                // Size
                'py-2 px-0',
                'w-10',
                'leading-[normal]',

                // Colors
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:ring-primary-500 dark:focus:ring-primary-400'
            ]
        }
    },
    panel: ({ props }) => ({
        class: [
            // Display & Position
            {
                absolute: !props.inline,
                'inline-block': props.inline
            },

            // Size
            { 'w-auto p-3 ': !props.inline },
            { 'min-w-[80vw] w-auto p-3 ': props.touchUI },
            { 'p-3 min-w-full': props.inline },

            // Shape
            'border rounded-lg',
            {
                'shadow-md': !props.inline
            },

            // Colors
            'bg-surface-50 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700',

            //misc
            { 'overflow-x-auto': props.inline }
        ]
    }),
    datepickerMask: {
        class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
    },
    header: {
        class: [
            //Font
            'font-medium',

            // Flexbox and Alignment
            'flex items-center justify-between',

            // Spacing
            'p-0 pb-2',
            'm-0',

            // Shape
            'border-b',
            'rounded-t-md',

            // Colors
            'text-surface-700 dark:text-white/80',
            'bg-surface-0 dark:bg-surface-900',
            'border-surface-200 dark:border-surface-700'
        ]
    },
    title: {
        class: [
            // Text
            'flex gap-1',
            'leading-7',
            'mx-auto my-0'
        ]
    },
    monthTitle: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-medium',

            //shape
            'rounded-md',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-1',
            'm-0 mr-2',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

            // Misc
            'cursor-pointer'
        ]
    },
    yearTitle: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-medium',

            //shape
            'rounded-md',

            // Colors
            'text-surface-700 dark:text-white/80',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-1',
            'm-0 mr-2',

            // States
            'hover:text-primary-500 dark:hover:text-primary-400',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

            // Misc
            'cursor-pointer'
        ]
    },
    nextbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-500/10  ',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    tableBody: {
        class: [
            // Font
            'text-base leading-[normal]',
            // Size & Shape
            'border-collapse',
            'w-full',

            // Spacing
            'm-0 mt-2'
        ]
    },
    tableHeaderCell: {
        class: [
            // Spacing
            'p-1',
            'font-medium'
        ]
    },
    weekheader: {
        class: ['leading-5', 'text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
    },
    weeknumber: {
        class: ['text-surface-600 dark:text-white/70', 'opacity-60 cursor-default']
    },
    weekday: {
        class: [
            // Colors
            'text-surface-500 dark:text-white/60',
            'p-1'
        ]
    },
    // day: {
    //     class: [
    //         'DAY',
    //         // Spacing
    //         'p-1'
    //     ]
    // },
    weeklabelcontainer: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-8 h-8',
            'rounded-full',
            'border-transparent border',
            'leading-[normal]',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
            {
                'hover:bg-surface-50 dark:hover:bg-surface-500/10': !context.selected && !context.disabled,
                'hover:bg-primary-highlight-hover': context.selected && !context.disabled
            },
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        ]
    }),
    day: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-8 h-8',
            'rounded-full',
            'border-transparent border',
            'leading-[normal]',

            // Colors
            {
                'bg-surface-200 dark:bg-surface-800 text-surface-600 dark:text-white/70': context.date.today && !context.selected && !context.disabled,
                'bg-transparent text-surface-600 dark:text-white/70': !context.selected && !context.disabled && !context.date.today,
                'text-white bg-primary': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
            {
                'hover:bg-surface-50 dark:hover:bg-surface-500/10': !context.selected && !context.disabled
            },
            {
                'text-muted cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        ]
    }),
    monthpicker: {
        class: [
            // Spacing
            'mt-2'
        ]
    },
    month: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/3',
            'p-1',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
            {
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    yearpicker: {
        class: [
            // Spacing
            'mt-2'
        ]
    },
    year: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/2',
            'p-1',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 dark:text-white/70 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
            {
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    timepicker: {
        class: [
            // Flexbox
            'flex',
            'justify-center items-center',

            // Borders
            'border-t-1',
            'border-solid border-surface-200',

            // Spacing
            'pt-2 mt-2'
        ]
    },
    separatorcontainer: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    separator: {
        class: [
            // Text
            'text-xl'
        ]
    },
    hourpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    minutepicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    secondPicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    ampmpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    incrementbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-500/10  ',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    decrementbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600 dark:text-white/70',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700 dark:hover:text-white/80',
            'hover:bg-surface-100 dark:hover:bg-surface-500/10  ',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    groupcontainer: {
        class: [
            // Flexbox
            'flex'
        ]
    },
    group: {
        class: [
            // Flexbox and Sizing
            'flex-1',

            // Borders
            'border-l',
            'border-surface-200',

            // Spacing
            'pr-0.5',
            'pl-0.5',
            'pt-0',
            'pb-0',

            // Pseudo-Classes
            'first:pl-0',
            'first:border-l-0'
        ]
    },
    buttonbar: {
        class: [
            // Flexbox
            'flex justify-between items-center',

            // Spacing
            'pt-2',

            // Shape
            'border-t border-surface-200 dark:border-surface-700'
        ]
    },
    todaybutton: {
        root: {
            class: [
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-3 py-1 text-sm leading-[normal]',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            ]
        }
    },
    clearbutton: {
        root: {
            class: [
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-3 py-1 text-sm leading-[normal]',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            ]
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
