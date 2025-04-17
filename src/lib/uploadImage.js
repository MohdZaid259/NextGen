import { cloudinaryConf } from "@/conf/conf";

const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "nextgen_unsigned");

  try {
    const res = await fetch(cloudinaryConf.cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Upload failed", err);
    return null;
  }
};

export default uploadToCloudinary;
