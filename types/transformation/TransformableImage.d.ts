export default TransformableImage;
/**
 * @augments Transformation
 */
declare class TransformableImage extends Transformation {
    /**
     * once for all future instances
     * @param {*} transformableImageConfig
     */
    static setConfig(transformableImageConfig: any): void;
    /**
     * for current instance
     * @param {*} transformableImageConfig
     */
    setConfig(transformableImageConfig: any): TransformableImage;
    config: any;
    setImageID(): TransformableImage;
    sign(): TransformableImage;
    /**
     *
     * @param {string} publicID
     * @return {string}
     */
    getUrlForImage(publicID: string): string;
    addAction(action: IAction): TransformableImage;
}
import Transformation from "./Transformation";
