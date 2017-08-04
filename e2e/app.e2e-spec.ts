import { PhotoAlbumPage } from './app.po';

describe('photo-album App', function() {
  let page: PhotoAlbumPage;

  beforeEach(() => {
    page = new PhotoAlbumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
