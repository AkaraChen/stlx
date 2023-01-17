type selectorOrHTMLElements = string | Element | NodeList | HTMLCollection | Array<HTMLElement>

type Stlx = {
    [index in keyof CSSStyleDeclaration]: (...args: Array<string | number>) => Stlx
}

export declare function stlx(selectorOrHTMLElements: selectorOrHTMLElements): Stlx

export default stlx