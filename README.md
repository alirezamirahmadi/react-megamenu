# <p align="center">React Mega Menu</p>

<p align="center">
<img height="30" alt="typescript" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg">
<img height="30" alt="react" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg">
</p>


![NPM Downloads](https://img.shields.io/npm/dw/react-megamenu)
![npm package minimized gzipped size](https://img.shields.io/bundlejs/size/react-megamenu)
![NPM Version](https://img.shields.io/npm/v/react-megamenu)


### It's a mega menu component on React. It comes with features like fullwidth, call to action button, image, and responsible for mobile/tablet device.


## Features:

- fullwidth mode
- CTA button
- image
- responsible for mobile/tablet

<br/>

## Table of contents

- [Install](#install)
- [Attention](#attention)
- [Usage](#usage)
- [API](#api)
    - [ReactMegaMenu](#reactmegamenu)
    - [Menu Options](#menu-options)
    - [CSS Classes](#css-classes)
- [Item Icon](#item-icon)
- [Opttions](#options)
- [License](#license)

## Install

`npm i react-megamenu`

## Attention
### ReactMegaMenu component must use between **`BrowserRouter`** tag

## Usage

#### simple mega menu

``` js
import ReactMegaMenu from 'react-megamenu-responsive';
import type { MenuType } from 'react-megamenu-responsive';

const menu: MenuType[] = [
  {
    id: "1",
    title: "Phone",
    href: "#",
    items: [
      { id: "1", title: "Phone 9", href: "#" },
      { id: "2", title: "Phone 10", href: "#" },
      { id: "3", title: "Phone 11", href: "#" },
    ],
    description: "my phones are very useful",
  },
  {
    id: "2",
    title: "Monitor",
    href: "#",
    items: [
      { id: "1", title: "Monitor m1", href: "#" },
      { id: "2", title: "Monitor m2", href: "#" },
    ]
  },
  {
    id: "3",
    title: "Laptop",
    href: "#",
    items: [
      { id: "1", title: "Laptop l1", href: "#" },
      { id: "2", title: "Laptop l2", href: "#" },
      { id: "3", title: "Laptop l3", href: "#" },
    ]
  },
]

export default function Example() {
  return (
    <BrowserRouter >
      <ReactMegaMenu menus={menu} />
    </BrowserRouter>
  )
}
```

## API

#### ReactMegaMenu

#### The component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`direction`**|lrt \| rtl \| inherit|Direction used to describe direction of menu.
|**`menus`**|array|Used to describe menus. Must be either an array of objects describing a menu. (This field is required)
|**`options`**|object|Options used to describe mega menu.


#### Menu Options

|Name|Type|Default|Description
|:--:|:-----|:--|:-----|
|**`color`**|object||User provided colors to customized menu.
|**`fullWidth`**|boolean|false|Possible values:<p><ul><li>true: Mega menu is fullwidth.</li><li>false: Mega menu is not fullwidth.</li></ul></p> [Example](https://github.com/alirezamirahmadi/react-megamenu/blob/master/examples/fullWidthExample/FullWidthExample.tsx)
|**`image`**|object||User provided image to customized menu. [Example](https://github.com/alirezamirahmadi/react-megamenu/blob/master/examples/imageExample/ImageExample.tsx)
|**`CTA`**|object||User provided CTA button to customized menu. [Example](https://github.com/alirezamirahmadi/react-megamenu/blob/master/examples/CTAExample/CTAExample.tsx)

#### CSS Classes

These class names are useful for styling with CSS. They are applied to the component.

|Name|Description
|:--:|:-----|
|**`rmm-megamenu-main`**|Styles applied to the mega menu|
|**`rmm-megamenu-menu`**|Styles applied to the menu|
|**`rmm-megamenu-cta`**|Styles applied to the CTA section|
|**`rmm-megamenu-cta__title`**|Styles applied to the CTA title|
|**`rmm-megamenu-cta__des`**|Styles applied to the CTA description|
|**`rmm-megamenu-img`**|Styles applied to the image section|
|**`rmm-megamenu-img__title`**|Styles applied to the image title|
|**`rmm-menu-main`**|Styles applied to the each of the menus |
|**`rmm-menu-head`**|Styles applied to options of the header of menu|
|**`rmm-menu-head__icon`**|Styles applied to the header icon|
|**`rmm-menu-head__link`**|Styles applied to the header link|
|**`rmm-menu-head__title`**|Styles applied to the header title|
|**`rmm-menu-head__des`**|Styles applied to the header description|
|**`rmm-menu-ul`**|Styles applied to the items|
|**`rmm-menu-item`**|Styles applied to the each of the items|
|**`rmm-menu-item__icon`**|Styles applied to the item icon|
|**`rmm-menu-item__link`**|Styles applied to the item link|
|**`rmm-menu-item__title`**|Styles applied to the item title|

## Item Icon

On each item and menu object, you have the ability to choose icon to your liking with the 'icon' property. Example:

```js
const menu: MenuType[] = [
  {
    id: "1",
    title: "Phone",
    href: "#",
    icon: <svg>...</svg>,
    items: [
      {
        id: "1", title: "Phone 9", href: "#", icon: <svg>...</svg>,
      },
      {
        id: "2", title: "Phone 10", href: "#", icon: <svg>...</svg>,
      },
      {
        id: "3", title: "Phone 11", href: "#", icon: <svg>...</svg>,
      },
    ],
    description: "my phones are very useful",
  }
]
```

## Options

#### Change default options

``` js
const defaultOptions: OptionType = {
  color: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    headTitle: "#2563eb",
    description: "#2563eb",
    itemTitle: "#6b7280",
  },
  fullWidth: false,
}
```

## License

### The files included in this repository are licensed under the MIT license.
