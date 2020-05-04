export default Transformation;
declare class Transformation {
    /** @type {IAction[]} */
    actions: IAction[];
    /**
     * @param {IAction} action
     */
    addAction(action: IAction): Transformation;
    /**
     * @return {string}
     */
    toString(): string;
}
