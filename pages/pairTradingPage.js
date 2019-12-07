const commanCommands = {
    waitandclick(element) {
        this.waitForElementVisible(element, 4000)
            .click(element);
        return this;
    },
    enterAmount(randomAmount) {
        this.setValue('@amount_textbox', randomAmount)
    },
    verifyTotal(randomAmount) {
        this.getValue('@price_textbox', response => {
            price = response.value;
            this.expect.element('@total_textbox').value.to.equal((price * randomAmount).toFixed(8));
        })
    }
}

module.exports = {
    url: 'https://www.binance.com/en/trade/ETH_BTC',
    commands: [commanCommands],
    elements: {
        buy_ETH_panel: "div[class='sc-62mpio-0 sc-62mpio-1 sc-1n3jmzh-11 kLUTQC']",
        price_textbox: "#FormRow-BUY-price",
        amount_textbox: "#FormRow-BUY-quantity",
        total_textbox: "#FormRow-BUY-total",
        login_button_to_trade: "#trade-orderForm-a-BUYlogin"
    }
}