# Simple `multipart/form-data` example project

This is a very simple monorepo powered by [NX](https://nx.dev) that demonstrates the process of creating a `multipart/form-data` API request, particularly on iOS

## Getting Started

- `npm i` Install the project dependencies
- Open the iOS project at `apps/ng-client/ios/App/App.xcworkspace` and apply your Team ID for siging the app
- You may need to also update the bundle identifier

### If you want to use the included API

- `npx nx run api`. This API should be accessible on your local network. Some machines may have firewalls enabled. If so, you may need to disable it.

### If you want to use your own API for testing

If you're going to use your own API, you can update the following folders with new form values to match your API:

- Angular HTTP: `libs/ng-client/feature/ng-http/src/lib/ng`
- Cordova Advanced HTTP Plugin: `libs/ng-client/feature/cd-http/src/lib/cordova`

### Then complete these steps to try it out on a device or emulator

- In `apps/ng-client/src/environments/environment.prod.ts`, update `apiHost` with your desired API endpoint
- `nx run ng-client:cap-run-ios` will build, sync, and run the app via the emulator or any connected development devices you have
- `nx run ng-client:cap-run-android` for Android!
