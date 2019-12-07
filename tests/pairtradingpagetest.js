module.exports = {
    'Verify user can not buy without login': function (client) {
        var pairTradingPage = client.page.pairTradingPage();
        pairTradingPage.navigate();
        pairTradingPage.waitForElementPresent('@buy_ETH_panel');

        var randomAmount = 4;
        pairTradingPage.enterAmount(randomAmount)
        pairTradingPage.verifyTotal(randomAmount)

        // pairTradingPage.getValue('@price_textbox', response => {
        //     price = response.value;
        //     pairTradingPage.expect.element('@total_textbox').value.to.equal((price * randomAmount).toFixed(8));
        // })
        pairTradingPage.expect.element('@login_button_to_trade').text.to.contain("Log In")
        client.end;
    }
}