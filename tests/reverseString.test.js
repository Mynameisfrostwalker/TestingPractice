import { reverseString } from '../scripts/reverseString';

test("reverses string", () => {
    expect(reverseString("potato")).toBe("otatop");
})

test("respects capitalization", () => {
    expect(reverseString("Potato")).toBe("otatoP");
})