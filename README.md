# Coupon Combinations Generator

- A TypeScript utility to generate all possible coupon combinations while respecting blocked types.  
- If one coupon blocks a type, no other coupon with that type can appear in the same combination.  
- Also ensures that only the largest valid combinations are included (subsets are filtered out).

## Features
- Handles multiple blocked types per coupon
- Generates all valid combinations
- Filters out subsets, keeping only the largest valid combinations

## Project Setup

1. Clone the repository:
    ```bash
    git clone git@github.com:PallaviDule/coupon-combo-generator.git
    cd coupon-combinations-generator
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

