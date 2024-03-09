# @mayurphumatiya/calendar-ts

![image](https://github.com/mayurphumatiya/calendar-ts/assets/98944957/4afb8fe3-e020-4706-9a17-53d1c2b3a114)


Calendar-ts is a visually stunning calendar solution that allows developers to effortlessly integrate eye-catching calendars into their projects. With customizable styles options, developers can tailor the look and feel to suit their needs perfectly. Seamlessly manage dates and perform operations with ease, making it the perfect tool for any project requiring a stylish and functional calendar interface.
## tl;dr

Install `@mayurphumatiya/calendar-ts` with npm

- Install by executing npm install react-calendar or yarn add react-calendar.
- Import by adding import Calendar from 'react-calendar'.
- Use by adding `<Calendar />`. Use `getCurrDate` prop for getting new values.

## DEMO

[Online demo](https://calendar-ts-three.vercel.app/) is also available!

# Getting started

### Compatibility
Your project needs to use **React 16.8** or later.

`@mayurphumatiya/calendar-ts` uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of supporting only modern browsers.

### Legacy browsers
If you need to support legacy browsers like Internet Explorer 10, you will need to use Intl.js or another Intl polyfill along with `@mayurphumatiya/calendar-ts`.

My locale isn't supported! What can I do?
If your locale isn't supported, you can use Intl.js or another Intl polyfill along with `@mayurphumatiya/calendar-ts`.

### Installation
Add @mayurphumatiya/calendar-ts to your project by executing `npm install @mayurphumatiya/calendar-ts` or `yarn add @mayurphumatiya/calendar-ts`.

### Usage
Here's an example of basic usage:

```jsx
import { useState } from "react";
import Calendar from "react-calendar";

function MyApp() {
  const getdate = (selectedDate: Date) => {
    console.log("SELECTED DATE", selectedDate);
  };

  return (
    <>
      <Calendar getCurrDate={getdate} />
    </>
  );
}

```


Check the [sample](https://github.com/mayurphumatiya/calendar-ts) directory in this repository for a full working example.

# User guide

**Calendar**  
Displays a complete, interactive calendar.

| Prop name                                      | Description                                 | Default value |
|---|---|---|
| getCurrDate                                                                             | A callback function that receives the selected date when a date is clicked on the calendar. |   |
| bgColor | Specifies the background color of the calendar component | black |
text | Specifies the text color of the calendar component | white |
borderWidth | Specifies the border width of the calendar component | 1px |
dateHeight | Specifies the height of the date in calendar component | 5rem |
currDateBg | Specifies the color of the current date and days in calendar component | pink



# License

THE ISC License.

# Author

<a href="https://github.com/mayurphumatiya/mayurphumatiya/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mayurphumatiya/mayurphumatiya" />
</a>

[MAYUR PHUMATIYA](https://github.com/mayurphumatiya)

# Contributors
🚀 We welcome contributors of all skill levels to join us in building something amazing together! Whether you're a seasoned developer or just starting out, there's a place for you in our community. Join us in shaping the future of our project and making a positive impact on the lives of users around the world. Together, let's create something truly special!

# Thank You
