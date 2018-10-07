/**
 * @param sourceId
 * @param targetIds
 *
 * @return ID from `targetIds` that is closest to `sourceId` by XOR metric
 */
export declare function getClosestIdByXor(sourceId: Uint8Array, targetIds: Uint8Array[]): Uint8Array;
