const core = require('@actions/core');
const exec = require('@actions/exec');

try
{
	const cmake_generator = core.getInput('CMAKE_GENERATOR');
	console.log(`CMAKE_GENERATOR: ${CMAKE_GENERATOR}`);
	const toolchain_dir = core.getInput('ARDUINO_TOOLCHAIN_DIR');
	console.log(`ARDUINO_TOOLCHAIN_DIR: ${ARDUINO_TOOLCHAIN_DIR}`);
	const source_dir = core.getInput('ARDUINO_PROJECT_DIR');
	console.log(`ARDUINO_PROJECT_DIR: ${ARDUINO_PROJECT_DIR}`);
	const build_root_dir = core.getInput('ARDUINO_BUILD_DIR');
	console.log(`ARDUINO_BUILD_DIR: ${ARDUINO_BUILD_DIR}`);
	const board_manager_url = core.getInput('ARDUINO_BOARD_MANAGER_URL');
	console.log(`ARDUINO_BOARD_MANAGER_URL: ${ARDUINO_BOARD_MANAGER_URL}`);
	const board_manager_ref_url = core.getInput('ARDUINO_BOARD_MANAGER_REF_URL');
	console.log(`ARDUINO_BOARD_MANAGER_REF_URL: ${ARDUINO_BOARD_MANAGER_REF_URL}`);
	const board_identifier = core.getInput('ARDUINO_BOARD');
	console.log(`ARDUINO_BOARD: ${ARDUINO_BOARD}`);
	const board_options_file = core.getInput('ARDUINO_BOARD_OPTIONS_FILE');
	console.log(`ARDUINO_BOARD_OPTIONS_FILE: ${ARDUINO_BOARD_OPTIONS_FILE}`);
	const no_installed_ref = core.getInput('ARDUINO_NO_INSTALLED_REFERENCES');
	console.log(`ARDUINO_NO_INSTALLED_REFERENCES: ${ARDUINO_NO_INSTALLED_REFERENCES}`);

	
}
catch(error)
{
	core.setFailed(error.message);
}
