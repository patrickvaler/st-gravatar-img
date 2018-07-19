import { TestWindow } from '@stencil/core/dist/testing';
import { GravatarImg, avatarBaseUrl, defaultSize } from './st-gravatar-img';

describe('st-gravatar-img', () => {
  it('should build', () => {
    expect(new GravatarImg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLElement;
    let testWindow: TestWindow;
    let imgElement: HTMLImageElement;
    const hashMock = 'hash-mock';

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [GravatarImg],
        html: '<st-gravatar-img></st-gravatar-img>'
      });
      imgElement = element.querySelector('img');
    });

    it('should work without parameters', () => {
      expect(element).toBeTruthy();
    });

    it('should work with hash', async () => {
      const params = `s=${defaultSize}`;
      element.hash = hashMock;
      await testWindow.flush();
      expect(imgElement.getAttribute('src')).toEqual(
        `${avatarBaseUrl}/${hashMock}?${params}`
      );
    });

    it('should work with size', async () => {
      const sizeMock = 200;
      element.hash = hashMock;
      element.size = sizeMock;
      await testWindow.flush();
      expect(imgElement.getAttribute('src')).toEqual(
        `${avatarBaseUrl}/${hashMock}?s=${sizeMock}`
      );
    });

    it('should work with email', async () => {
      const email = 'my@email.com';
      const expectedHash = '4f384e9f3e8e625aae72b52658323d70';
      const params = `s=${defaultSize}`;
      element.email = email;
      await testWindow.flush();
      expect(imgElement.getAttribute('src')).toEqual(
        `${avatarBaseUrl}/${expectedHash}?${params}`
      );
    });
  });
});
