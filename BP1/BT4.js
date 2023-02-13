let checkCollision = (objects, point) => {
    return objects.find((object) => {
        if (point.x >= object.x && point.x <= object.x + object.width &&
            point.y >= object.y && point.y <= object.y + object.height) {
            return object
        }
    })
}

const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]
// console.log(myObjects.find(checkCollision(myObject
// s, {x:4, y:2})));
console.log(checkCollision(myObjects, {x: 4, y: 2}))