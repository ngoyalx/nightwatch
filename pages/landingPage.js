const commanCommands = {
    waitandclick(element) {
        this.waitForElementVisible(element, 4000)
            .click(element);
        return this;
    },
    verifyIfElementVisible(element){
        this.expect.element(element).to.be.visible;
        return this;
    }
}

module.exports = {
    url: 'https://www.binance.com/',
    commands: [commanCommands],
    elements: {
        view_more_markets_link: "[aria-label='markets']",
        ETH_BTC_button: "a[href='/en/trade/ETH_BTC']",
        BTC_price_panel: "div[class='sc-1d711xa-1-Connect-t dQyYZH sc-62mpio-0 mfSTq']",
        trading_chart: "div[class='sc-1t2bpae-0 OXkQZ']",
        pair_trading_panel: "div[class='sc-62mpio-0 sc-1ibkj7-17 ibFEWW']",
        limit: "div[class='sc-62mpio-0 sc-1n3jmzh-0 jLZRFz']"
    }
}