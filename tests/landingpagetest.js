module.exports = {
    'Verify trading chart, limit, market controls on pair trading view page' : function (client) {
        var landingPage = client.page.landingPage();
        landingPage.navigate();

        landingPage.waitandclick('@view_more_markets_link');
        landingPage.waitandclick('@ETH_BTC_button');

        landingPage.verifyIfElementVisible('@BTC_price_panel');
        landingPage.verifyIfElementVisible('@trading_chart');
        landingPage.verifyIfElementVisible('@pair_trading_panel');
        landingPage.verifyIfElementVisible('@limit');
        client.end();
      }
}