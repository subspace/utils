# Subspace Utils
Various utility functions used by other Subspace libraries.

## How to install
```
npm install @subspace/utils
```

## How to use
TypeScript:
```typescript
import {getClosestId} from '@subspace/utils';
```

## API
### getClosestIdsByXor(sourceId: Uint8Array, targetIds: Uint8Array[], n: number = 1): Uint8Array
Given a source ID and an array of target IDs returns `n` target ID that are closest to source ID by XOR metric.
