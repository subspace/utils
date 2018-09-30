/**
 * @param sourceId
 * @param targetIds
 *
 * @return Id from `targetIds` that is closest to `sourceId` by XOR metric
 */
export function getClosestId(sourceId: Uint8Array, targetIds: Uint8Array[]): Uint8Array {
    const idLength = sourceId.length;
    let closestId: Uint8Array = targetIds[0];
    let closestIdXor = xorIds(sourceId, closestId);
    let currentId: Uint8Array;
    let currentIdXor: Uint8Array;

    for (let length = targetIds.length, i = 1; i < length; ++i) {
        currentId = targetIds[i];
        currentIdXor = xorIds(sourceId, currentId);
        for (let byteOffset = 0; byteOffset < idLength; ++byteOffset) {
            const diff = closestIdXor[byteOffset] - currentIdXor[byteOffset];
            if (diff > 0) {
                // Current ID is closer
                closestId = currentId;
                closestIdXor = currentIdXor;
                break;
            }
            if (diff < 0) {
                // Current ID is further
                break;
            }
        }
    }

    return closestId;
}

function xorIds(id1: Uint8Array, id2: Uint8Array): Uint8Array {
    return Uint8Array.from(
        id1.map((byte, byteOffset) => {
            return byte ^ id2[byteOffset];
        }),
    );
}
