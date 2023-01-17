/**
 * @vitest-environment jsdom
 */
import { test, expect } from "vitest"
import stlx from "."

function createElement() {
    return document.createElement('div')
}

test('index', () => {
    const element = createElement()
    stlx(element).width('100px')
    expect(element.style.width).toBe('100px')
})

test('chain', () => {
    const element = createElement()
    stlx(element)
        .width('100px')
        .height('200px')
    expect(element.style.width).toBe('100px')
    expect(element.style.height).toBe('200px')
})

test('number', () => {
    const element = createElement()
    stlx(element)
        .zIndex(1000)
    expect(element.style.zIndex).toBe('1000')
})

test('multiply args', () => {
    const element = createElement()
    stlx(element).border('2px', 'solid', 'black')
    expect(element.style.borderWidth).toBe('2px')
    expect(element.style.borderStyle).toBe('solid')
    expect(element.style.borderColor).toBe('black')
    expect(element.style.border).toBe('2px solid black')
})

test('multiply elements', () => {
    const element1 = createElement()
    const element2 = createElement()
    stlx([element1, element2]).width('100px')
    expect(element1.style.width).toBe('100px')
    expect(element2.style.width).toBe('100px')
})