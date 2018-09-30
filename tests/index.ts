import * as test from 'tape';
import {getClosestId} from '../src';

test('Turn servers', (t) => {
    t.plan(2);

    const sourceId = Buffer.from('f3fada9a3b8cf986ecb2f6e2d367dd9a011684aa5417a341beba11166f81ab93', 'hex');
    const targetIds = [
        Buffer.from('6fbeeb79d28c6921e571e754acc225dbde8fad0c438eaeb80cc1e8f79cfaa841', 'hex'),
        Buffer.from('1e8e70b2f9e3f574e43552cbf761a3dd07075869a7f42d613696780143e9e82d', 'hex'),
        Buffer.from('99642dadb37e9414ca63b393b3fd21571fc2d1eec707192176ddd7a20c3bef77', 'hex'),
        Buffer.from('0267c051fbf659adb1a3cc4425b13d51d7293e2aeba255d79ce2f795d0320d47', 'hex'),
    ];

    t.same(getClosestId(sourceId, targetIds), targetIds[2], 'Closest ID selected correctly');
    t.same(getClosestId(targetIds[1], targetIds), targetIds[1], 'Own ID is closest to itself');
});
