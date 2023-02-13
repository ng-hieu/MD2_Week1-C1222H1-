const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]
let tong = 0

let inventoryItem = inventory.filter((item)=>{
    if(item.type === 'machine'){
        return item
    }
})


// Cach 1 : dung map, khong reduce
 inventoryItem.map((item)=>{
    return tong += item.value
})
console.log(tong)


// Cach 2 : dung reduce va map

let result = inventoryItem.map((item)=>{
    // console.log(item)
    return item.value
}).reduce((current,total)=>{
    return current + total
})
console.log(result);