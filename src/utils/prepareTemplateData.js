export function prepareTemplateData(data) {
    const prepared = {
        ...data
    }

    if (prepared.phone_number) {
        prepared.phone_number = prepared.phone_number
            .replaceAll(" ", "")
            .replaceAll("-", "")
    }

    prepared.title_first_name = prepared.first_name
    prepared.title_last_name = prepared.last_name
    prepared.email_view = prepared.email?.toUpperCase() ?? ""

    prepared.first_name = prepared.first_name?.toUpperCase() ?? ""
    prepared.last_name = prepared.last_name?.toUpperCase() ?? ""

    return prepared
}