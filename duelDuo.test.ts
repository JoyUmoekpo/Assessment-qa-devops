
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/')
})

afterAll(async () => {
    driver.quit()
})

describe('Duel Duo Test to check that ', () => {
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
    
    test('Clicking an “Add to Duo” button displays the div with id player-duo',
    async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(7000)
        await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
        const playerDivDuo = await driver.findElement(By.id('player-duo'))
        const display = await playerDivDuo.isDisplayed()
        expect(display).toBeTruthy()
    })
    
    test('Clicking on the draw button displays the div with id choices',
    async() => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(7000)
        const choiceContainer = await driver.findElement(By.id('choices'))
        const display = await choiceContainer.isDisplayed()
        expect(display).toBeTruthy()
    })

})