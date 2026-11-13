import { describe, expect, it } from 'vitest'
import { contactSchema, firstError, reserveSchema } from '@/lib/validation'

const reserve = {
  choice: 'buy',
  name: 'Ada Lovelace',
  company: 'Analytical Engines',
  email: 'Ada@Example.com',
  phone: '+1 (415) 555-0100',
  country: 'United States',
  useCase: 'Events',
}

describe('reserveSchema', () => {
  it('accepts a complete form and lowercases the email', () => {
    const r = reserveSchema.safeParse(reserve)
    expect(r.success).toBe(true)
    expect(r.data?.email).toBe('ada@example.com')
  })

  it.each([
    ['email', 'not-an-email', 'Email must be a valid email address.'],
    ['phone', 'call me', 'Phone must be a valid phone number.'],
    ['name', '   ', 'Name is required.'],
    ['choice', 'lease', 'Option is not valid.'],
    ['useCase', 'Space travel', 'Use is not valid.'],
  ])('rejects a bad %s with a readable message', (field, value, message) => {
    const r = reserveSchema.safeParse({ ...reserve, [field]: value })
    expect(r.success).toBe(false)
    expect(firstError(r.error!)).toBe(message)
  })

  it('caps field lengths', () => {
    expect(reserveSchema.safeParse({ ...reserve, company: 'x'.repeat(161) }).success).toBe(false)
  })
})

describe('contactSchema', () => {
  it('accepts an advertise enquiry without dates', () => {
    const r = contactSchema.safeParse({ form: 'advertise', name: 'Ada', company: 'Nike', email: 'ada@nike.com' })
    expect(r.success).toBe(true)
  })

  it('accepts a careers application for an open role', () => {
    const r = contactSchema.safeParse({
      form: 'careers',
      name: 'Ada',
      email: 'ada@example.com',
      role: 'Robotics Engineer',
      link: 'https://github.com/ada',
    })
    expect(r.success).toBe(true)
  })

  it.each(['javascript:alert(1)', 'ftp://example.com/cv', 'not a link'])('rejects the link %s', (link) => {
    const r = contactSchema.safeParse({ form: 'careers', name: 'Ada', email: 'ada@example.com', role: 'Robotics Engineer', link })
    expect(r.success).toBe(false)
  })

  it('rejects a role that is not open', () => {
    const r = contactSchema.safeParse({ form: 'careers', name: 'Ada', email: 'a@b.co', role: 'CEO', link: 'https://x.com' })
    expect(r.success).toBe(false)
  })

  it('rejects an unknown form', () => {
    expect(contactSchema.safeParse({ form: 'newsletter', email: 'a@b.co' }).success).toBe(false)
  })
})
