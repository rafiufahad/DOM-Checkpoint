import {formatCurrency} from "../../script/utils/money.js";

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('converts cents into', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })
})