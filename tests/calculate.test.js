import { calculate } from "../scripts/calculate"

test("calculate object can add", () => {
    expect(calculate.add(2, 3)).toBe(5)
})

test("calculate object can subtract", () => {
    expect(calculate.subtract(4, 3)).toBe(1)
})

test("calculate object can multiply", () => {
    expect(calculate.multiply(5, 4)).toBe(20)
})

test("calculate object can divide", () => {
    expect(calculate.divide(60, 5)).toBe(12)
})