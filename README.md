# Coupon Combinations Generator

This project provides a utility to generate all possible combinations of coupons while respecting coupon-specific blocked types. It ensures that:

- No combination contains two coupons that share the same blocked type.

- Supersets are prioritized over subsets, meaning smaller combinations that are part of larger valid combinations are excluded.

## Assumptions & Procedure
### Assumptions
- Each coupon has a blockedTypes array representing the types it blocks.
- A coupon with no blockedTypes can be combined with any other coupon.
- A coupon combination is valid only if no blocked type conflicts exist between any two coupons in that combination.
- Combinations that are subsets of a larger valid combination should be removed.

### Procedure / Approach

- Backtracking Algorithm

    - Iterate through the list of coupons recursively to build all possible combinations.
    - Track blocked types in a Set to avoid conflicts.
    - Skip any coupon if it conflicts with the blocked types of the current combination.
    - Record valid combinations as they are formed.

- Subset Filtering
    - After generating all candidate combinations, filter out combinations that are strict subsets of any other combination.
    - This ensures only the maximal valid combinations are returned.

## Project Setup

1. Clone the repository:
    ```bash
    git clone git@github.com:PallaviDule/coupon-combo-generator.git
    cd coupon-combo-generator
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run  
    The main file is `src/index.ts`. You can run it using `ts-node`:

    ```bash
    npm run start
    ```

    This will print all valid coupon combinations to the console.

4. Run Test

    The project uses Jest for testing. Test files are located in `tests/`.

    ```bash
    npm run test
    ```

## Example
```
[
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 5%' },
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 10%' },
  { blockedTypes: ['longterm', 'discount'], name: 'Long term 15%' },
  { blockedTypes: ['winter'], name: 'WinterPromo' },
  { blockedTypes: ['longterm', 'winter'], name: 'Winterspecial 30d' },
  { blockedTypes: ['longterm', 'winter'], name: 'Winterspecial 60d' },
  { blockedTypes: [], name: 'Gift voucher' },
]
```
**Output:**
1. Long term 5% + WinterPromo + Gift voucher
2. Long term 10% + WinterPromo + Gift voucher
3. Long term 15% + WinterPromo + Gift voucher
4. Winterspecial 30d + Gift voucher
5. Winterspecial 60d + Gift voucher

