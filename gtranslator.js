const {Builder, By, until} = require(`selenium-webdriver`)
const chrome = require(`selenium-webdriver/chrome`)

let operationCenter = new Builder().forBrowser(`chrome`).setChromeOptions(new chrome.Options().headless()).build()
operationCenter.get(`https://translate.google.pl/#view=home&op=translate&sl=auto&tl=pl`)

module.exports = async function gt (content = {answers: ['0'], q: '0'}) {
    try {
        let result = {...content}
        console.log(result)
        result.answers = result.answers.map(x => {
            return {original: x, translated: ``}
        })
        result.q = {original: result.q, translated: ``}
        let comps = [...result.answers, result.q]

        for (let x = 0; x < comps.length; x++) {
            if (comps[x].original !== `*image*`) {
                const inElem = await operationCenter.findElement(By.css('.tlid-source-text-input'))
                inElem.clear()
                inElem.sendKeys(comps[x].original)
                const translationBy = By.css(`.tlid-translation`)
                const translationElem = await operationCenter.wait(until.elementLocated(translationBy), 4000);
                comps[x].translated = await translationElem.getText()
                await operationCenter.findElement(By.css('.tlid-clear-source-text')).click()
            } else {
                comps[x].translated = `*image*`
            }
        }
        return result
    }
    catch (err) {
        console.log(err)
    }
}