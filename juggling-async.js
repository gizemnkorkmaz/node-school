const http = require('http')

const first_url = process.argv[2]
const second_url = process.argv[3]
const third_url = process.argv[4]

async function getData(first_url, second_url, third_url) {
    let data = []
    let count = 0

    function getHttpData(url, index) {
        http.get(url, (response) => {
            let dataChunk = ''
            response.setEncoding('utf8')
            response.on('data', (chunk) => {
                dataChunk += chunk
            })
            response.on('end', () => {
                data[index] = dataChunk
                count++
                if (count === 3) {
                    data.forEach((d) => {
                        console.log(d)
                    })
                }
            })
            response.on('error', console.error)
        })
    }

    getHttpData(first_url, 0)
    getHttpData(second_url, 1)
    getHttpData(third_url, 2)
}

getData(first_url, second_url, third_url)