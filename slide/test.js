describe('ADXSlide', function(){
  var fixtureHtml =
      `
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

      var adxSlide,
          listenSpy,
          handleLocationSpy,
          delegateSlideAndNavigationSpy,
          selectNavigationSpy,
          displaySlideSpy;

  describe('init', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      listenSpy = sinon.spy(adxSlide, "listen");
      handleLocationSpy = sinon.spy(adxSlide, "handleLocation");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      listenSpy.restore();
      handleLocationSpy.restore();
      window.location.hash = '';
    });

    it('should call listen method', function() {
      adxSlide.init();
      expect(listenSpy.calledOnce).to.be.true;
    });

    it('should call handleLocation method', function() {
      adxSlide.init();
      expect(handleLocationSpy.calledOnce).to.be.true;
    });
  });

  describe('selectTab', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      delegateSlideAndNavigationSpy = sinon.spy(adxSlide, "delegateSlideAndNavigation");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      delegateSlideAndNavigationSpy.restore();
      window.location.hash = '';
    });

    it('should call delegateSlideAndNavigation method', function() {
      clickElement(adxSlide.navigation[0].children[0].children[0]);
      expect(delegateSlideAndNavigationSpy.calledOnce).to.be.true;
    });
  });

  describe('delegateSlideAndNavigation', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      selectNavigationSpy = sinon.spy(adxSlide, "selectNavigation");
      displaySlideSpy = sinon.spy(adxSlide, "displaySlide");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      selectNavigationSpy.restore();
      displaySlideSpy.restore();
      window.location.hash = '';
    });

    it('should call selectNavigation method', function() {
      adxSlide.delegateSlideAndNavigation(1, 2);
      expect(selectNavigationSpy.calledOnce).to.be.true;
    });

    it('should call displaySlide method', function() {
      adxSlide.delegateSlideAndNavigation(1, 2);
      expect(displaySlideSpy.calledOnce).to.be.true;
    });
  });

  describe('selectNavigation', function() {
    var currentTab,
        selectedTab;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      currentTab = document.querySelectorAll('[data-adx-navigation-link]')[0];
      selectedTab = currentTab.querySelectorAll('li')[2].children[0];
      adxSlide.selectNavigation(currentTab, 2);
    });

    afterEach(function() {
      removeHtml('new_fixture');
      window.location.hash = '';
    });

    it('should remove selected class from current tab', function() {
      expect(adxJSHelpers.hasClass(currentTab, 'adx-is-selected')).to.be.false;
    });

    it('should add selected class to current tab', function() {
      expect(adxJSHelpers.hasClass(selectedTab, 'adx-is-selected')).to.be.true;
    });

    it('should add hash to window location', function() {
      expect(window.location.hash).to.contain("#slide-three");
    });
  });

  describe('displaySlide', function() {
    var slidePreviousSpy,
        slideNextSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      slidePreviousSpy = sinon.spy(adxSlide, "slidePrevious");
      slideNextSpy = sinon.spy(adxSlide, "slideNext");
    });

    afterEach(function() {
      removeHtml('new_fixture');
      window.location.hash = '';
      slideNextSpy.restore();
      slidePreviousSpy.restore();
    });

    it('should call slidePrevious method', function() {
      adxSlide.displaySlide(1, 3);
      expect(slidePreviousSpy.calledOnce).to.be.true;
    });

    it('should call slideNext method', function() {
      adxSlide.displaySlide(3, 1);
      expect(slideNextSpy.calledOnce).to.be.true;
    });
  });

  describe('nextSlide', function() {
    var handleAnimationSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      handleAnimationSpy = sinon.spy(adxSlide, 'handleAnimation');
      adxSlide.nextSlide(adxSlide.slide[0], adxSlide.slide[1]);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should remove selected class from current slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.selectedClass)).to.be.false;
    });

    it('should add moving class to current slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.movingClass)).to.be.true;
    });

    it('should add move left class to current slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], 'adx-move-left')).to.be.true;
    });

    it('should add selected class to next slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[1], adxSlide.selectedClass)).to.be.true;
    });

    it('should call the handleAnimation method', function() {
      expect(handleAnimationSpy.called).to.be.true;
    });
  });

  describe('previousSlide', function() {
    var handleAnimationSpy;

    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
      handleAnimationSpy = sinon.spy(adxSlide, 'handleAnimation');
      adxSlide.previousSlide(adxSlide.slide[0], adxSlide.slide[1]);
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should remove selected class from current slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.selectedClass)).to.be.false;
    });

    it('should call the handleAnimation method', function() {
      expect(handleAnimationSpy.called).to.be.true;
    });

    it('should add selected class to next slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[1], adxSlide.selectedClass)).to.be.true;
    });

    it('should add moving class to current slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], adxSlide.movingClass)).to.be.true;
    });

    it('should remove move left class to next slide', function() {
      expect(adxJSHelpers.hasClass(adxSlide.slide[0], 'adx-move-left')).to.be.false;
    });
  });

  describe('addTransitionClass', function() {
    beforeEach(function() {
      appendHtml(fixtureHtml);
      adxSlide = new ADXSlide();
    });

    afterEach(function() {
      removeHtml('new_fixture');
    });

    it('should add a slide transition class to each slide', function() {
      adxSlide.addTransitionClass();

      adxJSHelpers.loops(adxSlide.slide, function(slide) {
        expect(adxJSHelpers.hasClass(slide, 'adx-hero__slide--transition-slide')).to.be.true;
      });
    });

    it('should add a fade transition class to each slide', function() {
      adxSlide = new ADXSlide({
        transitionStyle: 'fade'
      });

      adxSlide.addTransitionClass();

      adxJSHelpers.loops(adxSlide.slide, function(slide) {
        expect(adxJSHelpers.hasClass(slide, 'adx-hero__slide--transition-fade')).to.be.true;
      });
    });
  });
});
