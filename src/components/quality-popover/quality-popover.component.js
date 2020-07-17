import React, { Component } from 'react'
import CustomLink from 'components/custom-link'

export default class QualityPopover extends Component {
  constructor(props) {
    super(props)
    this.state = { activated: false }
    this.icon = React.createRef()
  }

  onClick() {
    this.setState(state => ({
      activated: !state.activated
    }))
    this.onPopoverToggle()
  }

  onKeyDown(event) {
    if (event.keyCode === 32) {
      event.preventDefault()
    } else if (event.keyCode === 13) {
      this.setState(state => ({
        activated: !state.activated
      }))
      this.onPopoverToggle()
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 32) {
      this.setState(state => ({
        activated: !state.activated
      }))
      this.onPopoverToggle()
    }
  }

  onPopoverToggle() {
    if (!this.state.activated) {
      document.getElementById('data-quality-popover').removeAttribute('hidden')
    } else {
      document.getElementById('data-quality-popover').setAttribute('hidden', 'true')
    }
  }

  render() {
    const iconClassName = 'icon icon-help-circled popper display-inline text-primary'
    return (
      <div className="tablet-lg:padding-top-0 padding-top-2">
        <div className="pin-right padding-right-105">
          <span className="data-quality-title text-bold font-body-2xs" id="data-quality-title">
            Data Quality Score
          </span>
          <div
            className={iconClassName}
            onClick={::this.onClick}
            ref={this.icon}
            onKeyDown={::this.onKeyDown}
            onKeyUp={::this.onKeyUp}
            tabIndex="0"
            aria-labelledby="data-quality-title"
            role="button"
          />
        </div>
        <div id="data-quality-popover" className="padding-top-3" hidden>
          <div className="z-top bg-base-lighter padding-1 radius-lg margin-bottom-neg-2">
            The Data Quality Score is determined by using the information provided by Agencies in
            their <CustomLink to="/about/compliance/inventory-code">code.json</CustomLink> and by
            factors such as completeness and adherence to the{' '}
            <CustomLink to="/about/compliance/inventory-code">metadata schema</CustomLink>.
          </div>
        </div>
      </div>
    )
  }
}
