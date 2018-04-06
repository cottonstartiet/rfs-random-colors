# rfs-random-colors
Get random colors (material colors) or random shades of a particular color.

## How to use
Include the module in your code:
```
const { getRandomColor, getRandomShade, colors } = require("rfs-random-colors");
```

To get a random color:
```
console.log(getRandomColor()); // #388e3c
```

To get a random shade of a particular color:
```
console.log(getRandomShade(colors.Indigo)); // #5c6bc0
```

## Supported Colors
For easy of use, you can use the predefined supported colors
1. Red
2. Pink
3. Purple
4. DeepPurple
5. Indigo
6. Blue
7. LightBlue
8. Cyan
9. Teal
10. Green
11. LightGreen
12. Lime
13. Yellow
14. Amber
15. Orange
16. DeepOrange
17. Brown
18. Grey