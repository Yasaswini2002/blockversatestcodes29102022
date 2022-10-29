function toArray(obj) 
{
    var arr = [];
    for (var key in obj) 
    {
        if (!obj.hasOwnProperty(key)) continue;
        arr.push([key, obj[key]]);
    }
    return arr;
}
console.log(toArray({ a: 1, b: 2 }));
