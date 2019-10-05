module.exports = {
  name: 'my-smart-home',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-smart-home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
