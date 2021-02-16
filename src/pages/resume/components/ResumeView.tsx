import React, { Component } from "react";

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

const ready = () =>{
    return (
        new Promise<void>((resolve) => {
        if (window.AdobeDC) {
            resolve();
        } else {
            /* Wait for Adobe Document Services PDF Embed API to be ready */
            document.addEventListener("adobe_dc_view_sdk.ready", () => {
                resolve();
            });
        }
    }));
}

const previewFile = (divId: string, viewerConfig: ViewerConfig) => {
    const config: WindowViewConfig = {
        /* Pass your registered client id */
        clientId: process.env.PDF_EMBED_KEY!,
    };
    if (divId) { /* Optional only for Light Box embed mode */
        /* Pass the div id in which PDF should be rendered */
        config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    const adobeDCView = new window.AdobeDC.View(config);

    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = adobeDCView.previewFile({
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
            fileName: "Saad Nafim Rahman Resume.pdf",
            /* file ID */
            // id: "6d07d124-ac85-43b3-a867-36930f502ac6",
        }
    }, viewerConfig);

    return previewFilePromise;
}


class InLine extends Component {
    componentDidMount() {
        ready().then(() => {
            /* Invoke file preview */
            previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "IN_LINE"
            });
        });
    }

    render() {
        return (
            <div style={{height: '100%'}} id="pdf-div" className="in-line-div"/>
        );
    }
}

export default InLine;