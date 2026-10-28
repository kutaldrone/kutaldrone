# Kutal Drone

Netlify publishes the reviewed v11 static website from `release-site/`.
Run `npm run build` to verify the release. No framework build or server is required.

The previous Next.js sources remain in the repository. Their dependency manifests are preserved in `legacy-build/`; they are not used for the production static release.

Netlify reads `netlify.toml`, publishes `release-site/`, and skips the Next.js adapter.
