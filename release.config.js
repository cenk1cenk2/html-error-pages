module.exports = {
  branches: [ 'master' ],
  verifyConditions: [ '@semantic-release/changelog', '@semantic-release/git' ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@google/semantic-release-replace-plugin',
      {
        replacements: [
          {
            files: [ 'config/default.js' ],
            from: 'version: .*',
            to: 'version: \'${nextRelease.version}\'',
            results: [
              {
                file: 'config/default.js',
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1
              }
            ],
            countMatches: true
          }
        ]
      }
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        generateNotesCmd: 'echo \'latest,${nextRelease.version}\' > .tags',
        publishCmd: 'yarn build'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: [ 'CHANGELOG.md', 'README.md' ],
        message: 'chore(release): <%= nextRelease.version %> - <%= new Date().toISOString().slice(0,10).replace(/-/g,\'\') %> [skip ci]\n\n<%= nextRelease.notes %>'
      }
    ],
    '@semantic-release/github'
  ]
}
