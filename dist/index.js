"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param sourceId
 * @param targetIds
 * @param n
 *
 * @return `n` IDs from `targetIds` that is closest to `sourceId` by XOR metric
 */
function getClosestIdsByXor(sourceId, targetIds, n = 1) {
    const idLength = sourceId.length;
    return targetIds
        .slice() // Make copy of the array and don't mutate original one
        .sort((id1, id2) => {
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
exports.getClosestIdsByXor = getClosestIdsByXor;
//# sourceMappingURL=index.js.map