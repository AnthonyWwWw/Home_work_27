export function getImageUrl(imageName) {
    return new URL(`../../img/${imageName}`, import.meta.url).href;
  }