"use strict"
const uzs = document.querySelector('#uzs')
const usd = document.querySelector('#usd')
uzs.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()

    request.open('get', 'json/current.json')
    request.setRequestHeader('content-type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.response)
            usd.value = (uzs.value / data.current.usd).toFixed(2)
        } else {
            usd.value = 'Something went wrong'
        }
    })
})