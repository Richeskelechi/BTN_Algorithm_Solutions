

document.getElementById('text').addEventListener('keyup', count)

function count() {
    let text = document.getElementById('text').value
    let removeChar = text.replace(/[^A-Za-z]\s+/g, '')

    let newWord = removeChar.trim().split(" ").length
    let charLength = removeChar.trim().split("").length
    document.getElementById('word').innerHTML = newWord
    document.getElementById('char').innerHTML = charLength

    document.getElementById('text').value = removeChar.toUpperCase()
}