import { For, Show } from "solid-js"

import type { ListValue } from "../value"
import Value from "./Value"


// export function List(props: { key: string, depth: number, value: ListValue }) {
//   const name = `list-${props.key}`
//
//   return (
//     <Show when={props.value.length > 0}>
//       <ul class={`list ${name}`} part={`list ${name}`}>
//         <For each={props.value}>
//           {(item, index) => (
//             <li id={`${props.key}-${index()}`} part={`list-item list-item-${props.key}`}>
//               {<Value key={props.key} depth={props.depth} value={item} />}
//             </li>
//           )}
//         </For>
//       </ul>
//     </Show>
//   )
// }

export function hashCode (str:string) {
  let hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}



export function List(props: { key: string, depth: number, value: ListValue }) {
  const name = `list-${props.key}`

  return (
    <Show when={props.value.length > 0}>
      <p class={`list ${name}`} part={`list ${name}`}>
        <For each={props.value}>
          {(item, index) => (
            <span id={`${props.key}-${hashCode(item!.toString()) % 10}`} part={`list-item list-item-${props.key}`}>
              {<Value key={props.key} depth={props.depth} value={item} />}
            </span>
          )}
        </For>
      </p>
    </Show>
  )
}
