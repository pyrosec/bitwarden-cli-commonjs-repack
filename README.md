# bitwarden-cli-commonjs-repack

The Main class internal to the @bitwarden/cli package cannot be imported into a program as a library. This repo contains the scripting to repack the output of the bundler used by the Bitwarden team such that instead of running an executable it will expose the class that is initialized.

The exported class `Main` would otherwise be invoked via `main.run()` which is implemented here: [https://github.com/bitwarden/cli/blob/master/src/bw.ts](https://github.com/bitwarden/cli/blob/master/src/bw.ts)

## Author

Pyrosec Labs
