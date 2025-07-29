import { Config } from "./config.js";

// Create a new Config instance
const config = new Config(
  (appConfig) => {
    // Set configuration options during initialization
    appConfig.set('port', 3000)
    appConfig.set("env", "development");
    appConfig.setMultiple({
      database: "myappdb",
      debug: true,
    });
  }
);

// Access configuration settings
console.log("App Port:", config.get("port")); // Output: App Port: 3000
console.log("All Settings:", config.getAll());

//startup

// Attempting to modify the configuration after initialization
config.getAll.port = 8000 // This won't change the internal settings

console.log("App Port after modification attempt:", config.get("port")); // Still 3000
