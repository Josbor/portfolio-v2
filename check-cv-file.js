import fs from "fs"
import path from "path"

const publicDir = path.join(process.cwd(), "public")
const cvFilePath = path.join(publicDir, "CV-Jose-Borrego.pdf")

if (fs.existsSync(cvFilePath)) {
  console.log("CV file found at:", cvFilePath)
} else {
  console.log('CV file not found. Please ensure "CV-Jose-Borrego.pdf" is in the public folder.')
}

