# Number-format-helper

[![npm version](https://badge.fury.io/js/human-readable-number.svg)](https://www.npmjs.com/package/number-format-helper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A utility function to format large numbers in a human-readable way.

## Installation

Install the package using npm:

```bash
npm install number-format-helper
```

## Usage

```bash
import { formatNumber } from 'human-readable-number';

// Examples
const formattedValue1 = formatNumber(1234567890);
console.log(formattedValue1);  // Output: "1.23B"

const formattedValue2 = formatNumber(9876543210);
console.log(formattedValue2);  // Output: "9.88B"

const formattedValue3 = formatNumber(1234567);
console.log(formattedValue3);  // Output: "1.23M"

const formattedValue4 = formatNumber(1000);
console.log(formattedValue4);  // Output: "1,000"

const formattedValue5 = formatNumber(999);
console.log(formattedValue5);  // Output: 999 (no formatting applied)

```

## API

```bash
formatNumber(num: number, precision?: number): string
```

Formats the given number in a human-readable way.

- `num` (required): The number to be formatted.
- `precision` (optional): The number of decimal places to round to (default is 2).

Returns the formatted string.

## Contributing

Feel free to contribute to this project. Follow these steps:

1. Fork the repository.
2. Create your feature branch: git checkout -b feature/new-feature
3. Commit your changes: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature/new-feature
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/adexzy1/number-format-helper/blob/main/LICENSE) file for details.
