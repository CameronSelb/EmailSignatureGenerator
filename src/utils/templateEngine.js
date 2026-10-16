import { prepareTemplateData } from "./prepareTemplateData";

export function renderTemplate(template, data) {
  let html = template;

  data = prepareTemplateData(data)

  for (const [key, value] of Object.entries(data)) {
    if (key === "logo_path" && typeof value === "object") {
      for (const [logoKey, logoValue] of Object.entries(value)) {
        html = html.replaceAll(`{{${logoKey}}}`, logoValue ?? "");
      }
    }

    html = html.replaceAll(`{{${key}}}`, value ?? "");
  }

  return html;
}
