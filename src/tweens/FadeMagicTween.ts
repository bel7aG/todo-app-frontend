import { TimelineLite, Power2 } from 'gsap'

export const FadeMagicTween = (isFadeIn: boolean, selector: HTMLElement | any, isBlock: boolean = false) => {
  if (selector) {
    const t2 = new TimelineLite()
    t2?.to(selector, isFadeIn ? 0.28 : 0.45, {
      display: isFadeIn ? (isBlock ? 'block' : 'flex') : 'none',
      opacity: isFadeIn ? 1 : 0,
      ease: Power2.easeInOut
    })
  }
}
