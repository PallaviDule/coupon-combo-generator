import { getAllPossibleCouponCombinations } from './services/couponCombinations.js';
import type { Coupon } from './types/coupon.js';

const coupons: Coupon[] = [
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 5%' },
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 10%' },
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 15%' },
  { blockedTypes: ['winter'], name: 'WinterPromo' },
  { blockedTypes: ['longterm', 'winter'], name: 'Winterspecial 30d' },
  { blockedTypes: ['longterm', 'winter'], name: 'Winterspecial 60d' },
  { blockedTypes: [], name: 'Gift voucher' },
]

const results = getAllPossibleCouponCombinations(coupons)

console.log('Valid Combinations:')
results.forEach((combo, i) => {
  console.log(`${i + 1}. ${combo.map((c) => c.name).join(' + ')}`)
})
