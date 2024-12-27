import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.envCLOUDINARY_CLOUD_NAME,
    api_key: process.envCLOUDINARY_API_KEY,
    api_secret: process.envCLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return
        // upload the file
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath) 
        // removes the locally saved temporary file as operation got failed
        return null;
    }
}

export {uploadOnCloudinary}