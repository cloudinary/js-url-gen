const DEBUG_COLOR = '\x1b[36m%s\x1b[0m'; // cyan
const ERROR_COLOR = '\x1b[31m'; // red
const SUCCESS_COLOR = '\x1b[32m';
const INFO_COLOR = '\x1b[37m';

class Log {
  info(str: string) {
    console.log(INFO_COLOR, str);
  }
  success(str: string) {
    console.log(SUCCESS_COLOR, `✔ ${str}`);
  }
  error(str: string) {
    console.log(ERROR_COLOR, `x ${str}`);
  }
  debug(str: string) {
    process.env.DEBUG && console.log(DEBUG_COLOR, `\tDebug: ${str}`);
  }
}

const log = new Log();
export default log;
