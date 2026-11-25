const line = 'I was trained on all of human comedy and I am still funnier than the guy who scheduled this demo.';

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

const args = new Set(process.argv.slice(2));

function hasFlag(flag: string): boolean {
  return args.has(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
