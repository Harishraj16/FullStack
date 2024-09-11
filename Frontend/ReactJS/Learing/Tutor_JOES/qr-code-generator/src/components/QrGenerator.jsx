import React from 'react'

const QrGenerator = () => {
    const [qrImage, setqrImage] = React.useState(null)
    const [loading,setloading] = React.useState(false)
    const [qrdata,setqrdata] = React.useState(null)
    const [qrsize,setqrsize] = React.useState(150)
    const [wait , setwait] = React.useState(true)
    async function generateQR() {
        setloading(true)
        try {
            wait = false;
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setqrImage(url);
        }
        catch (error) {
            console.error("Error while fetching the data!")
        }
        finally {
            setloading(false)
            setwait(false);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-sky-100 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col bg-white rounded-lg shadow-lg items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 m-4 sm:m-6 md:m-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h1 className='border-b-2 mb-4 text-lg sm:text-xl md:text-2xl text-center'>QR CODE Generator</h1>
                    {wait && <div className='m-3 p[b]-3 text-blue-700'>QR Image comes here...</div>}
                    {qrImage!=null && <img src={qrImage} alt="qr-code-image" className="mb-4 shadow-lg" />}

                    {/* Force label text to align to the left */}
                    <div className="w-full">
                        <label htmlFor="text"  className="mb-2 text-sm md:text-base block text-left">Enter Data for QR Code</label>
                        <input type="text" onChange={(e)=>{setqrdata(e.target.value)}} placeholder="Enter text to generate QR code" className="mb-4 border p-2 rounded w-full" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="size" className="mb-2 text-sm md:text-base block text-left">Enter the Size</label>
                        <input type="text" onChange={(e)=>{setqrsize(e.target.value)}} placeholder='Enter the size info (eg.250px)' className="mb-4 border p-2 rounded w-full" />
                    </div>

                    <div className="flex space-x-2 mb-4 w-full justify-even">
                        <button onClick={generateQR} disabled={loading} className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto">
                            Generate
                        </button>
                        <button className="bg-green-500 text-white p-2 rounded w-full sm:w-auto">
                            Download
                        </button>
                    </div>


                    <footer className="mt-4 text-sm md:text-base text-center">Crafted by Harish! ✨</footer>
                </div>
            </div>
        </>
    )
}

export default QrGenerator