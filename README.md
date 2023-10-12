# VTL
🪵 Vue Telegram Logger - small package for Vuejs to send your messages to Telegram group. You can use it for any purpose, e.g to send error logs of your Vue app to Telegram. This way you will get a fast response to errors from users.

## Install

Via package managers
```sh
$ npm install vtl

# yarn
$ yarn add vtl
```

## Usage

```js
import { Vtl } from 'vtl'

Vue.use(Vtl, options)

```

## Example

#### Sending message

```js
// SomeVueComponent.vue

<script>
import { inject } from 'vue

const $vtl = inject('$vtl')

$vtl.sendLog('Your message')

</script>
```

## Options
| Param                           | Default value | Required | Description                                              |
|:--------------------------------|:--------------|:---------|:---------------------------------------------------------|
| chatId `string or number`       | -             | true     | Your chat id where messages will be sent                 |
| token `string`                  | -             | true     | Telegram bot token                                       |
| shouldBeFormatted `boolean`     | false         | false    | If set to true, message will be sent as monospace format |

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, aslbekkucharov
