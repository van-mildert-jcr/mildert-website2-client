/* https://velite.js.org/guide/using-mdx#rendering-mdx-content */
import React from "react";
import * as runtime from 'react/jsx-runtime'

import { Mdx } from "@/types/mdx";

const globalMdxComponents = {

}

const useMDXComponent = (code: Mdx) => {
  const _function = new Function(code);
  return _function(runtime).default
}

type MdxProps = {
  code: Mdx,
  components?: Record<string, React.ComponentType>
}

export function MdxContent({ code, components, ...props }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...globalMdxComponents, ...components }} {...props} />
}
