/**
 * @param sourceId
 * @param targetIds
 * @param n
 *
 * @return `n` IDs from `targetIds` that is closest to `sourceId` by XOR metric
 */
export declare function getClosestIdsByXor(sourceId: Uint8Array, targetIds: Uint8Array[], n?: number): Uint8Array[];
