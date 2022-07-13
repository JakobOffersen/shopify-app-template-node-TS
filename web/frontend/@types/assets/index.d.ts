import React from 'react'

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
}

declare module '*.jpg' {
  const content: string
}

declare module '*.png' {
  const content: string
}

declare module '*.json' {
  const content: string
  export default content
}
