# Build with Arduino CMake Toolchain action

This action builds an Arduino Project using Arduino CMake Toolchain

## Inputs

### `CMAKE_GENERATOR`

**Required** CMake generator to be passed to the -G CMake option.

### `ARDUINO_TOOLCHAIN_DIR`

**Required** Downloaded toolchain directory

### `ARDUINO_PROJECT_DIR`

**Required** Project source root directory

### `ARDUINO_BUILD_DIR`

**Required** Build root directory

### `ARDUINO_BOARD`

**Optional** Arduino board for which the project is built for. Optional if
`ARDUINO_BOARD_OPTIONS_FILE` is provided.

### `ARDUINO_BOARD_OPTIONS_FILE`

**Optional** Arduino board options file providing option for the board.
Optionaf `ARDUINO_BOARD` is provided.

### `ARDUINO_BOARD_MANAGER_URL`

**Optional** Board manager URL of the platform

### `ARDUINO_BOARD_MANAGER_REF_URL`

**Optional** Additional reference URLs of the platform

### `ARDUINO_NO_INSTALLED_REFERENCES`

**Optional**  Indicates not to refer to any locally installed platform

## Outputs

None

## Example usage

    uses: actions/arduino-cmake-toolchain/build@v1
    with:
      CMAKE_GENERATOR: -G Unix Makefiles
      ARDUINO_TOOLCHAIN_DIR: $GITHUB_WORKSPACE/Arduino-CMake-Toolchain
      ARDUINO_PROJECT_DIR: $GITHUB_WORKSPACE
      ARDUINO_BUILD_DIR: $GITHUB_WORKSPACE/build
      ARDUINO_BOARD: arduino.avr.uno
      ARDUINO_BOARD_MANAGER_URL: https://downloads.arduino.cc/packages/package_index.json

