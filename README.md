React Social Tag (Rio)

A set of beautiful svg social icons. Easily used in React. No images or external css dependencies. Example

icons for all social networks configured in this library

Install
npm install rio-social-url
yarn add rio-social-url
pnpm add rio-social-url
Usage
Pass in the url prop of your social network, and the icon will be rendered.

import React from 'react'
import ReactDOM from 'react-dom'
import { RioSocialTag } from "rio-social-url";

const Component = <RioSocialTag url="https://www.youtube.com/watch?v=z-ddXPHNjWA" />
// React v16
ReactDOM.render(Component, document.body)
// React v17+
ReactDOM.createRoot(document.body).render(Component)
See more usage options on the example site.

This library supports TypeScript since v5.2.0. (type declarations)

Code Splitting and Tree Shaking
Reduce the size of bundled code from this library by importing the SocialIcon component directly and only importing the icons you need. Bundled code using only one icon will be 20 times smaller, or about 5% of the full library's size (from 26.3kb for all icons to as small as 1.5kb for one icon). The size of the bundled library will scale linearly with each icon you import. Many bundlers will tree shake the unused icons from the final code-split bundle.