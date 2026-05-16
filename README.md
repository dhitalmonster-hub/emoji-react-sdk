# emoji-react-sdk

TypeScript SDK for on-chain emoji reactions on the Stacks blockchain — react, aggregate, query top reactions.

## Install

```bash
npm install emoji-react-sdk
```

## Usage

```ts
import { buildReadOnlyUrl, parseContractId } from 'emoji-react-sdk';

const contract = parseContractId('SP20Z3WPE6PVN1B8APDQNDH5BR1AJNMR25QPCSGFT.emoji-react');
if (contract) {
  const url = buildReadOnlyUrl({ contract, functionName: 'get-reaction' });
  console.log(url);
}
```

## What's inside

- `constants` — network endpoints, project-specific defaults
- `utils` — address/contract-name validation, parsing, formatting, STX conversion
- `contract` — read-only call URL helpers
- `types` — `Reaction` and related shapes

## Scripts

```bash
npm test           # vitest run
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # tsup → dist/
```

## License

MIT
