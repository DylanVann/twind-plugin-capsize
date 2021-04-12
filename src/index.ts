import capsizeBase from 'capsize'
import type { CSSRules, Directive, Context } from 'twind'
import { css } from 'twind/css'

export interface FontMetrics {
  capHeight: number
  ascent: number
  descent: number
  lineGap: number
  unitsPerEm: number
}

export const twindPluginCapsize = (metrics: FontMetrics) => (
  parts: string[],
  context: Context,
): Directive<CSSRules> => {
  const { theme } = context
  const [fontSizeKey, lineHeightKey] = parts
  let [fontSize, lineHeight] = theme('fontSize', fontSizeKey || 'base') || [
    '1rem',
    '1.5rem',
  ]
  if (lineHeightKey !== undefined) {
    lineHeight =
      theme('lineHeight', lineHeightKey || 'leading-normal') || '1.5rem'
  }
  const fontSizePx = parseFloat(fontSize as string) * 16
  const lineHeightPx = parseFloat(lineHeight as string) * 16
  const lineGapPx = lineHeightPx - fontSizePx
  const { '::before': before, '::after': after, ...style } = capsizeBase({
    fontMetrics: metrics,
    fontSize: fontSizePx,
    lineGap: lineGapPx,
  })
  return css({
    ...style,
    '&::before': before,
    '&::after': after,
  })
}
