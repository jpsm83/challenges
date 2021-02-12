let rover1 = {
    direction: 'n',
    x: 0,
    y: 0,
    travelLog: [{direction: 'n', x:0, y:0}]
}

function moveForward(rover) {
    switch (rover.direction) {
        case 'n': rover.y--;
        break;
        case 'w': rover.x--;
        break;
        case 's': rover.y++;
        break;
        case 'e': rover.x++;
        break;
    };
    let newDirection = {
      direction: rover.direction,
      x: rover.x,
      y: rover.y
  };
  rover.travelLog.push(newDirection);
  console.log('moveForward was called');
}
moveForward(rover1);
console.log(rover1.travelLog);
