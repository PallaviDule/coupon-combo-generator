import type { Coupon } from "../types/coupon";

export function getAllPossibleCouponCombinations<T extends Coupon,>(
    coupons: Array<T>): Array<Array<T>> {
  let allCombinations: T[][] = [];

  function backtracking(start: number, currentCombination: T[], blockedSet: Set<string>){
    if(currentCombination.length) allCombinations.push([...currentCombination]);

    for(let i=start; i < coupons.length; i++){
        const currentCoupon = coupons[i] as T;

         // Skip if coupon conflicts with any blocked type
        const hasConflict = currentCoupon?.blockedTypes.some((type : string) => blockedSet.has(type));
        if(hasConflict) continue;

        currentCombination.push(currentCoupon);
        const newBlockedSet = new Set([...blockedSet, ...currentCoupon.blockedTypes]);

        backtracking(i+1, currentCombination, newBlockedSet);
        currentCombination.pop();
    }
  };

  backtracking(0,[], new Set<string>);

  return filterSubsets(allCombinations);
}

// Filter out combinations that are subsets of any other combination
function filterSubsets<T extends Coupon>(allCombinations : T[][]): T[][] {
    const filtered: T[][] = [];

    for (const combo of allCombinations) {
        const isSubset = allCombinations.some(
            (other) => {
                if(other === combo) return;  

                return other.length > combo.length && combo.every((c) => other.includes(c))
        });

        if (!isSubset) filtered.push(combo);
   }
   return filtered;
}
