import { ChatdemoPage } from './app.po';

describe('chatdemo App', () => {
  let page: ChatdemoPage;

  beforeEach(() => {
    page = new ChatdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
