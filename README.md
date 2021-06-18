# Passcode Generator ![CI](https://github.com/doamatto/phone-passcode-gen/workflows/CI/badge.svg)
A simple passcode generator written in TypeScript with the most overkill compilation system ever.

## Building
1. Install [Dart](https://dart.dev), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com)
2. Clone this repository (`git clone https://github.com/doamatto/phone-passcode-gen`)
3. Install dependencies for Dart and Yarn (`pub get` and `yarn`)
4. Build the Dart installer (`dart compile exe build.dart`) (you can skip this and the next step with `yarn build`)
5. Build the SCSS and TS (`yarn build:fast`)

Upload the `docs/` folder to your web server, or open it in your web browser to use.
