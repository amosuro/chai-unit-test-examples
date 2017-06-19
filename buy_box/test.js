describe('ADXBuyBox', function(){
  var fixtureHtml =
  `
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

  var response =
      {
       "GetDecoratedOffersResponse":{
          "GetDecoratedOffersResult":{
             "offers":[
                {
                   "applicablePromotions":null,
                   "asin":"B00ZG1S834",
                   "buyingPrice":49.99,
                   "currency":"GBP",
                   "customerReviewSummary":{
                      "count":0,
                      "rating":0.0
                   },
                   "imageInformation":{
                      "height":500,
                      "secureUrl":"https://images-eu.ssl-images-amazon.com/images/I/51CXWYOytTL.jpg",
                      "url":"http://ecx.images-amazon.com/images/I/51CXWYOytTL.jpg",
                      "width":394
                   },
                   "inStock":true,
                   "isDigital":false,
                   "itemTitle":"No Man's Sky (PS4)",
                   "listPrice":54.99,
                   "merchantId":"A3P5ROKL5A1OLE",
                   "merchantName":"Amazon.co.uk",
                   "preorderReleaseDate":null,
                   "pricePerUnit":"",
                   "promotionOffer":null,
                   "promotionRedemptionCount":0,
                   "purchasePipeline":"addToCart",
                   "shippingPriceInformation":{
                      "isEligibleFreeShipping":false,
                      "isEligiblePrimeShipping":true,
                      "isEligibleSuperSaverShipping":true,
                      "isFBA":true,
                      "shippingPrice":1.99
                   },
                   "shouldPreorder":false,
                   "subscribeAndSaveInformation":null,
                   "time":1446653464195,
                   "token":"0720C595F9CF8AC7A03FCE8954C8A4EB5AFBF3D0",
                   "violatesMap":false
                }
             ]
          },
          "ResponseMetadata":{
             "RequestId":"a5f27820-830e-11e5-92ca-6f90a3801d53"
          }
       }
     },
    responseWithVariants =
      {
        "GetDecoratedOffersResponse": {
            "GetDecoratedOffersResult": {
                "offers": [
                    {
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
                    },
                    {
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
                    }
                ]
            },
            "ResponseMetadata": {
                "RequestId": "4fbf8dd9-9426-11e5-a2b7-7969f373066e"
            }
        }
      };

  describe('defaultOptions', function() {
    var buyBox;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      buyBox = new ADXBuyBox({heroTitle: 'Foobar'});
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should allow the update of custom product title', function() {
      expect(buyBox.heroTitle).to.equal('Foobar');
    });

    it('should allow the update of custom locale', function() {
      var buyBox = new ADXBuyBox({locale: 'jp'});
      expect(buyBox.locale).to.equal('jp');
    });
  });

  describe('init', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should push products asin to the asins object', function() {
      expect(buyBox.asins).to.have.property('B00ZG1S834');
    });
  });

  describe('buildBuyBox', function() {
    var buyBox,
        data = response;

    before(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    after(function() {
      removeHtml('new_fixture');
    });

    it('should call populateDropdown function if asins greater than one', function() {
      buyBox.buildBuyBox(3);
      expect(buyBox.select.hasChildNodes()).to.be.true;
    });

    it('should add hidden class if asins less than one', function() {
      buyBox.buildBuyBox(1);
      expect(adxJSHelpers.hasClass(buyBox.selectContainer, buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateDropdown', function() {
    var buyBox,
        asin,
        data = response,
        firstOption;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({
        variantDropdownText: {
          B00ZG1S834: 'Foo bar'
        }
      });
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate option value with ASIN', function() {
      buyBox.populateDropdown(asin);
      var firstOption = document.querySelector(".adx-buybox__dropdown").options[0];

      expect(firstOption.value).to.equal("B00ZG1S834");
      expect(firstOption.textContent).to.equal("Foo bar");
    });
  });

  describe('populateOptionalCopy', function() {
    var buyBox,
        asin,
        optionalCopyContainer,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({optionalCopy: 'Foobar'});
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate optional copy', function() {
      buyBox.populateDropdown(asin);
      optionalCopyContainer = document.querySelector(".adx-buybox__dropdown");
      buyBox.optionalCopy.textContent = "Foobar";

      expect(buyBox.optionalCopy.textContent).to.equal("Foobar");
    });
  });

  describe('populateBuyBox', function() {
    var buyBox,
        asin,
        data = response,
        populateStarsSpy,
        populateCountSpy,
        populateRatingLinkSpy,
        populatePriceSpy,
        populateListSpy,
        populateSavingSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({locale: 'fr'});
      buyBox.init(data);
      asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      populateStarsSpy = sinon.spy(buyBox, 'populateStars');
      populateCountSpy = sinon.spy(buyBox, 'populateCount');
      populateRatingLinkSpy = sinon.spy(buyBox, 'populateRatingLink');
      populatePriceSpy = sinon.spy(buyBox, 'populatePrice');
      populateListSpy = sinon.spy(buyBox, 'populateList');
      populateSavingSpy = sinon.spy(buyBox, 'populateSaving');
    });

    afterEach(function() {
      removeHtml('new_fixture');
      populateStarsSpy.restore();
      populateCountSpy.restore();
      populateRatingLinkSpy.restore();
      populatePriceSpy.restore();
      populateListSpy.restore();
      populateSavingSpy.restore();
    });

    it('should call populateStars method if buyBox can show reviews', function() {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateStarsSpy.called).to.be.true;
    });

    it('should call populateCount method if buyBox can show reviews', function() {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateCountSpy.called).to.be.true;
    });

    it('should call populateRatingLink method if buyBox can show reviews', function() {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(populateRatingLinkSpy.called).to.be.true;
    });

    it('should remove hidden classes from review star and count elements if buyBox can show reviews', function() {
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar, buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.reviewCount, buyBox.hiddenClass)).to.be.false;
    });

    it('should add hidden classes to review star and count elements if buyBox cannot show reviews', function() {
      asin.customerReviewSummary.count = 10;
      asin.customerReviewSummary.rating = 2;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar, buyBox.hiddenClass)).to.be.true;
      expect(adxJSHelpers.hasClass(buyBox.reviewCount, buyBox.hiddenClass)).to.be.true;
    });

    it('should remove hidden classes from sale price element if product is available', function() {
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice, buyBox.hiddenClass)).to.be.false;
    });

    it('should call populatePrice method if product is available', function() {
      buyBox.populateBuyBox(asin);
      expect(populatePriceSpy.called).to.be.true;
    });

    it('should add hidden class to salePrice element if product is not available', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice, buyBox.hiddenClass)).to.be.true;
      asin.buyingPrice = 49.99; // Restore buyingPrice back to default
    });

    it('should call populateList method if available, cheaper than RRP & above savings threshold', function() {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(populateListSpy.called).to.be.true;
    });

    it('should call populateSaving method if available, cheaper than RRP & above savings threshold', function() {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(populateSavingSpy.called).to.be.true;
    });

    it('should remove hidden classes from list price and savings element if available, cheaper than RRP & above savings threshold', function() {
      asin.buyingPrice = 90;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPrice, buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.saving, buyBox.hiddenClass)).to.be.false;
    });

    it('should add hidden classes to list price and savings element if not cheaper than RRP & below savings threshold', function() {
      asin.buyingPrice = 110;
      asin.listPrice = 100;

      buyBox.populateBuyBox(asin);
      expect(adxJSHelpers.hasClass(buyBox.listPrice, buyBox.hiddenClass)).to.be.true;
      expect(adxJSHelpers.hasClass(buyBox.saving, buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateTitle', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({locale: 'fr'});
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate product title', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.children[0].textContent).to.equal("No Man's Sky (PS4)");
    });

    it('should add href attribute to product title', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      expect(buyBox.productTitle.hasAttribute("href")).to.be.true;
    });

    it('should build correct url on desktop', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];

      expect(buyBox.productTitle.getAttribute("href")).to.equal("http://www.amazon." + buyBox.locale + "/dp/B00ZG1S834?me=" + asin.merchantId);
    });

    it('should build correct url if on mobile', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      var isMobileWebStub = sinon.stub(adxJSHelpers, "isMobileWeb").returns(true);
      buyBox.populateTitle(asin);
      expect(buyBox.productTitle.getAttribute("href")).to.equal("http://www.amazon." + buyBox.locale + "/gp/aw/d/B00ZG1S834?me=" + asin.merchantId);
      isMobileWebStub.restore();
    });
  });

  describe('populatePrice', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({optionalCopy: 'Foobar'});
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate price copy', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.salePrice.children[0].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].priceCopy);
    });

    it('should populate buying price', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(buyBox.salePrice.children[1].textContent).to.equal(adxJSHelpers.formatCurrency(buyBox.locale, asin.buyingPrice));
    });

    it('should toggle classes if eligible prime shipping', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populatePrice(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], buyBox.hiddenClass)).to.be.false;
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], adxJSHelpers.localisation[buyBox.locale].prime)).to.be.true;

      asin.shippingPriceInformation.isEligiblePrimeShipping = false;

      buyBox.populatePrice(asin);
      expect(adxJSHelpers.hasClass(buyBox.salePrice.children[2], buyBox.hiddenClass)).to.be.true;
    });
  });

  describe('populateStars', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should add class to review star child element', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateStars(asin);
      expect(adxJSHelpers.hasClass(buyBox.reviewStar.children[0], 'a-star-4')).to.be.true;
    });
  });

  describe('populateCount', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate review count element with number of reviews', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateCount(asin);
      expect(buyBox.reviewCount.textContent).to.equal("15");
    });
  });

  describe('populateRatingLink', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate review element href attribute with review link', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.customerReviewSummary.count = 15;
      asin.customerReviewSummary.rating = 4;

      buyBox.populateRatingLink(asin);
      expect(buyBox.review.getAttribute("href")).to.equal("http://www.amazon.uk/product-reviews/B00ZG1S834");
    });
  });

  describe('populateList', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({locale: 'fr'});
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate list copy with correct localisation', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateList(asin);
      expect(buyBox.listPrice.children[0].textContent).to.equal("Prix conseillé : ");
      expect(adxJSHelpers.formatCurrency(buyBox.locale, asin.listPrice)).to.equal(buyBox.listPrice.children[1].textContent);
    });
  });

  describe('populateSaving', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({locale: 'fr'});
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate saving copy with correct localisation', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.populateSaving(asin);
      expect(buyBox.saving.children[0].textContent).to.equal("Économisez : ");
      expect(adxJSHelpers.calculateSaving(asin.buyingPrice, asin.listPrice)).to.equal(buyBox.saving.children[1].textContent);
    });
  });

  describe('populateButton', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox({locale: 'fr'});
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate a shopNow button if product is pre-order', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.shouldPreorder = true;
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate a shopNow button if product is sold out', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.buyingPrice = 0;
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate a shopNow button if locale is japanese', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      buyBox.locale = 'jp';
      buyBox.init(data);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].shopNow);
    });

    it('should populate an ATC link if product available, not a pre-order and not japanese locale', function() {
      var asin = buyBox.asins[Object.keys(buyBox.asins)[0]];
      asin.shouldPreorder = false;
      asin.buyingPrice = 5;
      buyBox.locale = 'uk';
      buyBox.populateButton(asin);
      expect(buyBox.primaryCta.children[1].textContent).to.equal(adxJSHelpers.localisation[buyBox.locale].atc);
    });
  });

  describe('updateOnChange', function() {
    var buyBox,
        data = responseWithVariants,
        populateBuyBoxSpy,
        changeVariantImageSpy,
        isMobileWebStub;

    beforeEach(function() {
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

    afterEach(function() {
      removeHtml('new_fixture');
      isMobileWebStub.restore();
    });

    it('should call populateBuyBox method', function() {
      buyBox.select.selectedIndex = 1;
      adxJSHelpers.fireEvent(buyBox.select, "change");
      expect(populateBuyBoxSpy.calledWith(buyBox.asins['B00XHS0O30'])).to.true;
    });

    it('should call changeVariantImage method', function() {
      isMobileWebStub.returns(true);
      buyBox.select.selectedIndex = 1;
      adxJSHelpers.fireEvent(buyBox.select, "change");
      expect(changeVariantImageSpy.called).to.true;
    });
  });

  describe('changeVariantImage', function() {
    var buyBox,
        data = response;

    beforeEach(function() {
      appendHtml(fixtureHtml);

      buyBox = new ADXBuyBox();
      buyBox.init(data);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should update buy box image background url', function() {
      buyBox.changeVariantImage('https://images-na.ssl-images-amazon.com/images/G/08/creatives/assassins_cread_2/images/video-poster-retina.png');
      expect(buyBox.image.style.backgroundImage).to.contain('https://images-na.ssl-images-amazon.com/images/G/08/creatives/assassins_cread_2/images/video-poster-retina.png');
    });
  });
});
