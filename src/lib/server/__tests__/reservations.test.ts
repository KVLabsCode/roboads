import { describe, expect, it } from 'vitest'
import { placeFromCounts } from '@/lib/server/reservations'

describe('placeFromCounts', () => {
  it('puts the first paid reservation at #1', () => {
    expect(placeFromCounts(0, 0)).toBe(1)
  })

  it('counts everyone who paid before you', () => {
    expect(placeFromCounts(41, 0)).toBe(42)
  })

  it('moves you up one place per paid referral', () => {
    expect(placeFromCounts(41, 3)).toBe(39)
  })

  it('never goes above the front of the line', () => {
    expect(placeFromCounts(2, 10)).toBe(1)
  })
})
