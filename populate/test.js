describe('ADXPopulate', function(){
  var fixtureHtml =
      `
      <div class="adx-page__loader adx-is-visible"></div>

      <div data-adx-populate-tracker="navigation_one_tracker"></div>

      <div data-adx-populate-text="slide_one_image"></div>

      <div href="" data-adx-populate-href="slide_three_button_href"></div>
      `;

  var adxPopulate;

  describe('populateText', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should populate element with text content', function() {
      adxPopulate.populateText();
      expect(document.querySelector('[data-adx-populate-text="slide_one_image"]').textContent).includes(adxCustom.slide_one_image);
    });
  });

  describe('populateHref', function() {
    var addEventSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
      addEventSpy = sinon.spy(adxJSHelpers, 'addEvent');
    });

    afterEach(function() {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should populate element href attribute', function() {
      adxPopulate.populateHref();
      expect(document.querySelector('[data-adx-populate-href]').getAttribute('href')).includes(adxCustom.slide_three_button_href);
    });

    it('should call addEvent method', function() {
      adxPopulate.populateHref();
      expect(addEventSpy.calledWith(document.querySelector('[data-adx-populate-href]'))).to.be.true;
    });
  });

  describe('populateTracker', function() {
    var addEventSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
      addEventSpy = sinon.spy(adxJSHelpers, 'addEvent');
    });

    afterEach(function() {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should populate element href attribute', function() {
      adxPopulate.populateTracker();
      expect(document.querySelector('[data-adx-populate-tracker]').getAttribute('data-track')).includes(adxCustom.navigation_one_tracker);
    });

    it('should call addEvent method', function() {
      adxPopulate.populateTracker();
      expect(addEventSpy.calledWith(document.querySelector('[data-adx-populate-tracker]'))).to.be.true;
    });
  });

  describe('clearLoader', function() {
    this.timeout(5000);

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxPopulate = new ADXPopulate();
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should remove class from page loader element', function(done) {
      expect(adxJSHelpers.hasClass(document.querySelectorAll('.adx-page__loader'), 'adx-is-visible')).to.be.false;
      done();
    });
  });
});
