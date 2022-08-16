import { defineComponent, h, PropType, toRefs } from "vue";
import 'uno.css'

export type FColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'

export type FSize = "small" | "medium" | "large";

export const props = {
  color: {
    type: String as PropType<FColor>,
    default: 'blue'
  },
  size: {
    type: String as PropType<FSize>,
    default: "medium",
  },
  icon: {
    type: String,
    default: "",
  },
}

// export default defineComponent({

//   name: "JSXButton",
//   render() {
//     return <button>JSX Button</button>;
//   },

// });

export default defineComponent({
  name: 'JSXButton',
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => (
      <button
        class={`
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          px-${size[props.size].x}
          py-${size[props.size].y}
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer
          m-1
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        { slots.default ? slots.default() : '' }
      </button>
    )
  }
})
