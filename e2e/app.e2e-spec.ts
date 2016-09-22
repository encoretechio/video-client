import { VideoClienAppPage } from './app.po';

describe('video-clien-app App', function() {
  let page: VideoClienAppPage;

  beforeEach(() => {
    page = new VideoClienAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
