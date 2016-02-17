
# escape-regex
  
  Escapes the RegExp special characters "^", "$", "\", "/", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|", ":", "!", and "=" in string.

## Example

```javascript
const escapeRegex   = require('escape-regex'),
      string        = '$tring:(Exemple!);

console.log(escapeRegex(string));
// > '\\$tring\\:\\(Exemple\\!\\)'
```

## License

  MIT