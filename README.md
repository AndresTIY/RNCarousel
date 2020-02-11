# RNCarousel

Carousel Quick Tutorial

Essentially just following the steps provided by:
https://medium.com/@rossbulat/react-native-carousels-with-horizontal-scroll-views-60b0587a670c

### Purpose

Wanted to spin up a quick tutorial based on my morning Medium articles.

This one talks about creating horizontal scroll views and uses methods / props I'm not familiar with.

### Questions & Take Aways

WIP but need to review style properties I don't use often like:

```js
maxWidth;
flexBasis;
display;
flexWrap;
```

Also, why did the author pass in styles as a spread? Looking at Slides component:

```js
<Text style={{...styles.slideText}} />
```

Also Carousel component:

```js
<ScrollView contentContainerStyle={{ ...styles.scrollView, width: '100%'}}>
```

I understand the scrollView using it this way. It allows us to add another style property inline but passing an array could've accomplished the same:

```js
<ScrollView contentContainerStyle={[styles.scrollView, {width: '100%'}]}>
```
