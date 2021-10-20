interface IActionModel {
  actionType?: string;
  error?: Error;
  [x: string]: unknown;
}

export {IActionModel};