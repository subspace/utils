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
### getClosestId(sourceId: Uint8Array, targetIds: Uint8Array[]): Uint8Array
Given a source ID and an array of target IDs returns one target ID that is closest to source ID.
