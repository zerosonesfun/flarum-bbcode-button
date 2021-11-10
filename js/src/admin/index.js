import app from "flarum/admin/app";

app.initializers.add("zerosonesfun/flarum-bbcode-button", () => {
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.code",
      name: "zerosonesfun-bbcode-button.code",
      type: "text",
      placeholder: "[bbcode][/bbcode]",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.codedesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.codelabel" ),
    },
    15
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.pos",
      name: "zerosonesfun-bbcode-button.pos",
      type: "number",
      value: "8",
      placeholder: "8",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.posdesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.poslabel" ),
    },
    15
  );
});