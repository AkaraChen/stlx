/**
 * 
 * @param {string | Element | NodeList | HTMLCollection | Array<HTMLElement>} selectorOrHTMLElements 
 */
export const stlx = (selectorOrHTMLElements) => {
    /**
     * @type {HTMLElement[]}
     */
    let elements = typeof selectorOrHTMLElements === 'string'
        ? [...document.querySelectorAll(selectorOrHTMLElements)]
        : (Array.isArray(selectorOrHTMLElements)
            ? [...selectorOrHTMLElements]
            : [selectorOrHTMLElements]
        ).filter(item => {
            return item instanceof HTMLElement
        })
    return new Proxy({}, {
        get(_target, property, receiver) {
            return new Proxy(() => {}, {
                apply(_target, _thisArg, argsArray) {
                    for (const element of elements) {
                        element.style[property] = argsArray.join(' ')
                    }
                    return receiver
                }
            })
        }
    })
}

export default stlx
