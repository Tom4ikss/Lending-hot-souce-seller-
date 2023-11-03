window.onload = () => {
    const tickerList = document.getElementsByClassName('ticker')
    console.log(tickerList)
    createTicker(tickerList[0], 698, 78, [0, 0, 0, 0])
    createTicker(tickerList[1], 1397, 78, [1, 1, 0, 1])
    createTicker(tickerList[2], 1397, 78, [1, 1, 0, 1])
}

function createTicker(ticker, w, h, border) {
    const ticker_wrapper = document.createElement('div')
    ticker_wrapper.classList = ['ticker__wrapper']
    ticker.style.height = h + 'px'
    ticker.style.width = w + 'px'
    if(border) {
        const borderArr = ['border-left', 'boder-right', 'border-top', 'border-bottom']
        ticker.style.border = '1px solid'
        for(let i = 0; i < border.length; i++) {
            if(!border[i]) {
                ticker.style[borderArr[i]] = 'none'
            }
        }
    }
    const iter = Math.trunc(w/200)
    for(let i = 0; i < iter; i++) {
        const ticker_item = document.createElement('div')
        ticker_item.classList = ['ticker__item']
        ticker_item.innerHTML = 'PUT SOME FIRE IN YOUR BELLY'
        const img = document.createElement('img')
        img.src = './assets/Group.png'
        ticker_item.appendChild(img)
        ticker_wrapper.appendChild(ticker_item)
    }
    ticker.appendChild(ticker_wrapper)
    console.log(ticker)
}

