document.addEventListener("DOMContentLoaded", () => {

    console.log('document loaded....')
    getBusinessNews()
    getCatImages()
    getUsers()


})

async function getBusinessNews() {

    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=65d65b2716db429895cbc3254a475c0e')
    const result = await response.json()
    console.log(result)
    console.log(result.articles)
    const myData = result.articles
    const newsEl = document.querySelector(".business_news")
    myData.forEach((item) => {

        const newsCard = document.createElement("div")
        const newsTitle = document.createElement("h3")
        const newsImg = document.createElement("img")
        const newsDescription = document.createElement("p")

        newsTitle.textContent = item.title
        newsImg.src = item.urlToImage
        newsImg.width = 250
        newsImg.height = 250
        newsDescription.textContent = item.description
        newsCard.appendChild(newsTitle)
        newsCard.appendChild(newsImg)
        newsCard.appendChild(newsDescription)

        newsEl.append(newsCard)

    })
}
async function getCatImages() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    const result = await response.json()
    console.log(result)
}
async function getUsers() {
    const response = await fetch('https://dummyjson.com/users')
    const result = await response.json()
    console.log(result)
}



const getData = async () => {
    const response = await fetch('https://dummyjson.com/users')
    const result = await response.json()
    console.log(result)


}

