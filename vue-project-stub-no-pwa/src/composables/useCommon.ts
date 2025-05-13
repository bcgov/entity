/**
 * Composable that provides some useful common utilities.
 */
export function useCommon() {
  /**
   * This is an example function that will return a msg.
   *
   * @param msg The msg to return.
   */
  const sendMsg = (msg: string): string => {
    return msg ? `${msg} - msg created by sendMsg composable` : 'Error, no Message'
  }

  return {
    sendMsg
  }
}