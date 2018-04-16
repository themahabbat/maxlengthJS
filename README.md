# maxlengthJS
Javascript maxlength validator

## Installation
Include `jQuery`

Include `maxlength.css` and `maxlength.js`

## Usage
Give `jQuery` element selector to new `Maxlength` instance
```js
<script type="text/javascript">
// for all inputs
new Maxlength('input');

// for text type inputs
new Maxlength('input[type=text]');

// for inputs which have maxlength attribute
new Maxlength('input[maxlength]');

// for specific input
new Maxlength('#inputId');
</script>
```

## Customization
Write your own css code to `--maxlength` class
