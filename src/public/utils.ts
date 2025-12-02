export function getColorByName(name: string): string {
  if (!name) return '#FED7AA;'; // default color if empty

  const firstLetter = name[0]!.toLowerCase();

  if ('abc'.includes(firstLetter)) {
    return '#FEF08A;'; // group 1
  } else if ('def'.includes(firstLetter)) {
    return '#FBCFE8;'; // group 2
  } else if ('ghi'.includes(firstLetter)) {
    return '#BFDBFE;'; // group 3
  } else if ('jkl'.includes(firstLetter)) {
    return '#BBF7D0;'; // group 4
  } else if ('mno'.includes(firstLetter)) {
    return '#E9D5FF;'; // group 5
  } else {
    return '#FED7AA;'; // group 6 (p-z or anything else)
  }
}

export function getRandomAngle(): string {
  const luckyNum = Math.random();

  const returnValue = luckyNum > 0.5 ? 'rotate(2deg);' : 'rotate(-2deg);';

  return returnValue;
}
