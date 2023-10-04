import React from 'react';
import './Signer.css';

const Signer = () => {
    const uploadAndDownload = async () => {
        const formData = new FormData(document.getElementById('fileUploadForm'));

        try {
            const response = await fetch('https://doc-signer.onrender.com/upload-zip', {
                method: 'POST',
                body: formData,
            });

            if (response.ok || response.status === 200) {
                // If the upload was successful, display a button for the user to initiate the download
                console.log(response);
                window.location.href = 'https://doc-signer.onrender.com/download/all_signed';
            } else {
                // Handle the case where the upload was not successful
                console.log('modification in progress');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="main-amount">
            <h1>DOC BOT 🤖</h1>
            <h3>Adds your signature to all the files</h3>
            <form action="https://doc-signer.onrender.com/upload-zip" method="post" encType="multipart/form-data" id="fileUploadForm">
                {/* <div>
                    <label htmlFor="docxFile">Upload a Doc file (.docx):</label>
                    <input type="file" id="nodocxFile" name="no_docx_file" accept=".docx" required />
                </div> */}
                {/* <div>
                    <label htmlFor="xlsxFile">Upload an Excel file (.xlsx):</label>
                    <input type="file" id="xlsxFile" name="xlsx_file" accept=".xlsx" required />
                </div> */}
                <div>
                    <label htmlFor="zipFile1">Upload Zip File 1:</label>
                    <input type="file" id="file1" name="file1" accept=".zip" required />
                </div>
                <div>
                    <label htmlFor="zipFile2">Upload Zip File 2:</label>
                    <input type="file" id="file2" name="file2" accept=".zip" required />
                </div>
                <div>
                    <label htmlFor="imageFile">Upload Signature:</label>
                    <input type="file" id="signature_image" name="signature_image" accept="image/*" required />
                </div>
                <div>
                    <br />
                    <input type="submit" value="Upload Files" onClick={uploadAndDownload} />
                </div>
            
            </form>
        </div>
    );
};

export default Signer;
