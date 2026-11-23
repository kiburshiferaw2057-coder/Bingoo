# BINGO ET — Full Version Repository (Web PWA + Play Store Android Wrapper)

This repository contains the complete **BINGO ET** full-version application along with Android / Google Play packaging setup.

## Included in This Repository
- **Full Web App (`index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`)**:
  - `1–600` Bingo number selector with range tabs (`1–150`, `151–300`, `301–450`, `451–600`, `All (600)`) and direct jump.
  - `2`-minute (`120s`) round cycle with minute countdown (`2 min (02:00)`) and automatic round reset.
  - Live `75`-ball board, BINGO claim view, winner card summary, and Birr (`ETB`) wallet drawer.
  - Multilingual support for Amharic (`አማ`), Tigrigna (`ትግ`), and English (`EN`).
- **Play Store Packaging (`android-twa-capacitor/`)**:
  - `capacitor.config.json` (`appId`: `et.bingo.app`, `appName`: `BINGO ET`)
  - `app/src/main/AndroidManifest.xml`
  - `app/src/main/java/et/bingo/app/MainActivity.java`
- **CI Workflow (`.github/workflows/build-android.yml`)**

## How to Build & Upload to Google Play Console
1. Push this repository to GitHub (`main` branch).
2. In Android Studio (or via Capacitor), open the Android project using package ID `et.bingo.app`.
3. Generate a signed release **Android App Bundle (`.aab`)** via **Build → Generate Signed Bundle / APK → Android App Bundle** with your upload keystore.
4. Upload the signed `.aab` to **Google Play Console** (Testing track or Production release), complete Data Safety, Content Rating, and store listing assets (`512x512` icon + phone screenshots), and submit for review.
