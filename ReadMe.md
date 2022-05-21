
# Website -breaker | [linkedin](https://www.linkedin.com/in/komlankodoh)

![Website breaker logo](https://res.cloudinary.com/dkoatnxem/image/upload/v1652274845/website-breaker/website-breaker_ohpshu.png)

## Purpose

Website breaker allows you to simulate a breaking effect on your webpages.

### Examples

An example usage on my personal portfolio.
![First example](https://res.cloudinary.com/dkoatnxem/image/upload/v1652237487/website-breaker/website-braker-preview-1_irqqoq.png)

An example usage on amazon's landing page.
![Second example](https://res.cloudinary.com/dkoatnxem/image/upload/v1652237491/website-breaker/website-breaker-preview-2_nx282w.png)

[Here](https://codesandbox.io/s/polished-bush-f7lup6) is a code sandbox in react for a more interactive experience.

## Installation

With [node and npm](https://nodejs.org/en/) installed, you can run:

```bash
npm i website-breaker
```

## Usage

Using website is very simple;

## Vanilla js

```js
// index.js

import breakWebPage from "website-breaker";

document.getElementById("dangerous-button")
        .addEventListener("click", () => breakWebPage());
```

```html
// index.html

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="button.css">
    <script src="index.js"></script>
</head>
<body>
    <button id="dangerous-button"></button>
</body>
</html>
```

## React

The following button will break the webpage-apart whenever its clicked.

```ts
import breakWebPage from "website-breaker";

export const BreakButton = () => {
  return (
    <button
      id="break-website-button"
      class="btn"
      // destroys the webpage wen clicked
      onClick={() => breakWebPage()}
    >
      Break Me
    </button>
  );
};
```

## Vue

```vue
<template>
   <div  class="button" @click="destroy" >
     Destroy the web-page
   </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import breakWebPage from "website-breaker";

export default defineComponent({
  name: "page-destroyer",
  props: {
    msg: String,
  },

  methods: {
    destroy(){
      breakWebPage();
    }
  }
});
</script>
```

## Others

While we only presented examples for vue and react, website-breaker is framework independent and would likely work with all of them.
