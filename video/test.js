/**
 * HTMLMediaElement is not supported in PhantomJS
 * @see https://github.com/ariya/phantomjs/issues/10839
 */
if (!window.callPhantom) {
  describe('ADXVideo', function(){
    var adxVideo,
        fixtureHtml =
        `
        <div class="adx-hero__video-thumbnail__container">
          <div class="adx-video__thumbnail" data-adx="adx-video__thumbnail">
            <span class="adx-video__thumbnail__play-button" data-adx="adx-video__play-icon">Click me</span>
          </div>
        </div>
        <div id="adx-overlay" class="adx-video__overlay" data-action="adx-close" data-adx="adx-video__container">
    			<video class="adx-video" src="" data-adx="adx-video"></video>
    		</div>
        `;

    describe('init', function() {
      var handleSupportedBrowserSpy,
          handleUnSupportedBrowserSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        handleSupportedBrowserSpy = sinon.spy(adxVideo, "handleSupportedBrowser");
        handleUnSupportedBrowserSpy = sinon.spy(adxVideo, "handleUnSupportedBrowser");
      });

      afterEach(function() {
        removeHtml('new_fixture');
        handleSupportedBrowserSpy.restore();
        handleUnSupportedBrowserSpy.restore();
      });

      it('should call handleSupportedBrowser function', function() {
        sinon.stub(adxVideo, "checkForSupport").returns(true);
        adxVideo.init();
        expect(handleSupportedBrowserSpy.calledOnce).to.be.true;
      });

      it('should call handleUnSupportedBrowser function', function() {
        sinon.stub(adxVideo, "checkForSupport").returns(false);
        adxVideo.init();
        expect(handleUnSupportedBrowserSpy.called).to.be.true;
      });
    });

    describe('handleSupportedBrowser', function() {
      var listenSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        listenSpy = sinon.spy(adxVideo, "listen");
      });

      afterEach(function() {
        removeHtml('new_fixture');
        listenSpy.restore();
      });

      it('should set track to empty string', function() {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.track).to.be.equal("");
      });

      it('should call listen function', function() {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(listenSpy.calledOnce).to.be.true;
      });

      it('should populate src attribute with video URL', function() {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.getAttribute('src')).to.equal(adxCustom.video.video);
      });

      it('should populate poster attribute with preMediaSlate URL', function() {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.getAttribute('poster')).to.equal(adxCustom.video.preMediaSlate);
      });

      it('should add controls attribute', function() {
        adxVideo.handleSupportedBrowser(adxVideo.video);
        expect(adxVideo.video.hasAttribute('controls')).to.be.true;
      });
    });

    describe('handleOverlay', function() {
      var hideVideoSpy,
          showVideoSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        hideVideoSpy = sinon.spy(adxVideo, "hideVideo");
        showVideoSpy = sinon.spy(adxVideo, "showVideo");
      });

      afterEach(function() {
        removeHtml('new_fixture');
        hideVideoSpy.restore();
        showVideoSpy.restore();
      });

      it('should call the showVideo method', function() {
        adxVideo.init();
        adxJSHelpers.fireEvent(adxVideo.playIcon, 'click');
        expect(showVideoSpy.called).to.be.true;
      });
    });

    describe('listen', function() {
      var addEventSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        addEventSpy = sinon.spy(adxJSHelpers, "addEvent");
      });

      afterEach(function() {
        removeHtml('new_fixture');
        addEventSpy.restore();
      });

      it('should call the addEvent method with correct arguments on desktop', function() {
        adxCustom.mobile = false;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.thumbnail, "click")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.overlay, "click")).to.be.true;
      });

      it('should call the addEvent method with correct arguments on mobile', function() {
        adxCustom.mobile = true;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.video, "fullscreenchange")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.video, "webkitendfullscreen")).to.be.true;
      });

      it('should call the addEvent method with correct arguments for desktop and mobile', function() {
        adxCustom.mobile = true;
        adxVideo.listen();
        expect(addEventSpy.calledWith(adxVideo.video, "timeupdate")).to.be.true;
        expect(addEventSpy.calledWith(adxVideo.video, "ended")).to.be.true;
      });
    });

    describe('showVideo', function() {
      var buildCuePointsSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        buildCuePointsSpy = sinon.spy(adxVideo, 'buildCuePoints');
        adxVideo.showVideo(adxVideo.overlay, adxVideo.video, adxVideo.visible);
      });

      afterEach(function() {
        removeHtml('new_fixture');
        buildCuePointsSpy.restore();
      });

      it('should add visible class to overlay element', function() {
        expect(adxJSHelpers.hasClass(adxVideo.overlay, adxVideo.visible)).to.be.true;
      });

      it('should call buildCuePoints method', function() {
        expect(buildCuePointsSpy.calledOnce).to.be.true;
      });
    });

    describe('hideVideo', function() {
      var trackSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        trackSpy = sinon.spy(adxJSHelpers, 'track');
      });

      afterEach(function() {
        removeHtml('new_fixture');
        trackSpy.restore();
      });

      it('should remove visible class from overlay element', function() {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(adxJSHelpers.hasClass(adxVideo.overlay, adxVideo.visible)).to.be.false;
      });

      it('should call trackSpy method', function() {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(trackSpy.calledWith(adxCustom.video.close)).to.be.true;
      });

      it('should set video currentTime to 0', function() {
        adxVideo.hideVideo(true, adxVideo.overlay, adxVideo.video, adxVideo.visible);
        expect(adxVideo.video.currentTime).to.equal(0);
      });
    });

    describe('buildCuePoints', function() {
      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
      });

      afterEach(function() {
        removeHtml('new_fixture');
      });

      it('should add disable scroll class', function() {
        adxVideo.buildCuePoints();
        expect(adxJSHelpers.hasClass(document.body, adxVideo.disableScrollClass)).to.be.true;
      });
    });

    describe('reset', function() {
      var hideVideoSpy;

      beforeEach(function() {
        appendHtml(fixtureHtml);
        adxVideo = new ADXVideo();
        hideVideoSpy = sinon.spy(adxVideo, 'hideVideo');
        adxVideo.reset();
      });

      afterEach(function() {
        removeHtml('new_fixture');
        hideVideoSpy.restore();
      });

      it('should reset first video cue tracker', function() {
        expect((adxCustom.video[0] == adxCustom.video.replay)).to.be.true;
      });

      it('should call the hideVideo method', function() {
        expect(hideVideoSpy.calledOnce).to.be.true;
      });
    });
  });
}
