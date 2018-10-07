# Subspace Utils
Various utility functions used by other Subspace libraries.

## How to install
```
npm install @subspace/utils
```

## How to use
TypeScript:
```typescript
import {getClosestIdByXor} from '@subspace/utils';
```

## API
### getClosestIdByXor(sourceId: Uint8Array, targetIds: Uint8Array[]): Uint8Array
Given a source ID and an array of target IDs returns target ID that are closest to source ID by XOR metric.
