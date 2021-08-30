import { capitalizeFirstLetter } from "../scripts/capitalize";

test("capitalizes first letter", () => {
    expect(capitalizeFirstLetter("potato")).toBe("Potato");
})

test("Doesnt reverse capitalization", () => {
    expect(capitalizeFirstLetter("Potato")).toBe("Potato");
})
