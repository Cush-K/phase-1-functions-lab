function distanceFromHqInBlocks(block) {
  const hq = 42;
    
  return Math.abs(block-hq);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block)*264;
}

function distanceTravelledInFeet(end, origin) {
     
  if (end>origin) {
    return (end-origin)*264;
  }
  else {
    return (origin-end)*264;
  }
}

function calculatesFarePrice (end, origin){

    const distance = distanceTravelledInFeet(end, origin);
    
       if (distance <= 400) {
        return 0;
      }
      else if (distance > 400 && distance <= 2000){
        return (distance-400) * 0.02;
      }
      else if (distance > 2000 && distance <= 2500){
        return 25;
      }
      else {
        return `cannot travel that far`
      }
}
