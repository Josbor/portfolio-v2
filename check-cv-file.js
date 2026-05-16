import fs from "fs"
import path from "path"

const publicDir = path.join(process.cwd(), "public")
const cvFiles = [
  path.join(publicDir, "assets", "ES_JOSE_BORREGO_CV.pdf"),
  path.join(publicDir, "assets", "EN_JOSE_BORREGO_CV.pdf"),
]

cvFiles.forEach((cvFilePath) => {
  if (fs.existsSync(cvFilePath)) {
    console.log("CV file found at:", cvFilePath)
  } else {
    console.log("CV file not found:", cvFilePath)
  }
})

