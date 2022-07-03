import S from "@sanity/desk-tool/structure-builder"
import {
  IoHomeSharp,
  IoLanguageSharp,
  IoPencilSharp,
  IoRibbonSharp,
  IoSettingsSharp,
} from "react-icons/io5"

export default () => {
  return S.list()
    .id("__root__")
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(IoHomeSharp)
        .child(
          S.editor()
            .schemaType("homepage")
            .documentId("homepage")
            .title("Homepage")
        ),
      S.listItem()
        .title("Get Involved")
        .icon(IoRibbonSharp)
        .child(
          S.editor()
            .schemaType("getInvolved")
            .documentId("getInvolved")
            .title("Get Involved")
        ),
      S.listItem()
        .title("About")
        .icon(IoPencilSharp)
        .child(
          S.editor().schemaType("about").documentId("about").title("About")
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            "getInvolved",
            "about",
            "homepage",
            "settings",
            "localization",
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Localization")
        .icon(IoLanguageSharp)
        .child(
          S.editor()
            .schemaType("localization")
            .documentId("localization")
            .title("Localization")
        ),
      S.listItem()
        .title("Settings")
        .icon(IoSettingsSharp)
        .child(
          S.editor()
            .schemaType("settings")
            .documentId("settings")
            .title("Settings")
        ),
    ])
}
