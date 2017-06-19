var appendHtml = function (html) {
  // Append buyBox-specific fixture to test
  var newFixture = document.createElement('div');
  newFixture.setAttribute("id", "new_fixture");
  newFixture.innerHTML = html;
  document.getElementById('fixtures').appendChild(newFixture);
};

var removeHtml = function (elementId) {
  // Remove #fixtures from the DOM
  var oldFixture = document.getElementById(elementId);
  oldFixture.parentNode.removeChild(oldFixture);
};

var clickElement = function (el) {
  var ev = document.createEvent("MouseEvent");
  ev.initMouseEvent("click", true /* bubble */, true /* cancelable */
  , window, null, 0, 0, 0, 0, /* coordinates */
  false, false, false, false, /* modifier keys */
  0 /*left*/, null);
  el.dispatchEvent(ev);
};
describe('ADXAutoBuyBox', function () {
  var fixtureHtml = `
    <div class="adx-buybox-container a-box adx-buybox-container--automotive">
      <div class="adx-buybox" data-adx="buy-box">
        <div class="adx-buybox__title a-size-large" data-adx="buy-box__title"></div>
        <div class="adx-buybox__manufacturer">
          <a href="" class="a-link-normal" data-adx="buy-box__merchant" target="_blank"></a>
        </div>
        <hr>
        <div>
          <a href="" class="adx-buybox__review" data-adx="buy-box__review">
            <span class="adx-buybox__review__stars" data-adx="buy-box__review__star">
              <i class="a-icon"></i>
            </span>
            <span class="adx-buybox__review__count" data-adx="buy-box__review__count"></span>
          </a>
        </div>
        <div class="a-section a-spacing-mini">
          <table class="a-lineitem">
            <tr data-adx="buy-box__list">
              <td class="a-color-secondary a-size-base a-text-right a-nowrap" data-adx="buy-box__list-copy"></td>
              <td class="a-span12">
                <span class="a-size-base a-color-secondary a-list-price a-text-strike" data-adx="buy-box__list-price"></span>
              </td>
            </tr>
            <tr data-adx="buy-box__sale">
              <td class="a-color-secondary a-size-base a-text-right a-nowrap" data-adx="buy-box__sale-copy"></td>
              <td class="a-span12">
                <span class="a-size-medium a-color-price">
                  <span data-adx="buy-box__sale-price"></span>
                  <br>
                  <span data-adx="buy-box__sale-legal" class="a-size-base"></span>
                  <i class="a-icon" data-adx="buy-box__sale-prime"></i>
                </span>
              </td>
            </tr>
            <tr data-adx="buy-box__saving-container">
              <td class="a-color-secondary a-size-base a-text-right a-nowrap" data-adx="buy-box__saving-copy"></td>
              <td>
                <div class="a-size-base a-color-price">
                  <span data-adx="buy-box__saving-price"></span>
                  <div data-adx="buy-box__saving-percent"></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="a-color-secondary a-size-base a-text-right a-nowrap" data-adx="buy-box__reserve-copy"></td>
              <td class="a-span12">
                <div class="a-size-base a-color-price">
                  <div data-adx="buy-box__reserve-price"></div>
                  <div data-adx="buy-box__reserve-legal"></div>
                </div>
              </td>
            </tr>
          </table>
          <div class="a-size-medium a-color-success a-section a-spacing-none" data-adx="buy-box__availability"></div>
          <div class="a-size-mini a-spacing-top-mini" data-adx="buy-box__primary-cta-legal"></div>
        </div>
        <div class="a-spacing-top-mini">
          <span class="a-button adx-buybox__button a-button-primary">
              <span class="a-button-inner">
                <a href="#"
                   name="Add to Basket"
                   class="a-button-text a-text-center"
                   role="button" onclick="javascript:void(0);"
                   data-adx="buy-box__primary-cta"
                   data-id=""
                   data-asin=""
                   data-quantity="1">
                  <i class="a-icon adx-buybox__button-icon"></i>
                  <span class="adx-buybox__button-copy"></span>
                </a>
              </span>
          </span>
        </div>
      </div>
    </div>
  `;

  var response = { "GetDecoratedOffersResponse": { "GetDecoratedOffersResult": { "offers": [{ "applicablePromotions": null, "asin": "B016MJNJ6Y", "buyingPrice": 100.0, "currency": "EUR", "customerReviewSummary": { "count": 2, "rating": 5.0 }, "imageInformation": { "height": 398, "secureUrl": "https://images-eu.ssl-images-amazon.com/images/I/41i27bqzBQL.jpg", "url": "http://ecx.images-amazon.com/images/I/41i27bqzBQL.jpg", "width": 500 }, "inStock": true, "isDigital": false, "itemTitle": "Acconto Toyota AYGO Amazon Edition", "listPrice": 0.0, "merchantId": "A9L634D1LKQAS", "merchantName": "Toyota Motor Italia", "preorderReleaseDate": null, "pricePerUnit": "", "promotionOffer": null, "promotionRedemptionCount": 0, "purchasePipeline": "addToCart", "shippingPriceInformation": { "isEligibleFreeShipping": false, "isEligiblePrimeShipping": false, "isEligibleSuperSaverShipping": false, "isFBA": false, "shippingPrice": 0.0 }, "shouldPreorder": false, "subscribeAndSaveInformation": null, "time": 1450434175135, "token": "81CC3A7104BC9879104EF0B9DD281D56E9E6C7B9", "violatesMap": false }] }, "ResponseMetadata": { "RequestId": "4d49397b-a571-11e5-a5de-215a8245878a" } } };

  describe('defaultOptions', function () {
    var buyBox;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        heroTitle: 'AYGO Amazon Edition',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should allow the update of custom product title', function () {
      expect(buyBox.heroTitle).to.equal('AYGO Amazon Edition');
    });

    it('should allow the update of custom locale', function () {
      expect(buyBox.locale).to.equal('it');
    });

    it('should allow the update of custom list price', function () {
      expect(buyBox.customListPrice).to.equal(15450);
    });

    it('should allow the update of custom buying price', function () {
      expect(buyBox.customBuyingPrice).to.equal(12000);
    });

    it('should allow the update of custom buying price legal copy', function () {
      expect(buyBox.customBuyingPriceLegal).to.equal('(IVA e IPT inclusi)');
    });

    it('should allow the update of custom saving price', function () {
      expect(buyBox.customSavingPrice).to.equal(3450);
    });

    it('should allow the update of custom reserve copy', function () {
      expect(buyBox.customReserveCopy).to.equal('Prenotala con:');
    });

    it('should allow the update of custom reserve price', function () {
      expect(buyBox.customReservePrice).to.equal(100);
    });

    it('should allow the update of custom reserve legal copy', function () {
      expect(buyBox.customReserveLegal).to.equal('(acconto prenotazione vettura)');
    });

    it('should allow the update of custom availability copy', function () {
      expect(buyBox.customAvailability).to.equal('Solo 50 esemplari disponibili');
    });

    it('should allow the update of custom CTA legal copy', function () {
      expect(buyBox.customCTALegal).to.equal('Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota');
    });
  });

  describe('init', function () {
    var buyBox,
        data = response,
        buildBuyBoxSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        heroTitle: 'AYGO Amazon Edition',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buildBuyBoxSpy = sinon.spy(buyBox, 'buildBuyBox');
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should call the buildBuyBox method once', function () {
      expect(buildBuyBoxSpy.called).to.be.true;
    });
  });

  describe('buildBuyBox', function () {
    var buyBox,
        finishBuyBoxSpy,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        heroTitle: 'AYGO Amazon Edition',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      finishBuyBoxSpy = sinon.spy(buyBox, 'finishBuyBox');
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
      finishBuyBoxSpy.restore();
    });

    it('should call finishBuyBox method', function () {
      expect(finishBuyBoxSpy.called).to.be.true;
    });
  });

  describe('finishBuyBox', function () {
    var buyBox,
        populateBuyBoxSpy,
        listenSpy,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        heroTitle: 'AYGO Amazon Edition',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      populateBuyBoxSpy = sinon.spy(buyBox, 'populateBuyBox');
      listenSpy = sinon.spy(buyBox, 'listen');
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
      populateBuyBoxSpy.restore();
      listenSpy.restore();
    });

    it('should call populateBuyBox method', function () {
      expect(populateBuyBoxSpy.called).to.be.true;
    });

    it('should call listen method', function () {
      var isMobileAppStub = sinon.stub(adxJSHelpers, 'isMobileApp').returns(true);
      buyBox.init(data);
      expect(listenSpy.called).to.be.true;
      isMobileAppStub.restore();
    });
  });

  describe('populateBuyBox', function () {
    var buyBox,
        populatePriceSpy,
        populateListPriceSpy,
        populateSavingSpy,
        populateTitleSpy,
        populateMerchantNameSpy,
        populateAvailabilitySpy,
        populateCTALegalSpy,
        populateButtonSpy,
        populateReserveSpy,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        heroTitle: 'AYGO Amazon Edition',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      populatePriceSpy = sinon.spy(buyBox, 'populatePrice');
      populateListPriceSpy = sinon.spy(buyBox, 'populateListPrice');
      populateSavingSpy = sinon.spy(buyBox, 'populateSaving');
      populateTitleSpy = sinon.spy(buyBox, 'populateTitle');
      populateMerchantNameSpy = sinon.spy(buyBox, 'populateMerchantName');
      populateAvailabilitySpy = sinon.spy(buyBox, 'populateAvailability');
      populateCTALegalSpy = sinon.spy(buyBox, 'populateCTALegal');
      populateButtonSpy = sinon.spy(buyBox, 'populateButton');
      populateReserveSpy = sinon.spy(buyBox, 'populateReserve');
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
      populatePriceSpy.restore();
      populateListPriceSpy.restore();
      populateSavingSpy.restore();
      populateTitleSpy.restore();
      populateMerchantNameSpy.restore();
      populateAvailabilitySpy.restore();
      populateCTALegalSpy.restore();
      populateButtonSpy.restore();
      populateReserveSpy.restore();
    });

    it('should remove hidden classes from list price container if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPriceContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should remove hidden classes from saving container if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.savingContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should remove hidden classes from buying price container if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.buyingPriceContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should call populatePrice method if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populatePriceSpy.called).to.be.true;
    });

    it('should call populateListPrice method if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateListPriceSpy.called).to.be.true;
    });

    it('should call populateSaving method if product is available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateSavingSpy.called).to.be.true;
    });

    it('should add hidden classes to list price container if product is not available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPriceContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should add hidden classes to saving container if product is not available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.savingContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should add hidden classes to buying price container if product is not available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.buyingPriceContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should call populateTitle method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateTitleSpy.called).to.be.true;
    });

    it('should call populateMerchantName method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateMerchantNameSpy.called).to.be.true;
    });

    it('should call populateReserve method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateReserveSpy.called).to.be.true;
    });

    it('should call populateAvailability method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateAvailabilitySpy.called).to.be.true;
    });

    it('should call populateCTALegal method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateCTALegalSpy.called).to.be.true;
    });

    it('should call populateButton method', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateButtonSpy.called).to.be.true;
    });
  });

  describe('populateTitle', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate product title element with itemTitle', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.textContent).to.equal('Acconto Toyota AYGO Amazon Edition');
    });
  });

  describe('populateMerchantName', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate merchant name element with merchantName', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateTitle(asin);
      expect(buyBox.merchantName.textContent).to.equal('Toyota Motor Italia');
    });
  });

  describe('populateListPrice', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate list copy element with listCopy', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateListPrice(asin);
      expect(buyBox.listCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].listCopy);
    });

    it('should populate list price element with listPrice', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateListPrice(asin);
      expect(buyBox.listPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customListPrice));
    });
  });

  describe('populatePrice', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate buying copy element with priceCopy', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].priceCopy);
    });

    it('should populate buying price element with customBuyingPrice', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customBuyingPrice));
    });

    it('should populate buying legal element with customBuyingPriceLegal', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingLegal.textContent).to.equal(buyBox.customBuyingPriceLegal);
    });
  });

  describe('populateSaving', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate saving copy element with priceCopy', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].saveCopy);
    });

    it('should populate saving price element with savingPrice', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customSavingPrice));
    });

    it('should populate saving percentage element with savingPercentage', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingPercentage.textContent).to.equal(adxJSHelpers.calculateSaving(buyBox.customBuyingPrice, buyBox.customListPrice));
    });
  });

  describe('populateReserve', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate reserve copy element with customReserveCopy', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reserveCopy.textContent).to.equal(buyBox.customReserveCopy);
    });

    it('should populate reserve price element with customReservePrice', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reservePrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customReservePrice));
    });

    it('should populate reserve legal element with customReserveLegal', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reserveLegal.textContent).to.equal(buyBox.customReserveLegal);
    });
  });

  describe('populateAvailability', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate availability copy element with customAvailability', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateAvailability(asin);
      expect(buyBox.availability.textContent).to.equal(buyBox.customAvailability);
    });
  });

  describe('populateCTALegal', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate CTA legal element with customCTALegal', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateCTALegal(asin);
      expect(buyBox.ctaLegal.textContent).to.equal(buyBox.customCTALegal);
    });
  });

  describe('populateButton', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXAutoBuyBox({
        locale: 'it',
        customListPrice: 15450,
        customBuyingPrice: 12000,
        customBuyingPriceLegal: '(IVA e IPT inclusi)',
        customSavingPrice: 3450,
        customReserveCopy: 'Prenotala con:',
        customReservePrice: 100,
        customReserveLegal: '(acconto prenotazione vettura)',
        customAvailability: 'Solo 50 esemplari disponibili',
        customCTALegal: 'Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota'
      });

      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should add data-id attribute to primaryCta', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.hasAttribute('data-id')).to.be.true;
    });

    it('should add data-asin attribute to primaryCta', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.hasAttribute('data-asin')).to.be.true;
    });

    it('should add class if in stock', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(adxJSHelpers.hasClass(buyBox.primaryCta.children[1], 'a-icon-cart')).to.be.true;
    });

    it('should remove class if out of stock', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(adxJSHelpers.hasClass(buyBox.primaryCta.children[1], 'a-icon-cart')).to.be.false;
    });

    it('should build ATC URL in href attribute if in stock', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = true;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.getAttribute('href')).to.equal(adxJSHelpers.buildATCLink(asin, adxJSHelpers.localisation[buyBox.locale].suffix));
    });

    it('should build shop now URL in href attribute if out of stock', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.getAttribute('href')).to.equal(adxJSHelpers.buildShopNowLink(asin.asin, adxJSHelpers.localisation[buyBox.locale].suffix, asin.merchantId, adxJSHelpers.isMobileWeb()));
    });

    it('should populate primary CTA child element with bookNow', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = true;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].bookNow);
    });

    it('should populate primary CTA child element with shopNow', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });
  });
});
describe('ADXCarousel', function () {
  var fixtureHtml = `
    <style>
      .adx-carousel__button { display: none; }
      .adx-is-visible { display: block; }
    </style>

    <a class="a-button a-button-image adx-carousel__button" href="#">
      <i class="a-icon a-icon-previous"><span class="a-icon-alt">Previous page</span></i>
    </a>

   <div class="adx-carousel__container">
      <ul class="a-nostyle a-horizontal adx-carousel" data-adx-carousel>
        <li class="adx-carousel__slide adx-carousel__slide-one" style="width: 100px; float: left;">Slide 1</li>
        <li class="adx-carousel__slide adx-carousel__slide-two" style="width: 100px; float: left;">Slide 2</li>
      </ul>
   </div>

   <a class="a-button a-button-image adx-carousel__button" href="#">
    <i class="a-icon a-icon-next"><span class="a-icon-alt">Next page</span></i>
   </a>
   `;

  var adxCarousel, handleNavigationSpy, listenSpy;

  describe('init', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      handleNavigationSpy = sinon.spy(adxCarousel, "handleNavigation");
      listenSpy = sinon.spy(adxCarousel, "listen");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      handleNavigationSpy.reset();
      listenSpy.reset();
    });

    it('should set container width to total width of all children', function () {
      expect(adxCarousel.container.style.width == "200px").to.be.true;
    });

    it('should call handleNavigation method', function () {
      adxCarousel.init();
      expect(handleNavigationSpy.calledOnce).to.be.true;
    });

    it('should call listen method', function () {
      adxCarousel.init();
      expect(listenSpy.calledOnce).to.be.true;
    });
  });

  describe('slide', function () {
    var previousSlide, nextSlide, handleNavigationSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      previousSlide = adxCarousel.navigation[0];
      nextSlide = adxCarousel.navigation[1];
      handleNavigationSpy = sinon.spy(adxCarousel, "handleNavigation");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      handleNavigationSpy.reset();
    });

    it('should set the new position left value of container based on button clicked', function () {
      clickElement(nextSlide);
      expect(adxCarousel.container.style.left == "-100px").to.be.true;
      clickElement(previousSlide);
      expect(adxCarousel.container.style.left == "0px").to.be.true;
    });

    it('should call handleNavigation method', function () {
      clickElement(nextSlide);
      expect(handleNavigationSpy.calledOnce).to.be.true;
    });
  });

  describe('handleNavigation', function () {
    var previousSlide, nextSlide;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      previousSlide = adxCarousel.navigation[0];
      nextSlide = adxCarousel.navigation[1];
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should remove class from next button if at end of the slides', function () {
      clickElement(nextSlide);
      expect(adxJSHelpers.hasClass(nextSlide, 'adx-is-visible')).to.be.false;
    });

    it('should add class to previous button if not at beginning of the slides', function () {
      clickElement(nextSlide);
      expect(adxJSHelpers.hasClass(previousSlide, 'adx-is-visible')).to.be.true;
    });
  });
});
describe('ADXBuyBox', function () {
  var fixtureHtml = `
  <div class="adx-buybox__hero" data-adx="buy-box__image"></div>
  <div class="adx-buybox-container">
    <div class="adx-buybox" data-adx="buy-box">
      <a href="" data-adx="buy-box__title">
        <span class="adx-buybox__title"></span>
      </a>
      <div>
        <a href="" class="adx-buybox__review" data-adx="buy-box__review">
          <span class="adx-buybox__review__stars" data-adx="buy-box__review__star">
            <i class="a-icon"></i>
          </span>
          <span class="adx-buybox__review__count" data-adx="buy-box__review__count"></span>
        </a>
      </div>
      <div class="adx-buybox__list-price" data-adx="buy-box__list-price">
        <span class="a-color-secondary adx-buybox__list-price__copy"></span>
        <span class="a-text-strike a-color-secondary adx-buybox__list-price__value"></span>
      </div>
      <div class="adx-buybox__sale-price" data-adx="buy-box__sale-price">
        <span class="a-color-secondary adx-buybox__sale-price__copy"></span>
        <span class="a-color-price adx-buybox__sale-price__value"></span>
        <i class="a-icon"></i>
      </div>
      <div class="adx-buybox__saving" data-adx="buy-box__saving">
        <span class="a-color-secondary adx-buybox__saving__copy"></span>
        <span class="a-color-price adx-buybox__saving__value"></span>
     </div>
      <div class="adx-buybox__dropdown-container">
        <span class="a-color-secondary" data-adx="buy-box__optional-copy"></span>
        <span>
          <select class="adx-buybox__dropdown" data-adx="buy-box__select"></select>
        </span>
      </div>
      <div class="a-spacing-top-mini">
        <span class="a-button adx-buybox__button a-button-primary">
            <span class="a-button-inner">
              <a href="#" name="Add to Basket" class="a-button-text a-text-center" role="button" onclick="javascript:void(0);" data-adx="buy-box__primary-cta">
                <i class="a-icon adx-buybox__button-icon"></i>
                <span class="adx-buybox__button-copy"></span>
              </a>
            </span>
        </span>
      </div>
    </div>
    `;

  var response = {
    "GetDecoratedOffersResponse": {
      "GetDecoratedOffersResult": {
        "offers": [{
          "applicablePromotions": null,
          "asin": "B00ZG1S834",
          "buyingPrice": 49.99,
          "currency": "GBP",
          "customerReviewSummary": {
            "count": 0,
            "rating": 0.0
          },
          "imageInformation": {
            "height": 500,
            "secureUrl": "https://images-eu.ssl-images-amazon.com/images/I/51CXWYOytTL.jpg",
            "url": "http://ecx.images-amazon.com/images/I/51CXWYOytTL.jpg",
            "width": 394
          },
          "inStock": true,
          "isDigital": false,
          "itemTitle": "No Man's Sky (PS4)",
          "listPrice": 54.99,
          "merchantId": "A3P5ROKL5A1OLE",
          "merchantName": "Amazon.co.uk",
          "preorderReleaseDate": null,
          "pricePerUnit": "",
          "promotionOffer": null,
          "promotionRedemptionCount": 0,
          "purchasePipeline": "addToCart",
          "shippingPriceInformation": {
            "isEligibleFreeShipping": false,
            "isEligiblePrimeShipping": true,
            "isEligibleSuperSaverShipping": true,
            "isFBA": true,
            "shippingPrice": 1.99
          },
          "shouldPreorder": false,
          "subscribeAndSaveInformation": null,
          "time": 1446653464195,
          "token": "0720C595F9CF8AC7A03FCE8954C8A4EB5AFBF3D0",
          "violatesMap": false
        }]
      },
      "ResponseMetadata": {
        "RequestId": "a5f27820-830e-11e5-92ca-6f90a3801d53"
      }
    }
  },
      responseWithVariants = {
    "GetDecoratedOffersResponse": {
      "GetDecoratedOffersResult": {
        "offers": [{
          "applicablePromotions": null,
          "asin": "B00XHS0NYU",
          "buyingPrice": 42.82,
          "currency": "GBP",
          "customerReviewSummary": {
            "count": 121,
            "rating": 4.2644628099
          },
          "imageInformation": {
            "height": 500,
            "secureUrl": "https://images-eu.ssl-images-amazon.com/images/I/61Q-O1-P9cL.jpg",
            "url": "http://ecx.images-amazon.com/images/I/61Q-O1-P9cL.jpg",
            "width": 401
          },
          "inStock": true,
          "isDigital": false,
          "itemTitle": "Assassin's Creed Syndicate (PS4)",
          "listPrice": 0.0,
          "merchantId": "A3P5ROKL5A1OLE",
          "merchantName": "Amazon.co.uk",
          "preorderReleaseDate": null,
          "pricePerUnit": "248.95 / m",
          "promotionOffer": null,
          "promotionRedemptionCount": 0,
          "purchasePipeline": "addToCart",
          "shippingPriceInformation": {
            "isEligibleFreeShipping": false,
            "isEligiblePrimeShipping": true,
            "isEligibleSuperSaverShipping": true,
            "isFBA": true,
            "shippingPrice": 1.99
          },
          "shouldPreorder": false,
          "subscribeAndSaveInformation": null,
          "time": 1448532797248,
          "token": "A211C79A99D0DC1816B469B72664F8671DC5424E",
          "violatesMap": false
        }, {
          "applicablePromotions": null,
          "asin": "B00XHS0O30",
          "buyingPrice": 42.0,
          "currency": "GBP",
          "customerReviewSummary": {
            "count": 56,
            "rating": 4.3214285714
          },
          "imageInformation": {
            "height": 500,
            "secureUrl": "https://images-eu.ssl-images-amazon.com/images/I/61HywUl9ZiL.jpg",
            "url": "http://ecx.images-amazon.com/images/I/61HywUl9ZiL.jpg",
            "width": 388
          },
          "inStock": true,
          "isDigital": false,
          "itemTitle": "Assassin's Creed Syndicate (Xbox One)",
          "listPrice": 0.0,
          "merchantId": "A3P5ROKL5A1OLE",
          "merchantName": "Amazon.co.uk",
          "preorderReleaseDate": null,
          "pricePerUnit": "221.05 / m",
          "promotionOffer": null,
          "promotionRedemptionCount": 0,
          "purchasePipeline": "addToCart",
          "shippingPriceInformation": {
            "isEligibleFreeShipping": false,
            "isEligiblePrimeShipping": true,
            "isEligibleSuperSaverShipping": true,
            "isFBA": true,
            "shippingPrice": 1.99
          },
          "shouldPreorder": false,
          "subscribeAndSaveInformation": null,
          "time": 1448532797248,
          "token": "674426B7A76A3D1478AB2DD1F31A4441AF3A3AD7",
          "violatesMap": false
        }]
      },
      "ResponseMetadata": {
        "RequestId": "4fbf8dd9-9426-11e5-a2b7-7969f373066e"
      }
    }
  };

  describe('defaultOptions', function () {
    var buyBox;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      buyBox = new ADXBuyBox({ heroTitle: 'Foobar' });
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should allow the update of custom product title', function () {
      expect(buyBox.heroTitle).to.equal('Foobar');
    });

    it('should allow the update of custom locale', function () {
      var buyBox = new ADXBuyBox({ locale: 'jp' });
      expect(buyBox.locale).to.equal('jp');
    });
  });

  describe('init', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should push products asin to the asins object', function () {
      expect(buyBox.asins).to.have.property('B00ZG1S834');
    });
  });

  describe('buildBuyBox', function () {
    var buyBox,
        data = response;

    before(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    after(function () {
      removeHtml('new_fixture');
    });

    it('should call populateDropdown function if asins greater than one', function () {
      buyBox.buildBuyBox(3);
      expect(buyBox.select.hasChildNodes()).to.be.true;
    });

    it('should add hidden class if asins less than one', function () {
      buyBox.buildBuyBox(1);
      expect(adxJSHelpers.hasClass(buyBox.selectContainer, buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateDropdown', function () {
    var buyBox,
        asin,
        data = response,
        firstOption;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({
        variantDropdownText: {
          B00ZG1S834: 'Foo bar'
        }
      });
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate option value with ASIN', function () {
      buyBox.populateDropdown(asin);
      var firstOption = document.querySelector(".adx-buybox__dropdown").options[0];

      expect(firstOption.value).to.equal("B00ZG1S834");
      expect(firstOption.textContent).to.equal("Foo bar");
    });
  });

  describe('populateOptionalCopy', function () {
    var buyBox,
        asin,
        optionalCopyContainer,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ optionalCopy: 'Foobar' });
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate optional copy', function () {
      buyBox.populateDropdown(asin);
      optionalCopyContainer = document.querySelector(".adx-buybox__dropdown");
      buyBox.optionalCopy.textContent = "Foobar";

      expect(buyBox.optionalCopy.textContent).to.equal("Foobar");
    });
  });

  describe('populateBuyBox', function () {
    var buyBox,
        asin,
        data = response,
        populateStarsSpy,
        populateCountSpy,
        populateRatingLinkSpy,
        populatePriceSpy,
        populateListSpy,
        populateSavingSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ locale: 'fr' });
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      populateStarsSpy = sinon.spy(buyBox, 'populateStars');
      populateCountSpy = sinon.spy(buyBox, 'populateCount');
      populateRatingLinkSpy = sinon.spy(buyBox, 'populateRatingLink');
      populatePriceSpy = sinon.spy(buyBox, 'populatePrice');
      populateListSpy = sinon.spy(buyBox, 'populateList');
      populateSavingSpy = sinon.spy(buyBox, 'populateSaving');
    });

    afterEach(function () {
      removeHtml('new_fixture');
      populateStarsSpy.restore();
      populateCountSpy.restore();
      populateRatingLinkSpy.restore();
      populatePriceSpy.restore();
      populateListSpy.restore();
      populateSavingSpy.restore();
    });

    it('should call populateStars method if buyBox can show reviews', function () {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateStarsSpy.called).to.be.true;
    });

    it('should call populateCount method if buyBox can show reviews', function () {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateCountSpy.called).to.be.true;
    });

    it('should call populateRatingLink method if buyBox can show reviews', function () {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateRatingLinkSpy.called).to.be.true;
    });

    it('should remove hidden classes from review star and count elements if buyBox can show reviews', function () {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar, buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.reviewCount, buyBox.hiddenClass)).to.be.false;
    });

    it('should add hidden classes to review star and count elements if buyBox cannot show reviews', function () {
      asin.customerReviewSummary.count = 10;
      asin.customerReviewSummary.rating = 2;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar, buyBox.hiddenClass)).to.be.true;
      expect(adxJSHelpers.hasClass(buyBox.reviewCount, buyBox.hiddenClass)).to.be.true;
    });

    it('should remove hidden classes from sale price element if product is available', function () {
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice, buyBox.hiddenClass)).to.be.false;
    });

    it('should call populatePrice method if product is available', function () {
      buyBox.populateBuyBox(asin);
      expect(populatePriceSpy.called).to.be.true;
    });

    it('should add hidden class to salePrice element if product is not available', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice, buyBox.hiddenClass)).to.be.true;
      asin.buyingPrice = 49.99; // Restore buyingPrice back to default
    });

    it('should call populateList method if available, cheaper than RRP & above savings threshold', function () {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(populateListSpy.called).to.be.true;
    });

    it('should call populateSaving method if available, cheaper than RRP & above savings threshold', function () {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(populateSavingSpy.called).to.be.true;
    });

    it('should remove hidden classes from list price and savings element if available, cheaper than RRP & above savings threshold', function () {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPrice, buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.saving, buyBox.hiddenClass)).to.be.false;
    });

    it('should add hidden classes to list price and savings element if not cheaper than RRP & below savings threshold', function () {
      asin.buyingPrice = 110;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPrice, buyBox.hiddenClass)).to.be.true;
      expect(adxJSHelpers.hasClass(buyBox.saving, buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateTitle', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ locale: 'fr' });
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate product title', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.children[0].textContent).to.equal("No Man's Sky (PS4)");
    });

    it('should add href attribute to product title', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      expect(buyBox.productTitle.hasAttribute("href")).to.be.true;
    });

    it('should build correct url on desktop', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      expect(buyBox.productTitle.getAttribute("href")).to.equal("http://www.amazon." + buyBox.locale + "/dp/B00ZG1S834?me=" + asin.merchantId);
    });

    it('should build correct url if on mobile', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      var isMobileWebStub = sinon.stub(adxJSHelpers, "isMobileWeb").returns(true);
      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.getAttribute("href")).to.equal("http://www.amazon." + buyBox.locale + "/gp/aw/d/B00ZG1S834?me=" + asin.merchantId);
      isMobileWebStub.restore();
    });
  });

  describe('populatePrice', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ optionalCopy: 'Foobar' });
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate price copy', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.salePrice.children[0].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].priceCopy);
    });

    it('should populate buying price', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.salePrice.children[1].textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, asin.buyingPrice));
    });

    it('should toggle classes if eligible prime shipping', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], adxJSHelpers.localisation[buyBox.locale].prime)).to.be.true;

      asin.shippingPriceInformation.isEligiblePrimeShipping = false;

      buyBox.populatePrice(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateStars', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should add class to review star child element', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateStars(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar.children[0], 'a-star-4')).to.be.true;
    });
  });

  describe('populateCount', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate review count element with number of reviews', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateCount(asin);
      expect(buyBox.reviewCount.textContent).to.equal("15");
    });
  });

  describe('populateRatingLink', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate review element href attribute with review link', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateRatingLink(asin);
      expect(buyBox.review.getAttribute("href")).to.equal("http://www.amazon.uk/product-reviews/B00ZG1S834");
    });
  });

  describe('populateList', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ locale: 'fr' });
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate list copy with correct localisation', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateList(asin);
      expect(buyBox.listPrice.children[0].textContent).to.equal("Prix conseillé : ");
      expect(adxJSHelpers.formatCurrency(buyBox.locale, asin.listPrice)).to.equal(buyBox.listPrice.children[1].textContent);
    });
  });

  describe('populateSaving', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ locale: 'fr' });
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate saving copy with correct localisation', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.saving.children[0].textContent).to.equal("Économisez : ");
      expect(adxJSHelpers.calculateSaving(asin.buyingPrice, asin.listPrice)).to.equal(buyBox.saving.children[1].textContent);
    });
  });

  describe('populateButton', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({ locale: 'fr' });
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate a shopNow button if product is pre-order', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.shouldPreorder = true;
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate a shopNow button if product is sold out', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate a shopNow button if locale is japanese', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.locale = 'jp';
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate an ATC link if product available, not a pre-order and not japanese locale', function () {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.shouldPreorder = false;
      asin.buyingPrice = 5;
      buyBox.locale = 'uk';
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].atc);
    });
  });

  describe('updateOnChange', function () {
    var buyBox,
        data = responseWithVariants,
        populateBuyBoxSpy,
        changeVariantImageSpy,
        isMobileWebStub;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({
        variantImage: {
          B00XHS0O30: 'https://images-na.ssl-images-amazon.com/images/G/08/creatives/assassins_cread_2/images/video-poster-retina.png'
        }
      });
      populateBuyBoxSpy = sinon.spy(buyBox, "populateBuyBox");
      changeVariantImageSpy = sinon.spy(buyBox, "changeVariantImage");
      isMobileWebStub = sinon.stub(adxJSHelpers, "isMobileWeb");
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
      isMobileWebStub.restore();
    });

    it('should call populateBuyBox method', function () {
      buyBox.select.selectedIndex = 1;
      adxJSHelpers.fireEvent(buyBox.select, "change");
      expect(populateBuyBoxSpy.calledWith(buyBox.asins['B00XHS0O30'])).to.true;
    });

    it('should call changeVariantImage method', function () {
      isMobileWebStub.returns(true);
      buyBox.select.selectedIndex = 1;
      adxJSHelpers.fireEvent(buyBox.select, "change");
      expect(changeVariantImageSpy.called).to.true;
    });
  });

  describe('changeVariantImage', function () {
    var buyBox,
        data = response;

    beforeEach(function () {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should update buy box image background url', function () {
      buyBox.changeVariantImage('https://images-na.ssl-images-amazon.com/images/G/08/creatives/assassins_cread_2/images/video-poster-retina.png');
      expect(buyBox.image.style.backgroundImage).to.contain('https://images-na.ssl-images-amazon.com/images/G/08/creatives/assassins_cread_2/images/video-poster-retina.png');
    });
  });
});
describe('ADXMobileSlide', function () {
  var fixtureHtml = `
      <div class="adx-hero__mobile-slide a-spacing-base">
        <ul class="a-nostyle adx-hero__mobile-slide__list a-list-horizontal" data-adx-mobile-slide-list>
          <li class="adx-hero__mobile-slide__list__item adx-hero__mobile-slide__list__item--1" data-adx-slide></li>
          <li class="adx-hero__mobile-slide__list__item adx-hero__mobile-slide__list__item--2" data-adx-slide></li>
          <li class="adx-hero__mobile-slide__list__item adx-hero__mobile-slide__list__item--3" data-adx-slide></li>
          <li class="adx-hero__mobile-slide__list__item adx-hero__mobile-slide__list__item--4" data-adx-slide></li>
          <li class="adx-hero__mobile-slide__list__item adx-hero__mobile-slide__list__item--5" data-adx-slide></li>
        </ul>
      </div>
      <div class="adx-mobile-gallery__indicator a-text-center" data-adx-mobile-slide-dots>
        <span class="adx-is-active"><svg><circle cx="6" cy="6" r="5"/></svg></span>
        <span><svg><circle cx="6" cy="6" r="5"></circle></svg></span>
        <span><svg><circle cx="6" cy="6" r="5"></circle></svg></span>
        <span><svg><circle cx="6" cy="6" r="5"></circle></svg></span>
        <span><svg><circle cx="6" cy="6" r="5"></circle></svg></span>
      </div>
       `;

  var adxMobileSlide;

  describe('init', function () {
    var addEventSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxMobileSlide = new ADXMobileSlide();
      addEventSpy = sinon.spy(adxJSHelpers, "addEvent");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should call addEvent method for each customEvent', function () {
      adxMobileSlide.init();
      adxJSHelpers.loops(adxMobileSlide.slideCustomEvents, function (customEvent) {
        expect(addEventSpy.calledWith(adxMobileSlide.slideList, customEvent, adxMobileSlide)).to.be.true;
      });
    });
  });

  describe('handleEvent', function () {
    var begunSpy, endedSpy, swipeSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxMobileSlide = new ADXMobileSlide();
      begunSpy = sinon.spy(adxMobileSlide, 'begun');
      endedSpy = sinon.spy(adxMobileSlide, 'ended');
      swipeSpy = sinon.spy(adxMobileSlide, 'swipe');
    });

    afterEach(function () {
      removeHtml('new_fixture');
      begunSpy.restore();
      endedSpy.restore();
      swipeSpy.restore();
    });

    it('should call begun method on touchstart', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchstart");
      expect(begunSpy.called).to.be.true;
    });

    it('should call begun method on mousedown', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mousedown");
      expect(begunSpy.called).to.be.true;
    });

    it('should call begun method on touchend', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchend");
      expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on mouseup', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mouseup");
      expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on touchcancel', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchcancel");
      expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on touchmove', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchmove");
      expect(swipeSpy.called).to.be.true;
    });

    it('should call begun method on touchmove', function () {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mousemove");
      expect(swipeSpy.called).to.be.true;
    });
  });

  // TODO: Need to find out how best to programatically trigger a swipe
  // gesture and pass through the event.targetTouches data
});
describe('ADXPopulate', function () {
  var fixtureHtml = `
      <div class="adx-page__loader adx-is-visible"></div>

      <div data-adx-populate-tracker="navigation_one_tracker"></div>

      <div data-adx-populate-text="slide_one_image"></div>

      <div href="" data-adx-populate-href="slide_three_button_href"></div>
      `;

  var adxPopulate;

  describe('populateText', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should populate element with text content', function () {
      adxPopulate.populateText();
      expect(document.querySelector('[data-adx-populate-text="slide_one_image"]').textContent).includes(adxCustom.slide_one_image);
    });
  });

  describe('populateHref', function () {
    var addEventSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
      addEventSpy = sinon.spy(adxJSHelpers, 'addEvent');
    });

    afterEach(function () {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should populate element href attribute', function () {
      adxPopulate.populateHref();
      expect(document.querySelector('[data-adx-populate-href]').getAttribute('href')).includes(adxCustom.slide_three_button_href);
    });

    it('should call addEvent method', function () {
      adxPopulate.populateHref();
      expect(addEventSpy.calledWith(document.querySelector('[data-adx-populate-href]'))).to.be.true;
    });
  });

  describe('populateTracker', function () {
    var addEventSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
      addEventSpy = sinon.spy(adxJSHelpers, 'addEvent');
    });

    afterEach(function () {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should populate element href attribute', function () {
      adxPopulate.populateTracker();
      expect(document.querySelector('[data-adx-populate-tracker]').getAttribute('data-track')).includes(adxCustom.navigation_one_tracker);
    });

    it('should call addEvent method', function () {
      adxPopulate.populateTracker();
      expect(addEventSpy.calledWith(document.querySelector('[data-adx-populate-tracker]'))).to.be.true;
    });
  });

  describe('clearLoader', function () {
    this.timeout(5000);

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should remove class from page loader element', function (done) {
      expect(adxJSHelpers.hasClass(document.querySelectorAll('.adx-page__loader'), 'adx-is-visible')).to.be.false;
      done();
    });
  });
});
describe('ADXSlide', function () {
  var fixtureHtml = `
       <ul class="a-nostyle adx-hero__slider" data-adx-slide-container>
         <li class="adx-is-selected adx-hero__slide adx-hero__slide-primary _slide1" style="width: 200px; float: left;" data-adx-slide>
           Slide 1
         </li>
         <li class="adx-hero__slide _slide2" style="width: 200px; float: left;" data-adx-slide>
           Slide 2
         </li>
         <li class="adx-hero__slide _slide3" style="width: 200px; float: left;" data-adx-slide>
           Slide 3
         </li>
         <li class="adx-hero__slide _slide4" style="width: 200px; float: left;" data-adx-slide>
           Slide 4
         </li>
       </ul>
       <div class="adx-hero-navigation" style="clear: both;" data-adx-navigation-link>
         <div class="adx-content__container">
           <ul class="a-nostyle a-horizontal a-text-center">
             <li>
               <a href="#" class="a-list-item adx-is-selected" data-name="" data-track="" data-href="slide-one">
                 <i class="adx-icon__triangle"></i>
                 <span class="adx-navigation__double-line">Tab 1</span>
               </a>
             </li>
             <li>
               <a href="#" class="a-list-item" data-name="" data-track="" data-href="slide-two">
                 <i class="adx-icon__triangle"></i>
                 <span class="adx-navigation__double-line">Tab 2</span>
               </a>
             </li>
             <li>
               <a href="#" class="a-list-item" data-name="" data-track="" data-href="slide-three">
                 <i class="adx-icon__triangle"></i>
                 <span class="adx-navigation__double-line">Tab 3</span>
               </a>
             </li>
             <li>
               <a href="#" class="a-list-item" data-name="" data-track="" data-href="slide-four">
                 <i class="adx-icon__triangle"></i>
                 <span class="adx-navigation__double-line">Tab 4</span>
               </a>
             </li>
           </ul>
         </div>
       </div>
       `;

  var adxSlide, listenSpy, handleLocationSpy, delegateSlideAndNavigationSpy, selectNavigationSpy, displaySlideSpy;

  describe('init', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      listenSpy = sinon.spy(adxSlide, "listen");
      handleLocationSpy = sinon.spy(adxSlide, "handleLocation");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      listenSpy.restore();
      handleLocationSpy.restore();
      window.location.hash = '';
    });

    it('should call listen method', function () {
      adxSlide.init();
      expect(listenSpy.calledOnce).to.be.true;
    });

    it('should call handleLocation method', function () {
      adxSlide.init();
      expect(handleLocationSpy.calledOnce).to.be.true;
    });
  });

  describe('selectTab', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      delegateSlideAndNavigationSpy = sinon.spy(adxSlide, "delegateSlideAndNavigation");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      delegateSlideAndNavigationSpy.restore();
      window.location.hash = '';
    });

    it('should call delegateSlideAndNavigation method', function () {
      clickElement(adxSlide.navigation[0].children[0].children[0]);
      expect(delegateSlideAndNavigationSpy.calledOnce).to.be.true;
    });
  });

  describe('delegateSlideAndNavigation', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      selectNavigationSpy = sinon.spy(adxSlide, "selectNavigation");
      displaySlideSpy = sinon.spy(adxSlide, "displaySlide");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      selectNavigationSpy.restore();
      displaySlideSpy.restore();
      window.location.hash = '';
    });

    it('should call selectNavigation method', function () {
      adxSlide.delegateSlideAndNavigation(1, 2);
      expect(selectNavigationSpy.calledOnce).to.be.true;
    });

    it('should call displaySlide method', function () {
      adxSlide.delegateSlideAndNavigation(1, 2);
      expect(displaySlideSpy.calledOnce).to.be.true;
    });
  });

  describe('selectNavigation', function () {
    var currentTab, selectedTab;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      currentTab = document.querySelectorAll('[data-adx-navigation-link]')[0];
      selectedTab = currentTab.querySelectorAll('li')[2].children[0];
      adxSlide.selectNavigation(currentTab, 2);
    });

    afterEach(function () {
      removeHtml('new_fixture');
      window.location.hash = '';
    });

    it('should remove selected class from current tab', function () {
      expect(adxJSHelpers.hasClass(currentTab, 'adx-is-selected')).to.be.false;
    });

    it('should add selected class to current tab', function () {
      expect(adxJSHelpers.hasClass(selectedTab, 'adx-is-selected')).to.be.true;
    });

    it('should add hash to window location', function () {
      expect(window.location.hash).to.contain("#slide-three");
    });
  });

  describe('displaySlide', function () {
    var slidePreviousSpy, slideNextSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      slidePreviousSpy = sinon.spy(adxSlide, "slidePrevious");
      slideNextSpy = sinon.spy(adxSlide, "slideNext");
    });

    afterEach(function () {
      removeHtml('new_fixture');
      window.location.hash = '';
      slideNextSpy.restore();
      slidePreviousSpy.restore();
    });

    it('should call slidePrevious method', function () {
      adxSlide.displaySlide(1, 3);
      expect(slidePreviousSpy.calledOnce).to.be.true;
    });

    it('should call slideNext method', function () {
      adxSlide.displaySlide(3, 1);
      expect(slideNextSpy.calledOnce).to.be.true;
    });
  });

  describe('nextSlide', function () {
    var handleAnimationSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      handleAnimationSpy = sinon.spy(adxSlide, 'handleAnimation');
      adxSlide.nextSlide(adxSlide.slide[0], adxSlide.slide[1]);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should remove selected class from current slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.selectedClass)).to.be.false;
    });

    it('should add moving class to current slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.movingClass)).to.be.true;
    });

    it('should add move left class to current slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], 'adx-move-left')).to.be.true;
    });

    it('should add selected class to next slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[1], adxSlide.selectedClass)).to.be.true;
    });

    it('should call the handleAnimation method', function () {
      expect(handleAnimationSpy.called).to.be.true;
    });
  });

  describe('previousSlide', function () {
    var handleAnimationSpy;

    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      handleAnimationSpy = sinon.spy(adxSlide, 'handleAnimation');
      adxSlide.previousSlide(adxSlide.slide[0], adxSlide.slide[1]);
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should remove selected class from current slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.selectedClass)).to.be.false;
    });

    it('should call the handleAnimation method', function () {
      expect(handleAnimationSpy.called).to.be.true;
    });

    it('should add selected class to next slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[1], adxSlide.selectedClass)).to.be.true;
    });

    it('should add moving class to current slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.movingClass)).to.be.true;
    });

    it('should remove move left class to next slide', function () {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], 'adx-move-left')).to.be.false;
    });
  });

  describe('addTransitionClass', function () {
    beforeEach(function () {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
    });

    afterEach(function () {
      removeHtml('new_fixture');
    });

    it('should add a slide transition class to each slide', function () {
      adxSlide.addTransitionClass();

      adxJSHelpers.loops(adxSlide.slide, function (slide) {
        expect(adxJSHelpers.hasClass(slide, 'adx-hero__slide--transition-slide')).to.be.true;
      });
    });

    it('should add a fade transition class to each slide', function () {
      adxSlide = new ADXSlide({
        transitionStyle: 'fade'
      });

      adxSlide.addTransitionClass();

      adxJSHelpers.loops(adxSlide.slide, function (slide) {
        expect(adxJSHelpers.hasClass(slide, 'adx-hero__slide--transition-fade')).to.be.true;
      });
    });
  });
});
/**
 * HTMLMediaElement is not supported in PhantomJS
 * @see https://github.com/ariya/phantomjs/issues/10839
 */
if (!window.callPhantom) {
  describe('ADXVideo', function () {
    var adxVideo,
        fixtureHtml = `
        <div class="adx-hero__video-thumbnail__container">
          <div class="adx-video__thumbnail" data-adx="adx-video__thumbnail">
            <span class="adx-video__thumbnail__play-button" data-adx="adx-video__play-icon">Click me</span>
          </div>
        </div>
        <div id="adx-overlay" class="adx-video__overlay" data-action="adx-close" data-adx="adx-video__container">
    			<video class="adx-video" src="" data-adx="adx-video"></video>
    		</div>
        `;

    describe('init', function () {
      var handleSupportedBrowserSpy, handleUnSupportedBrowserSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        handleSupportedBrowserSpy = sinon.spy(adxVideo, "handleSupportedBrowser");
        handleUnSupportedBrowserSpy = sinon.spy(adxVideo, "handleUnSupportedBrowser");
      });

      afterEach(function () {
        removeHtml('new_fixture');
        handleSupportedBrowserSpy.restore();
        handleUnSupportedBrowserSpy.restore();
      });

      it('should call handleSupportedBrowser function', function () {
        sinon.stub(adxVideo, "checkForSupport").returns(true);
        adxVideo.init();
        expect(handleSupportedBrowserSpy.calledOnce).to.be.true;
      });

      it('should call handleUnSupportedBrowser function', function () {
        sinon.stub(adxVideo, "checkForSupport").returns(false);
        adxVideo.init();
        expect(handleUnSupportedBrowserSpy.called).to.be.true;
      });
    });

    describe('handleSupportedBrowser', function () {
      var listenSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        listenSpy = sinon.spy(adxVideo, "listen");
      });

      afterEach(function () {
        removeHtml('new_fixture');
        listenSpy.restore();
      });

      it('should set track to empty string', function () {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.track).to.be.equal("");
      });

      it('should call listen function', function () {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(listenSpy.calledOnce).to.be.true;
      });

      it('should populate src attribute with video URL', function () {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.getAttribute('src')).to.equal(adxCustom.video.video);
      });

      it('should populate poster attribute with preMediaSlate URL', function () {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.getAttribute('poster')).to.equal(adxCustom.video.preMediaSlate);
      });

      it('should add controls attribute', function () {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.hasAttribute('controls')).to.be.true;
      });
    });

    describe('handleOverlay', function () {
      var hideVideoSpy, showVideoSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        hideVideoSpy = sinon.spy(adxVideo, "hideVideo");
        showVideoSpy = sinon.spy(adxVideo, "showVideo");
      });

      afterEach(function () {
        removeHtml('new_fixture');
        hideVideoSpy.restore();
        showVideoSpy.restore();
      });

      it('should call the showVideo method', function () {
        adxVideo.init();
        adxJSHelpers.fireEvent(adxVideo.playIcon, 'click');
        expect(showVideoSpy.called).to.be.true;
      });
    });

    describe('listen', function () {
      var addEventSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        addEventSpy = sinon.spy(adxJSHelpers, "addEvent");
      });

      afterEach(function () {
        removeHtml('new_fixture');
        addEventSpy.restore();
      });

      it('should call the addEvent method with correct arguments on desktop', function () {
        adxCustom.mobile = false;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.thumbnail, "click")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.overlay, "click")).to.be.true;
      });

      it('should call the addEvent method with correct arguments on mobile', function () {
        adxCustom.mobile = true;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.video, "fullscreenchange")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.video, "webkitendfullscreen")).to.be.true;
      });

      it('should call the addEvent method with correct arguments for desktop and mobile', function () {
        adxCustom.mobile = true;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.video, "timeupdate")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.video, "ended")).to.be.true;
      });
    });

    describe('showVideo', function () {
      var buildCuePointsSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        buildCuePointsSpy = sinon.spy(adxVideo, 'buildCuePoints');
        adxVideo.showVideo(adxVideo.overlay, adxVideo.video, adxVideo.visible);
      });

      afterEach(function () {
        removeHtml('new_fixture');
        buildCuePointsSpy.restore();
      });

      it('should add visible class to overlay element', function () {
        expect(adxJSHelpers.hasClass(adxVideo.overlay, adxVideo.visible)).to.be.true;
      });

      it('should call buildCuePoints method', function () {
        expect(buildCuePointsSpy.calledOnce).to.be.true;
      });
    });

    describe('hideVideo', function () {
      var trackSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        trackSpy = sinon.spy(adxJSHelpers, 'track');
      });

      afterEach(function () {
        removeHtml('new_fixture');
        trackSpy.restore();
      });

      it('should remove visible class from overlay element', function () {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(adxJSHelpers.hasClass(adxVideo.overlay, adxVideo.visible)).to.be.false;
      });

      it('should call trackSpy method', function () {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(trackSpy.calledWith(adxCustom.video.close)).to.be.true;
      });

      it('should set video currentTime to 0', function () {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(adxVideo.video.currentTime).to.equal(0);
      });
    });

    describe('buildCuePoints', function () {
      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
      });

      afterEach(function () {
        removeHtml('new_fixture');
      });

      it('should add disable scroll class', function () {
        adxVideo.buildCuePoints();
        expect(adxJSHelpers.hasClass(document.body, adxVideo.disableScrollClass)).to.be.true;
      });
    });

    describe('reset', function () {
      var hideVideoSpy;

      beforeEach(function () {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        hideVideoSpy = sinon.spy(adxVideo, 'hideVideo');
        adxVideo.reset();
      });

      afterEach(function () {
        removeHtml('new_fixture');
        hideVideoSpy.restore();
      });

      it('should reset first video cue tracker', function () {
        expect(adxCustom.video[0] == adxCustom.video.replay).to.be.true;
      });

      it('should call the hideVideo method', function () {
        expect(hideVideoSpy.calledOnce).to.be.true;
      });
    });
  });
}