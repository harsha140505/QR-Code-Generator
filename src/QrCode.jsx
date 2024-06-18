import { useState } from "react";
const QR = () => {
  const[img,setImg]= useState("");   //images/qr.png
  const [loading,setLoading] = useState(false);
  const [qrdata,setQrData] = useState("google.com");
  const [qrSize,setQrSize] = useState("150");


  async function generateQR(){
    // setImg("images/2.jpg");
    setLoading(true);
    try {
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);

    } catch (error) {
      console.log("Error generating QR code",error);
      
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>PLease wait...</p>}
        {img && <img src={img} className="qr-code-image"/>}
         
         <div>
             <label htmlFor="dataInput" className="input-label">
                 Data for QR code:
             </label>
             <input type="text" id="dataInput" value={qrdata} placeholder="Enter data for QR" onChange={(e)=>
              setQrData(e.target.value)}/>
             
             <label htmlFor="sizeInput" className="input-label">
                 Image Size (eg.150):
             </label>
             <input type="text" id="size-input" value= {qrSize} placeholder="Enter image Size" 
             onChange={(e)=>setQrSize(e.target.value)}/>

             <button className="generate-button" onClick={generateQR}>Generate QR Code</button>
             <button className="download-button">Download QR Code</button>
         </div>
      
     </div>
    </>
  )
}

export default QR 





