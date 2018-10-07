/**
 * @param sourceId
 * @param targetIds
 *
 * @return ID from `targetIds` that is closest to `sourceId` by XOR metric
 */
export function getClosestIdByXor(sourceId: Uint8Array, targetIds: Uint8Array[]): Uint8Array {
    const idLength = sourceId.length;
    let closestIdByXor = targetIds[0];
    for (const targetId of targetIds) {
        for (let byteOffset = 0; byteOffset < idLength; ++byteOffset) {
            const diff = (sourceId[byteOffset] ^ closestIdByXor[byteOffset]) - (sourceId[byteOffset] ^ targetId[byteOffset]);
            if (diff === 0) {
                continue;
            }
            if (diff > 0) {
                closestIdByXor = targetId;
            }
            break;
        }
    }
    return closestIdByXor;
}
