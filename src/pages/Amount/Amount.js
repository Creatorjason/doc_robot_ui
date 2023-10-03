import React from 'react'
import "./Amount.css"

const Amount = () => {
    const uploadAndDownload = async ()=>{
        const formData = new FormData(this);
    
                    try {
                        const response = await fetch("https://doc-bot-service.onrender.com/upload/", {
                            method: "POST",
                            body: formData
                        });
    
                        if (response.ok || response.status === 200) {
                            // If the upload was successful, display a button for the user to initiate the download
                            console.log(response);
                            window.location.href = "https://doc-bot-service.onrender.com/download/completed";
    
                            // const downloadLinkContainer = document.getElementById("downloadLinkContainer");
                            // downloadLinkContainer.innerHTML = `
                            //     <p>Click the button below to download the file:</p>
                            //     <button id="downloadButton">Download completed.zip</button>
                            // `;
    
                            // // Add a click event listener to the download button
                            // const downloadButton = document.getElementById("downloadButton");
                            // downloadButton.addEventListener("click", function () {
                            //     // Redirect to the download URL
                            //     window.location.href = "http://127.0.0.1:8000/download/completed";
                            // });
                        } else {
                            // Handle the case where the upload was not successful
                             console.log("modification in progress")
                        }
                    } catch (error) {
                        console.error("An error occurred:", error);
                    }
      }
      return (
        <div className="main-amount">
           <h1>DOC BOT 🤖</h1>
           <h3>Work for the docs you want amount included in it</h3>
        <form action="https://doc-amount-server.onrender.com/upload/" method="post" encType="multipart/form-data" id="fileUploadForm">
            <div>
                <label htmlFor="docxFile">Upload a Doc file(.docx):</label>
                <input type="file" id="docxFile" name="docx_file" accept=".docx" required/>
            </div>
            {/* <div>
                <label htmlFor="docxFile">Upload a Doc file, this template is for no amount(.docx):</label>
                <input type="file" id="docxFile" name="docx_file" accept=".docx" required/>
            </div> */}
            <div>
                <label htmlFor="xlsxFile">Upload an Excel file(.xlsx):</label>
                <input type="file" id="xlsxFile" name="xlsx_file" accept=".xlsx" required/>
            </div>
            <div>
                <br/>
                <input type="submit" value="Upload Files" onClick={uploadAndDownload}/>
            </div>
            <br/>
        <a href="/no_amount" style={{color:"yellow"}}>Click on this link to take you to (no amount added) template bot</a>
        </form>
        </div>
      );
}

export default Amount