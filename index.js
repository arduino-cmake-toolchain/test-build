const core = require('@actions/core');
const exec = require('@actions/exec');

try
{
	const cmake_generator = core.getInput('CMAKE_GENERATOR');
	const toolchain_dir = core.getInput('ARDUINO_TOOLCHAIN_DIR');
	const source_dir = core.getInput('ARDUINO_PROJECT_DIR');
	const build_root_dir = core.getInput('ARDUINO_BUILD_DIR');
	const board_manager_url = core.getInput('ARDUINO_BOARD_MANAGER_URL');
	const board_manager_ref_url = core.getInput('ARDUINO_BOARD_MANAGER_REF_URL');
	const board_identifier = core.getInput('ARDUINO_BOARD');
	const board_options_file = core.getInput('ARDUINO_BOARD_OPTIONS_FILE');
	const no_installed_ref = core.getInput('ARDUINO_NO_INSTALLED_REFERENCES');

	async function do_build()
	{
		const options = {};
		options.cwd = build_root_dir;
		options.listeners = {
		  stdout: (data) => {
			process.stdout.write(data.toString(), );
		  },
		  stderr: (data) => {
			process.stdout.write(data.toString());
		  }
		};
		await exec.exec('cmake', [
			'-G', `${cmake_generator}`,
			'-D', `CMAKE_TOOLCHAIN_FILE=${toolchain_dir}/Arduino-toolchain.cmake`,
			'-D', `ARDUINO_BOARD_MANAGER_URL=${board_manager_url}`,
			'-D', `ARDUINO_BOARD_MANAGER_REF_URL=${board_manager_ref_url}`,
			'-D', `ARDUINO_BOARD=${board_identifier}`,
			'-D', `ARDUINO_BOARD_OPTIONS_FILE=${board_options_file}`,
			'-D', `ARDUINO_NO_INSTALLED_REFERENCES=${no_installed_ref}`,
			`${source_dir}`
		], options);

		options.cwd = build_root_dir;
		await exec.exec('cmake', [
			'--build', '.'
		], options);
	}

	try
	{
		do_build();
	}
	catch
	{
		exit(1);
	}
}
catch(error)
{
	core.setFailed(error.message);
}
