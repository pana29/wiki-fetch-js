const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=;';
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');


btn.addEventListener('click', (e) => {
    let searchTerm = inputVal.value || 'JavaScript'
    let tempURL = url + searchTerm;
    console.log(tempURL)
    fetch(tempURL)
    .then((rep) => {
        return rep.json()
    })
    .then((data) =>{
        output.innerHTML = '<div> Results for' + searchTerm ;
        output.innerHTML += `Total Results : ${data.query.searchinfo.totalhits} <br>`
        maker(data.query.search)
    })
})

function maker(data){
    console.log(data)
    
    data.forEach((el) =>{
        console.log(el)
        const div =  document.createElement('div');
        div.innerHTML += `<h3>${el.title}</h3>`
        div.innerHTML += `<div>Page ID ${el.pageid} | Size ${el.size} | WordCount ${el.wordcount}</div>`
        div.classList.add('box')
        div.innerHTML += el.snippet
        output.append(div)
    })
}