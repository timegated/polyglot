
function getInput(): string {
  return `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
}

console.log(getInput());

// procedural
function parseLine(line: string): [number, number] {
  const [dir, am] = line.split(" ");
  const amt = +am;

  if (dir === "forward") {
    return [amt, 0];
  } else if (dir === "up") {
    return [0, -amt];
  }
  return [0, amt];
}


const out = getInput().split('\n')
  .map(x => parseLine(x))
  .reduce((acc, amount) => {
    console.log(acc, amount)
    acc[0] += amount[0];
    acc[1] += amount[1];
    return acc;
  }, [0, 0]);

console.log(out, out[0] * out[1]);