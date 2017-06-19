describe('ADXCarousel', function(){
  var fixtureHtml =
  `
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

  var adxCarousel,
      handleNavigationSpy,
      listenSpy;

  describe('init', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      handleNavigationSpy = sinon.spy(adxCarousel, "handleNavigation");
      listenSpy = sinon.spy(adxCarousel, "listen");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      handleNavigationSpy.reset();
      listenSpy.reset();
    });

    it('should set container width to total width of all children', function() {
      expect(adxCarousel.container.style.width == "200px").to.be.true;
    });

    it('should call handleNavigation method', function() {
      adxCarousel.init();
      expect(handleNavigationSpy.calledOnce).to.be.true;
    });

    it('should call listen method', function() {
      adxCarousel.init();
      expect(listenSpy.calledOnce).to.be.true;
    });
  });

  describe('slide', function() {
    var previousSlide,
        nextSlide,
        handleNavigationSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      previousSlide = adxCarousel.navigation[0];
      nextSlide = adxCarousel.navigation[1];
      handleNavigationSpy = sinon.spy(adxCarousel, "handleNavigation");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      handleNavigationSpy.reset();
    });

    it('should set the new position left value of container based on button clicked', function() {
      clickElement(nextSlide);
      expect(adxCarousel.container.style.left == "-100px").to.be.true;
      clickElement(previousSlide);
      expect(adxCarousel.container.style.left == "0px").to.be.true;
    });

    it('should call handleNavigation method', function() {
      clickElement(nextSlide);
      expect(handleNavigationSpy.calledOnce).to.be.true;
    });
  });

  describe('handleNavigation', function() {
    var previousSlide,
        nextSlide;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxCarousel = new ADXCarousel();
      previousSlide = adxCarousel.navigation[0];
      nextSlide = adxCarousel.navigation[1];
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should remove class from next button if at end of the slides', function() {
      clickElement(nextSlide);
      expect(adxJSHelpers.hasClass(nextSlide, 'adx-is-visible')).to.be.false;
    });

    it('should add class to previous button if not at beginning of the slides', function() {
      clickElement(nextSlide);
      expect(adxJSHelpers.hasClass(previousSlide, 'adx-is-visible')).to.be.true;
    });
  });
});
