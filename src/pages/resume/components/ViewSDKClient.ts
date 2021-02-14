declare global {
    interface Window {
        AdobeDC:any;
    }
}

interface ViewerConfig {
    embedMode: string
}

interface WindowViewConfig {
    clientId: string;
    divId?: string;
}

class ViewSDKClient {
    readyPromise: Promise<unknown>;
    adobeDCView: undefined | any;
    constructor() {
        this.readyPromise = new Promise<void>((resolve) => {
            if (window.AdobeDC) {
                resolve();
            } else {
                /* Wait for Adobe Document Services PDF Embed API to be ready */
                document.addEventListener("adobe_dc_view_sdk.ready", () => {
                    resolve();
                });
            }
        });
        this.adobeDCView = undefined;
    }

    ready() {
        return this.readyPromise;
    }

    previewFile(divId: string, viewerConfig: ViewerConfig) {
        const config: WindowViewConfig = {
            /* Pass your registered client id */
            clientId: process.env.PDF_EMBED_KEY!,
        };
        if (divId) { /* Optional only for Light Box embed mode */
            /* Pass the div id in which PDF should be rendered */
            config.divId = divId;
        }
        /* Initialize the AdobeDC View object */
        this.adobeDCView = new window.AdobeDC.View(config);

        /* Invoke the file preview API on Adobe DC View object */
        const previewFilePromise = this.adobeDCView!.previewFile({
            /* Pass information on how to access the file */
            content: {
                /* Location of file where it is hosted */
                location: {
                    url: "https://dl.dropbox.com/s/yemn9wgsd91jr66/NafimRahmanWebsiteResume.pdf",
                    /*
                    If the file URL requires some additional headers, then it can be passed as follows:-
                    headers: [
                        {
                            key: "<HEADER_KEY>",
                            value: "<HEADER_VALUE>",
                        }
                    ]
                    */
                },
            },
            /* Pass meta data of file */
            metaData: {
                /* file name */
                fileName: "Bodea Brochure.pdf",
                /* file ID */
                id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            }
        }, viewerConfig);

        return previewFilePromise;
    }
}

export default ViewSDKClient;