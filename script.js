function converterDollar(){
    const som = document.querySelector('#som').value
    const dollar = document.querySelector('#dollar').value
    const calc = document.querySelector('.out')
        result = som / dollar
        calc.innerHTML = result
}