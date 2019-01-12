import React from 'react'
import CustomLink from 'components/custom-link'

export default function PrimaryMenuOption({ menuOption, onClick }) {
  const textContent = menuOption.name
  if (menuOption.url) {
    return (
      <CustomLink
        to={menuOption.url}
        role="menuitem"
        /* onClick={this.closeAllMenus} */
      >
        {textContent}
      </CustomLink>
    )
  }
  return (
    <a
      aria-haspopup="true"
      tabIndex="0"
      role="menuitem"
      onClick={event => {
        event.preventDefault()
        onClick(menuOption, event)
      }}
    >
      {textContent}
    </a>
  )
}
