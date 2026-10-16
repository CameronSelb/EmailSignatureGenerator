export async function copy(html) {
  try {
    const blobHtml = new Blob([html], {
      type: "text/html",
    })

    const blobText = new Blob([html], {
      type: "text/plain",
    })

    const clipboardItem = new ClipboardItem({
      "text/html": blobHtml,
      "text/plain": blobText,
    })

    await navigator.clipboard.write([clipboardItem])

    console.log("Signature copied!")
  } catch (error) {
    console.error("Failed to copy signature:", error)
  }
}