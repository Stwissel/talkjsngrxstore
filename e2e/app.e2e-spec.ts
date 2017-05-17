import { TalkjsngrxstorePage } from './app.po';

describe('talkjsngrxstore App', () => {
  let page: TalkjsngrxstorePage;

  beforeEach(() => {
    page = new TalkjsngrxstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
