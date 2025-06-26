export default {
    root: ({ props }) => ({
        class: [
            'flex flex-col',

            //Shape
            'rounded-md',

            //Colors
            'border border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'bg-gradient-to-b from-primary-100',

            {
              '[&>[data-pc-name=tablist]]:overflow-hidden': props.scrollable
            },
        ]
    }),
    tablist: {
        root: 'relative flex',
        content: 'overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain overscroll-y-auto [&::-webkit-scrollbar]:hidden grow',
        tabList: 'relative flex border-solid border-b border-surface-200 dark:border-surface-700 justify-center',
        nextButton: '!absolute top-0 right-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-900 outline-transparent cursor-pointer shrink-0',
        prevButton: '!absolute top-0 left-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-900 outline-transparent cursor-pointer shrink-0',
        activeBar: 'z-10 block absolute h-[1px] bottom-[-1px] bg-primary'
    },
    tabpanels: {
        root: 'bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0/80 outline-0 px-1 pb-4 md:p-[1.125rem] pt-2'
    },
    tabpanel: {
        root: 'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300'
    },
    tab: {
        root: ({ props, context }) => ({
            class: [
              'relative shrink-0',
              // Shape
              'border-b',
              'rounded-t-md',
              // Spacing
              'py-4 px-[1.125rem]',
              '-mb-px',
              // Colors and Conditions
              'outline-transparent hover:text-primary',
              {
                'border-surface-200 dark:border-surface-700': !context.active,
                'bg-surface-0 dark:bg-surface-900': !context.active,
                'text-surface-700 dark:text-surface-0/80': !context.active,
                'bg-surface-0 dark:bg-surface-900': context.active,
                'text-primary': context.active,
                'opacity-60 cursor-default user-select-none select-none pointer-events-none': props == null ? void 0 : props.disabled
              },
              // States
              'focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300',
              // Transitions
              'transition-all duration-200',
              // Misc
              'cursor-pointer select-none whitespace-nowrap',
              'user-select-none'
            ]
        })
    }
};
