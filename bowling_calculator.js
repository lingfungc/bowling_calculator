const bowlingScore = (rolls) => {
  let score = 0;
  // i is the index for iterating every single score in the rolls array
  let i = 0;
  let frame = 1;

  // Sum up the total score until i is within all scores in rolls and frame is the 9th
  while (i < rolls.length - 1 && frame < 10) {
    // If it is a strike, there will be only 1 roll in that frame
    if (rolls[i] === 10) {
      score += rolls[i] + rolls[i + 1] + rolls[i + 2];
      i += 1;
      // If it is a spare and not-strike or not-spare, there will be 2 rolls in that frame
    } else if (rolls[i] + rolls[i + 1] === 10) {
      score += 10 + rolls[i + 2];
      i += 2;
    } else {
      score += rolls[i] + rolls[i + 1];
      i += 2;
    }
    frame += 1;
  };
  // When it comes to the 10th frame
  // In case of spare or strike, no more bonus is added
  // if the last frame is a spare, player rolls 1 bonus ball (3 rolls total)
  // if the last frame is a strike, player rolls 2 bonus balls (3 rolls total)
  // if neither a spare, nor a strike is scored, the player does not get the 3rd roll
  if (rolls[i] === 10 || rolls[i] + rolls[i + 1] === 10) {
    score += rolls[i] + rolls[i + 1] + rolls[i + 2];
  } else {
    score += rolls[i] + rolls[i + 1];
  }
  return score;
};

// rolls is an array storing every single score from frame 1 to 10
rolls = []

console.log(bowlingScore(rolls));
