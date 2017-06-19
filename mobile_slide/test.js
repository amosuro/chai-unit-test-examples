describe('ADXMobileSlide', function(){
  var fixtureHtml =
      `
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

  describe('init', function() {
    var addEventSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxMobileSlide = new ADXMobileSlide();
      addEventSpy = sinon.spy(adxJSHelpers, "addEvent");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      addEventSpy.restore();
    });

    it('should call addEvent method for each customEvent', function() {
      adxMobileSlide.init();
      adxJSHelpers.loops(adxMobileSlide.slideCustomEvents, function(customEvent) {
    		expect(addEventSpy.calledWith(adxMobileSlide.slideList, customEvent, adxMobileSlide)).to.be.true;
    	});
    });
  });

  describe('handleEvent', function() {
    var begunSpy,
        endedSpy,
        swipeSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxMobileSlide = new ADXMobileSlide();
      begunSpy = sinon.spy(adxMobileSlide, 'begun');
      endedSpy = sinon.spy(adxMobileSlide, 'ended');
      swipeSpy = sinon.spy(adxMobileSlide, 'swipe');
    });

    afterEach(function() {
      removeHtml('new_fixture');
      begunSpy.restore();
      endedSpy.restore();
      swipeSpy.restore();
    });

    it('should call begun method on touchstart', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchstart");
    	expect(begunSpy.called).to.be.true;
    });

    it('should call begun method on mousedown', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mousedown");
    	expect(begunSpy.called).to.be.true;
    });

    it('should call begun method on touchend', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchend");
    	expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on mouseup', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mouseup");
    	expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on touchcancel', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchcancel");
    	expect(endedSpy.called).to.be.true;
    });

    it('should call begun method on touchmove', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "touchmove");
    	expect(swipeSpy.called).to.be.true;
    });

    it('should call begun method on touchmove', function() {
      adxMobileSlide.init();
      adxJSHelpers.fireEvent(adxMobileSlide.slideList, "mousemove");
    	expect(swipeSpy.called).to.be.true;
    });
  });

  // TODO: Need to find out how best to programatically trigger a swipe
  // gesture and pass through the event.targetTouches data
});
