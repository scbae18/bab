import { Icon } from '../Icon/Icon'
import { searchBar, searchIcon, searchInput } from './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = '메뉴, 식당, 동네 검색',
}: SearchBarProps) {
  return (
    <div className={searchBar}>
      <Icon name="search" size={18} className={searchIcon} />
      <input
        className={searchInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
