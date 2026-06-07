import { tag, tagHighlight } from './Tag.css'

interface TagProps {
  children: string
  highlight?: boolean
}

export function Tag({ children, highlight = false }: TagProps) {
  return (
    <span className={`${tag}${highlight ? ` ${tagHighlight}` : ''}`}>
      {children}
    </span>
  )
}
