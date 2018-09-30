/**
 * @param sourceId
 * @param targetIds
 * @param n
 *
 * @return `n` IDs from `targetIds` that is closest to `sourceId` by XOR metric
 */
export function getClosestIdsByXor(sourceId: Uint8Array, targetIds: Uint8Array[], n: number = 1): Uint8Array[] {
    const idLength = sourceId.length;
    return targetIds
        .slice() // Make copy of the array and don't mutate original one
        .sort((id1: Uint8Array, id2: Uint8Array): number => {
            for (let byteOffset = 0; byteOffset < idLength; ++byteOffset) {
                const diff = (sourceId[byteOffset] ^ id1[byteOffset]) - (sourceId[byteOffset] ^ id2[byteOffset]);
                if (diff !== 0) {
                    return diff;
                }
            }
            return 0;
        })
        .slice(0, n);
}
