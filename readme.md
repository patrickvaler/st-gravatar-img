[![npm version](https://badge.fury.io/js/st-gravatar-img.svg)](http://badge.fury.io/js/st-gravatar-img) [![Build Status](https://travis-ci.org/patrickvaler/st-gravatar-img.svg?branch=master)](https://travis-ci.org/patrickvaler/st-gravatar-img) [![Dependency Status](https://david-dm.org/patrickvaler/st-gravatar-img/status.svg?style=flat)](https://david-dm.org/patrickvaler/st-gravatar-img)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# <st-gravatar-img>

A simple web component to display [gravatar] images based on [stencil].

Checkout the [Demo] / [Demo with Editor].

## Install this component

### By cdn

```html
<script src="https://unpkg.com/st-gravatar-img@latest/dist/st-gravatar-img.js"></script>
```

### By npm (self hosted)

```bash
npm install st-gravatar-img --save
```

```html
<script src="node_modules/st-gravatar-img/dist/st-gravatar-img.js"></script>
```

## Use this component

```html
<!-- by md5 hash of your email -->
<st-gravatar-img hash="322b70sg015ith31u69b49cc1c81315f"></st-gravatar-img>
<!-- or by email -->
<st-gravatar-img email="my@email.com"></st-gravatar-img>
```

## Attributes

| Attribute | Type     | Default | Description                                                |
| --------- | -------- | ------- | ---------------------------------------------------------- |
| `hash`    | _string_ | _none_  | MD5 hash of your email (avoid to expose your email)        |
| `email`   | _string_ | _none_  | Gravatar account email (**warning** email will be exposed) |
| `size`    | _number_ | `120`   | Size (px) of the image                                     |

## CSS Variables

[CSS Variables][css-variables] can be used to style the web component:

### Available variables

| Attribute                      | Default | Description                                            |
| ------------------------------ | ------- | ------------------------------------------------------ |
| `--gravatar-img-border`        | _none_  | Defines `border` property of the `img` element         |
| `--gravatar-img-border-radius` | _none_  | Defines `border-radiues` property of the `img` element |
| `--gravatar-img-background`    | _none_  | Defines `background` property of the `img` element     |

### Example usage

```css
:root {
  --gravatar-img-border: 10px solid #a52525;
  --gravatar-img-border-radius: 100%;
  --gravatar-img-background: #a52525;
}
```

## How to create a hash

Images on [Gravatar] can be accessed by a `MD5` hash of your email address.

### How to use `createHash` method

This web component offers the possibility to create a hash based on your email address by the exposed `createHash` method.

```javascript
let gravatarImg = document.querySelector('st-gravatar-img');

// method is available when component is ready
gravatarImg.componentOnReady().then(() => {
  // create hash
  const hash = gravatarImg.createHash('my@email.ccom');
  // now you can apply the hash on the web component
  gravatarImg.setAttribute('hash', hash);
});
```

[stencil]: https://stenciljs.com/
[gravatar]: https://gravatar.com/
[css-variables]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
[demo]: https://st-gravatar-img-vanilla-js.stackblitz.io/
[demo with editor]: https://stackblitz.com/edit/st-gravatar-img-vanilla-js
