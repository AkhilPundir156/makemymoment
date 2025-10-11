/**
 * Class: MultipartUploader
 * ------------------------
 * Handles the complete lifecycle of a multipart upload to R2 (or S3-compatible storage).
 * Maintains internal state such as uploadId, part numbers, and uploaded parts (ETags).
 *
 * Responsibilities:
 * - Start multipart upload (create uploadId)
 * - Get presigned URLs for each part
 * - Upload each chunk using the presigned URL
 * - Complete or abort the upload
 */
import { MultipartUploaderOptions, UploadedPart} from "@makemymoment/types"

export class MultipartUploader {
    private uploadId: string | null = null;
    private parts: UploadedPart[] = [];
    private currentPartNumber = 1;

    private filename: string;
    private contentType?: string;

    constructor(options: MultipartUploaderOptions) {
        this.filename = options.filename;
        this.contentType = options.contentType;
    }

    /**
     * Initiates a new multipart upload session.
     * Returns the uploadId which will be used for all subsequent parts.
     */
    async createMultipartUploader(): Promise<string> {
        // TODO: call backend API (e.g. /api/start-upload)
        // Example:
        // const res = await fetch('/api/start-upload', { method: 'POST', body: JSON.stringify({ filename, contentType }) })
        // const data = await res.json();
        // this.uploadId = data.uploadId;

        this.uploadId = "UPLOAD_ID_PLACEHOLDER";
        return this.uploadId;
    }

    /**
     * Retrieves a presigned URL for uploading a specific part.
     * The URL is used to directly PUT the chunk to the cloud.
     */
    async getPartSignedUrl(partNumber: number): Promise<string> {
        if (!this.uploadId)
            throw new Error("UploadId not initialized. Call createMultipartUploader first.");

        // TODO: call backend API (e.g. /api/part-url?uploadId=&partNumber=)
        // Example:
        // const res = await fetch(`/api/part-url?uploadId=${this.uploadId}&filename=${this.filename}&partNumber=${partNumber}`);
        // const data = await res.json();
        // return data.url;

        return "SIGNED_URL_PLACEHOLDER";
    }

    /**
     * Uploads a chunk to the presigned URL for the current part.
     * Saves ETag for completion.
     */
    async uploadPart(chunk: Blob | Buffer): Promise<void> {
        if (!this.uploadId) throw new Error("UploadId not initialized.");

        const url = await this.getPartSignedUrl(this.currentPartNumber);

        // TODO: perform PUT request to upload chunk
        // const res = await fetch(url, { method: 'PUT', body: chunk });
        // const eTag = res.headers.get('ETag');
        const eTag = `"FAKE-ETAG-${this.currentPartNumber}"`;

        this.parts.push({ ETag: eTag, PartNumber: this.currentPartNumber });
        this.currentPartNumber++;

        // Optional: store state in IndexedDB for resumability
    }

    /**
     * Completes the multipart upload by merging all uploaded parts.
     * Requires uploadId and all part numbers + ETags.
     */
    async completeMultipartUpload(): Promise<void> {
        if (!this.uploadId) throw new Error("No uploadId present.");
        if (this.parts.length === 0) throw new Error("No parts uploaded.");

        // TODO: call backend API (e.g. /api/complete-upload)
        // Example:
        // await fetch('/api/complete-upload', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     uploadId: this.uploadId,
        //     filename: this.filename,
        //     parts: this.parts,
        //   }),
        // });

        // Cleanup state
        this.uploadId = null;
        this.parts = [];
        this.currentPartNumber = 1;
    }

    /**
     * Aborts the multipart upload.
     * Should be called when upload is canceled or fails irrecoverably.
     */
    async abortMultipartUpload(): Promise<void> {
        if (!this.uploadId) throw new Error("No uploadId to abort.");

        // TODO: call backend API (e.g. /api/abort-upload)
        // Example:
        // await fetch('/api/abort-upload', {
        //   method: 'POST',
        //   body: JSON.stringify({ uploadId: this.uploadId, filename: this.filename }),
        // });

        // Cleanup
        this.uploadId = null;
        this.parts = [];
        this.currentPartNumber = 1;
    }

    /**
     * Utility: returns current internal state (for debugging or resume support).
     */
    getState() {
        return {
            uploadId: this.uploadId,
            currentPartNumber: this.currentPartNumber,
            uploadedParts: this.parts,
            filename: this.filename,
            contenType: this.contentType,
        };
    }
}
