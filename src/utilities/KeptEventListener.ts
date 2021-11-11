export interface KeptEventListener {
  type: string;
  listener: EventListenerOrEventListenerObject;
  options?: boolean | EventListenerOptions | undefined;
}
