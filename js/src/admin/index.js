import app from "flarum/admin/app";

app.initializers.add("zerosonesfun/flarum-bbcode-button", () => {
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.intro",
      name: "zerosonesfun-bbcode-button.intro",
      type: "text",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.introdesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.introlabel" ),
    },
    3
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.code",
      name: "zerosonesfun-bbcode-button.code",
      type: "text",
      placeholder: "[bbcode][/bbcode]",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.codedesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.codelabel" ),
    },
    2
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.pos",
      name: "zerosonesfun-bbcode-button.pos",
      type: "number",
      value: "4",
      placeholder: "4",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.posdesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.poslabel" ),
    },
    0
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.icon",
      name: "zerosonesfun-bbcode-button.icon",
      type: "text",
      value: "fas fa-font",
      placeholder: "fas fa-font",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.icondesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.iconlabel" ),
    },
    1
  );
});