# Included in this repo:

## all

```(anything [, ...anything]) => boolean```

  `true` if called with no falsy values.

## any

```(anything [, ...anything]) => boolean```

  `true` if called with one or more truthy values.

## concat

```(anything [, ...anything]) => array```

  Returns an array of all supplied values.

## flatten

```(array[array]) => array```

  Takes an array of arrays, and returns an array of all of the nested arrays' values.

## max

EITHER:
```(number [, ...number]) => number```

OR:
```(string [, ...string]) => number```

OR: 
```(array[number]) => number```

OR: 
```(array[string]) => number```


  Returns the highest supplied value.

## min

EITHER:
```(number [, ...number]) => number```
OR:
```(string [, ...string]) => number```
OR: 
```(array[number]) => number```
OR: 
```(array[string]) => number```

  Returns the lowest supplied value.

## percentage

```(number, number) => string```

  Returns a percentage to two decimal places. (First number as a percentage of the second number)

## reverse

```(array) => array```

  Returns a new version of the supplied array, with the values in reverse order.

## sort

```(array) => array```

  Returns a new version of the supplied array, with the values sorted.
