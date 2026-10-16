export function downloadHtml(html, data) {
    const blob = new Blob([html], {
        type: "text/html"
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    console.log()
    link.href = url
    link.download = data.first_name.toLowerCase() + '_' + data.last_name.toLowerCase() + '-email-signature.html'

    link.click()

    URL.revokeObjectURL(url)
}