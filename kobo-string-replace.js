// Replace string occurrences with their Kobo equivalents
// run "npm install"
// and then "node string-replace.js"

var replace = require("replace");

replace({
    regex: "<string name=\"main_menu_details\">.*<",
    replacement: "<string name=\"main_menu_details\">Part of KoBoToolbox<",
    paths: ['collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: "<string name=\"click_to_web\">.*<",
    replacement: "<string name=\"click_to_web\">KoBoCollect is part of KoBoToolbox (kobotoolbox.org)\\n\\nKoBoCollect is based on ODK Collect<",
    paths: ['collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: "https?://getodk.org",
    replacement: "http://www.kobotoolbox.org",
    paths: ['collect_app/src/main/java/org/odk/collect/android/activities/AboutActivity.java', 'collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: "ODK Aggregate",
    replacement: "KoBoToolbox",
    paths: ['strings/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: "ODK Collect",
    replacement: "KoBoCollect",
    paths: ['strings/src/main/res', 'collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: 'Open Data Kit .ODK.',
    replacement: "KoBoToolbox",
    paths: ['strings/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: 'ODK',
    replacement: "KoBoToolbox",
    paths: ['strings/src/main/res', 'collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: 'https://demo.getodk.org',
    replacement: "https://kc.kobotoolbox.org/kobodemouser",
    paths: ['collect_app/src/main/res'],
    recursive: true,
    silent: true
});

replace({
    regex: 'support@getodk.org',
    replacement: "info@kobotoolbox.org",
    paths: ['collect_app/src/main/java/org/odk/collect/android/tasks'],
    recursive: true,
    silent: true
});