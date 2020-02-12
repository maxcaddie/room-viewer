export const LEFT_ARROW_KEY_CODE = 37;
export const RIGHT_ARROW_KEY_CODE = 39;
export const A_KEY_CODE = 37;
export const D_KEY_CODE = 39;

export function isGoBack(keyCode: number) {
  return keyCode === LEFT_ARROW_KEY_CODE || keyCode === A_KEY_CODE;
}

export function isGoForward(keyCode: number) {
  return keyCode === RIGHT_ARROW_KEY_CODE || keyCode === D_KEY_CODE;
}
