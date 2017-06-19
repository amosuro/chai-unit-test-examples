describe('ADXAutoBuyBox', function(){
  var fixtureHtml =
  `
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

  var response =
        {"GetDecoratedOffersResponse":{"GetDecoratedOffersResult":{"offers":[{"applicablePromotions":null,"asin":"B016MJNJ6Y","buyingPrice":100.0,"currency":"EUR","customerReviewSummary":{"count":2,"rating":5.0},"imageInformation":{"height":398,"secureUrl":"https://images-eu.ssl-images-amazon.com/images/I/41i27bqzBQL.jpg","url":"http://ecx.images-amazon.com/images/I/41i27bqzBQL.jpg","width":500},"inStock":true,"isDigital":false,"itemTitle":"Acconto Toyota AYGO Amazon Edition","listPrice":0.0,"merchantId":"A9L634D1LKQAS","merchantName":"Toyota Motor Italia","preorderReleaseDate":null,"pricePerUnit":"","promotionOffer":null,"promotionRedemptionCount":0,"purchasePipeline":"addToCart","shippingPriceInformation":{"isEligibleFreeShipping":false,"isEligiblePrimeShipping":false,"isEligibleSuperSaverShipping":false,"isFBA":false,"shippingPrice":0.0},"shouldPreorder":false,"subscribeAndSaveInformation":null,"time":1450434175135,"token":"81CC3A7104BC9879104EF0B9DD281D56E9E6C7B9","violatesMap":false}]},"ResponseMetadata":{"RequestId":"4d49397b-a571-11e5-a5de-215a8245878a"}}}
      ;

  describe('defaultOptions', function() {
    var buyBox;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should allow the update of custom product title', function() {
      expect(buyBox.heroTitle).to.equal('AYGO Amazon Edition');
    });

    it('should allow the update of custom locale', function() {
      expect(buyBox.locale).to.equal('it');
    });

    it('should allow the update of custom list price', function() {
      expect(buyBox.customListPrice).to.equal(15450);
    });

    it('should allow the update of custom buying price', function() {
      expect(buyBox.customBuyingPrice).to.equal(12000);
    });

    it('should allow the update of custom buying price legal copy', function() {
      expect(buyBox.customBuyingPriceLegal).to.equal('(IVA e IPT inclusi)');
    });

    it('should allow the update of custom saving price', function() {
      expect(buyBox.customSavingPrice).to.equal(3450);
    });

    it('should allow the update of custom reserve copy', function() {
      expect(buyBox.customReserveCopy).to.equal('Prenotala con:');
    });

    it('should allow the update of custom reserve price', function() {
      expect(buyBox.customReservePrice).to.equal(100);
    });

    it('should allow the update of custom reserve legal copy', function() {
      expect(buyBox.customReserveLegal).to.equal('(acconto prenotazione vettura)');
    });

    it('should allow the update of custom availability copy', function() {
      expect(buyBox.customAvailability).to.equal('Solo 50 esemplari disponibili');
    });

    it('should allow the update of custom CTA legal copy', function() {
      expect(buyBox.customCTALegal).to.equal('Cliccando su «prenota ora» si procede con l’opzione di acquisto. Il perfezionamento dell’acquisto avverrà tramite call center Toyota. Per maggiori info vedere il box «modalità d’acquisto». Venduta e consegnata da Toyota');
    });
  });

  describe('init', function() {
    var buyBox,
        data = response,
        buildBuyBoxSpy;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should call the buildBuyBox method once', function() {
      expect(buildBuyBoxSpy.called).to.be.true;
    });
  });

  describe('buildBuyBox', function() {
    var buyBox,
        finishBuyBoxSpy,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
      finishBuyBoxSpy.restore();
    });

    it('should call finishBuyBox method', function() {
      expect(finishBuyBoxSpy.called).to.be.true;
    });
  });

  describe('finishBuyBox', function() {
    var buyBox,
        populateBuyBoxSpy,
        listenSpy,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
      populateBuyBoxSpy.restore();
      listenSpy.restore();
    });

    it('should call populateBuyBox method', function() {
      expect(populateBuyBoxSpy.called).to.be.true;
    });

    it('should call listen method', function() {
      var isMobileAppStub = sinon.stub(adxJSHelpers, 'isMobileApp').returns(true);
      buyBox.init(data);
      expect(listenSpy.called).to.be.true;
      isMobileAppStub.restore();
    });
  });

  describe('populateBuyBox', function() {
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

    beforeEach(function() {
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

    afterEach(function() {
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

    it('should remove hidden classes from list price container if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPriceContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should remove hidden classes from saving container if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.savingContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should remove hidden classes from buying price container if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.buyingPriceContainer, buyBox.hiddenClass)).to.be.false;
    });

    it('should call populatePrice method if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populatePriceSpy.called).to.be.true;
    });

    it('should call populateListPrice method if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateListPriceSpy.called).to.be.true;
    });

    it('should call populateSaving method if product is available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateSavingSpy.called).to.be.true;
    });

    it('should add hidden classes to list price container if product is not available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPriceContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should add hidden classes to saving container if product is not available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.savingContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should add hidden classes to buying price container if product is not available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.buyingPriceContainer, buyBox.hiddenClass)).to.be.true;
    });

    it('should call populateTitle method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateTitleSpy.called).to.be.true;
    });

    it('should call populateMerchantName method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateMerchantNameSpy.called).to.be.true;
    });

    it('should call populateReserve method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateReserveSpy.called).to.be.true;
    });

    it('should call populateAvailability method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateAvailabilitySpy.called).to.be.true;
    });

    it('should call populateCTALegal method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateCTALegalSpy.called).to.be.true;
    });

    it('should call populateButton method', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateBuyBox(asin);
      expect(populateButtonSpy.called).to.be.true;
    });
  });

  describe('populateTitle', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate product title element with itemTitle', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.textContent).to.equal('Acconto Toyota AYGO Amazon Edition');
    });
  });

  describe('populateMerchantName', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate merchant name element with merchantName', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateTitle(asin);
      expect(buyBox.merchantName.textContent).to.equal('Toyota Motor Italia');
    });
  });

  describe('populateListPrice', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate list copy element with listCopy', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateListPrice(asin);
      expect(buyBox.listCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].listCopy);
    });

    it('should populate list price element with listPrice', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateListPrice(asin);
      expect(buyBox.listPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customListPrice));
    });
  });

  describe('populatePrice', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate buying copy element with priceCopy', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].priceCopy);
    });

    it('should populate buying price element with customBuyingPrice', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customBuyingPrice));
    });

    it('should populate buying legal element with customBuyingPriceLegal', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.buyingLegal.textContent).to.equal(buyBox.customBuyingPriceLegal);
    });
  });

  describe('populateSaving', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate saving copy element with priceCopy', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingCopy.textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].saveCopy);
    });

    it('should populate saving price element with savingPrice', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingPrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customSavingPrice));
    });

    it('should populate saving percentage element with savingPercentage', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.savingPercentage.textContent).to.equal(adxJSHelpers.calculateSaving(buyBox.customBuyingPrice, buyBox.customListPrice));
    });
  });

  describe('populateReserve', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate reserve copy element with customReserveCopy', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reserveCopy.textContent).to.equal(buyBox.customReserveCopy);
    });

    it('should populate reserve price element with customReservePrice', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reservePrice.textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, buyBox.customReservePrice));
    });

    it('should populate reserve legal element with customReserveLegal', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateReserve(asin);
      expect(buyBox.reserveLegal.textContent).to.equal(buyBox.customReserveLegal);
    });
  });

  describe('populateAvailability', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate availability copy element with customAvailability', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateAvailability(asin);
      expect(buyBox.availability.textContent).to.equal(buyBox.customAvailability);
    });
  });

  describe('populateCTALegal', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate CTA legal element with customCTALegal', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateCTALegal(asin);
      expect(buyBox.ctaLegal.textContent).to.equal(buyBox.customCTALegal);
    });
  });

  describe('populateButton', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should add data-id attribute to primaryCta', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.hasAttribute('data-id')).to.be.true;
    });

    it('should add data-asin attribute to primaryCta', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.hasAttribute('data-asin')).to.be.true;
    });

    it('should add class if in stock', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateButton(asin);
      expect(adxJSHelpers.hasClass(buyBox.primaryCta.children[1], 'a-icon-cart')).to.be.true;
    });

    it('should remove class if out of stock', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(adxJSHelpers.hasClass(buyBox.primaryCta.children[1], 'a-icon-cart')).to.be.false;
    });

    it('should build ATC URL in href attribute if in stock', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = true;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.getAttribute('href')).to.equal(adxJSHelpers.buildATCLink(asin, adxJSHelpers.localisation[buyBox.locale].suffix));
    });

    it('should build shop now URL in href attribute if out of stock', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.getAttribute('href')).to.equal(adxJSHelpers.buildShopNowLink(asin.asin, adxJSHelpers.localisation[buyBox.locale].suffix, asin.merchantId, adxJSHelpers.isMobileWeb()));
    });

    it('should populate primary CTA child element with bookNow', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = true;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].bookNow);
    });

    it('should populate primary CTA child element with shopNow', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.inStock = false;
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });
  });
});
