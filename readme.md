#FractionJS

分数の計算を行います。
例
1/3 + 1/2

```
var a = new fraction("1/3");
var b = new fraction(1,2);

var ans = a["+"](b);
console.log(ans.toString()) //-> 5/6
```

2/3 * 4/5を小数で
```
var a = new fraction("2/3");
var b = new fraction(4,5);

var ans = a["*"](b)["="];
console.log(ans) //-> 0.5333333333333333
```

##イケてるメソッドたち
### "+"
#### 足し算！説明不要！

### "-"
### "*"
### "/"
### わかるやろ説明せんぞ