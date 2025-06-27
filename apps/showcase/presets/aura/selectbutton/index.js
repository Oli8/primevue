export default {
    root: ({ props }) => ({
        class: [
          'p-1 bg-surface-300 rounded inline-flex gap-1',
          { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
      ]
    }),
    label: {
        class: 'font-medium leading-[normal] text-center w-full z-10 relative'
    }
};
