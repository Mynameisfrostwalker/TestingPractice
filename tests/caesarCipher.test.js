import { encode } from '../scripts/caesarCipher';

test("Encodes sentences", () => {
    expect(encode("abcdef")).toBe("nopqrs");
});

test("wrapping from a-z", () => {
    expect(encode("zyxwvu")).toBe("mlkjih")
})

test("does not alter capitalization", () => {
    expect(encode("I Like Potatoes")).toBe("V Yvxr Cbgngbrf")
})

test("does not alter punctuation", () => {
    expect(encode(
        "If there was anything he truly loved, it was the humble potato."
        )).toBe(
            "Vs gurer jnf nalguvat ur gehyl ybirq, vg jnf gur uhzoyr cbgngb."
            )
})
