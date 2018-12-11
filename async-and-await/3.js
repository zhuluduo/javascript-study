const { baseUrl } = require('./_baseUrl')

const fetch = require('node-fetch')

const demo = async () => {
    const url = baseUrl + '/base'
    const res = await fetch(url)
    const resData = await res.json()
    return await resData.data.name
}

demo()
.then(name => {
    console.log(name)
    // liyang
})