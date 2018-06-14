import MultiFormatReader from '../core/MultiFormatReader';
import VideoInputDevice from './VideoInputDevice';
import BrowserCodeReader from './BrowserCodeReader';
import DecodeHintType from '../core/DecodeHintType';

/**
 * Barcode reader reader to use from browser.
 *
 * @class BrowserMultiCodeReader
 * @extends {BrowserCodeReader}
 */
class BrowserMultiCodeReader extends BrowserCodeReader {
    /**
     * Creates an instance of BrowserMultiCodeReader.
     * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
     * @param {Map<DecodeHintType, any>} hints
     * @memberOf BrowserMultiCodeReader
     */
    public constructor(timeBetweenScansMillis: number = 500, hints?: Map<DecodeHintType, any>) {
        let reader: MultiFormatReader = new MultiFormatReader();
        reader.setHints(hints);
        super(reader, timeBetweenScansMillis, hints);
    }
}

export { VideoInputDevice, BrowserMultiCodeReader };
