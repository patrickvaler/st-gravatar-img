import { Component, Prop, Method } from '@stencil/core';
import md5 from 'md5';

export const avatarBaseUrl = 'https://www.gravatar.com/avatar';
export const defaultSize = 120;
@Component({
  tag: 'st-gravatar-img',
  styleUrl: './st-gravatar-img.css',
  shadow: true
})
export class GravatarImg {
  /**
   * Gravatar email (will expose email).
   */
  @Prop() email: string;
  /**
   * MD5 hash of your gravatar email (avoid to expose email)
   */
  @Prop() hash: string;

  /**
   * Image size in pixel
   */
  @Prop() size: number = defaultSize;

  /**
   * Exposed Method to create md5 hash
   *
   * @param value string
   */
  @Method()
  createHash(value = '') {
    return md5(value.toLowerCase().trim());
  }

  get imageUrl(): string {
    const hash = this.hash || this.createHash(this.email);

    return `${avatarBaseUrl}/${hash}?s=${this.size}`;
  }

  render() {
    return <img height={this.size} width={this.size} src={this.imageUrl} />;
  }
}
