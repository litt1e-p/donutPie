# DonutPie

Half donut pie chart which using [d3.js](https://d3js.org/) for vue

#### Installation

```js
npm i donut-pie
```

#### Usage

1. global registration

```js
// in main.js
import DonutPie from 'donut-pie'
// import 'donut-pie/dist/DonutPie.css'

Vue.use(DonutPie)
```

1. use as vue component

```js
// in your vue file
import { DonutPie } from 'donut-pie'

export default {
  components: {
    DonutPie
  }
  ...
}
```

### Configuration

```js
<donutPie v-model="your percent (eg. 60)" :title="'your title'" :remark="'your remark'"/>
```
for more detail

```js
<donutPie v-model="your percent (eg. 60)" :title="'your title'" :remark="'your remark'" :conf="{ width: 360, height: 200, thickness: 22, color: '#8888D3', bgColor: '#E9E9E9', percentColor: '#333', titleColor: 'rgba(0, 0, 0, 0.65)', titleTemplate: '<h1>title</h1>' disableCornerRadius: false}"/>
```


#### Screenshots

![](./screenshots/screenshot.gif)