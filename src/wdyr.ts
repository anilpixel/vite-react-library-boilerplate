import whyDidYouRender from '@welldone-software/why-did-you-render'
import React from 'react'

if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    collapseGroups: true,
    exclude: [],
  })
}
