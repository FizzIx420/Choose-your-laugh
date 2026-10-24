# Savestate


## 2026-10-24: Rolling release ZIP publisher and recovery policy

- Added `.github/actions/publish-release-zip/action.yml` for ZIP publication, rebuild metadata, SHA-256 inventory, and rolling three-release retention.
- Added `.github/RELEASE_ZIP_POLICY.md` describing the required publication pattern.
- Existing workflows are not yet migrated in this commit. Verification of actual publication/retention is pending a successful build.

## 2026-10-24: Android APK delivery migrated to rolling release ZIPs

- Replaced the Actions APK artifact upload in `.github/workflows/android-apk.yml` with the local rolling release ZIP publisher.
- The ZIP contains the built release APK and recovery metadata/checksums; it is published only after a successful non-pull-request build.
- Preserved the existing checkout, dependency synchronization, Expo prebuild, Gradle build, and APK discovery steps.
- Verification pending a successful Android workflow run; no workflow dispatch was performed by this tool session.

## 2026-10-24: Enforce release ZIP policy for future build workflows

- Added `.github/workflows/release-zip-policy-check.yml`, a read-only guard that checks build-output workflows use the local release ZIP publisher and any temporary Actions artifact uploads set one-day retention.
- The guard does not publish or delete artifacts; it will run automatically on the next push/PR. Runtime verification is pending.

## 2026-10-24: Enforce release ZIP-only build delivery

- Updated the local publisher so intermediate handoffs live in draft `ci-*` releases and only a successful final ZIP publishes the release. Rolling retention counts only published successful CI releases and keeps the newest three.
- Updated `.github/workflows/release-zip-policy-check.yml` to reject all `actions/upload-artifact` use and require the local release ZIP publisher for build outputs.
- Draft handoffs are cleaned by the account-level cleanup workflow if a build never reaches final publication. Verification pending workflow runs.

## 2026-10-24: Fix final release publisher shell block

- Removed the redundant closing `fi` from the shared release publisher. Intermediate draft ZIPs and final published ZIPs now follow a syntactically balanced shell block.
- The policy guard continues to prohibit Actions artifact uploads and require release ZIP publishing for build outputs. Runtime verification pending.
