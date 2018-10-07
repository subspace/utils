import {randomBytes} from 'crypto';
import {performance} from 'perf_hooks';
import {getClosestIdByXor} from '../src';

console.log('Preparing input data...');
const sourceId = Uint8Array.from(Buffer.from('f3fada9a3b8cf986ecb2f6e2d367dd9a011684aa5417a341beba11166f81ab93', 'hex'));
const targetIds: Uint8Array[] = [];
for (let i = 0; i < 10 ** 6; ++i) {
    targetIds.push(
        Uint8Array.from(randomBytes(32)),
    );
}

console.log('Benchmarking...');
for (let i = 0; i < 5; ++i) {
    const start = performance.now();
    getClosestIdByXor(sourceId, targetIds);
    const duration = performance.now() - start;
    console.log(`Found closest ID from 10^6 options in ${duration}ms, run #${i + 1}`);
}
