# html-docx-ts

[![NPM version][npm-image]][npm-url]

> Origin [html-docx-js](https://www.npmjs.com/package/html-docx-js) ,Rewrite [html-docx-js-typescript](https://www.npmjs.com/package/html-docx-js-typescript) .

Convert HTML documents to docx format with header and footer.

## Installing

```
npm install html-docx-ts --save-dev
```

## Usage

Support node.js and browser enviroment, including vue/react/angular.

#### Example:

```js
import { asBlob } from 'html-docx-js-typescript'
import { saveAs } from 'file-saver' //save the file
function exportDocx() {
  //set the config
  const HtmlStr = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <title>testTitle</title>
<body>
    <div>
        testContext
    </div >
</body >
</html >`
  const option = { orientation: 'portrait', margins: {} }
  const headerConfig = {
    leftStr: 'headerLeft',
    centerStr: 'headerCenter',
    rightStr: 'headerRight',
  }
  const footerConfig = {
    leftStr: 'footerLeft',
    centerStr: 'footerCenter',
    rightStr: 'footerRight',
  }

  asBlob(HtmlStr, option, headerConfig, footerConfig).then(blobData => {
    saveAs(blobData, `testDocument.docx`) // save as docx document
  })
}
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/html-docx-ts?color=%23E6F0FD
[npm-url]: https://www.npmjs.com/package/html-docx-ts
