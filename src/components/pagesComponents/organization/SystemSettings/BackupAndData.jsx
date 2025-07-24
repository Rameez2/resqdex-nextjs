const BackupAndData = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <h1 className="text-2xl font-bold text-white">Backup & Data</h1>
        </div>
        <p className="text-slate-300 mb-6">Data management and backup configuration center</p>

        {/* Status Bar */}
        <div className="flex items-center gap-6 text-sm text-slate-300 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Backup System Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Next Backup: Tonight 3:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>Storage: 67% Used</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium">
            🔄 Backup Now
          </button>
          <button className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-md font-medium">
            ⚙️ Configure
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Backup Overview */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">1</span>
                </div>
                <h2 className="text-lg font-semibold">Backup Overview</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">AUTO BACKUP ON</span>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-medium text-green-800">Backup System Status</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">247</div>
                  <div className="text-sm text-green-600">Total Backups</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">15.2GB</div>
                  <div className="text-sm text-green-600">Total Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">98.7%</div>
                  <div className="text-sm text-green-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scheduled Backups */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
              <h2 className="text-lg font-semibold">Scheduled Backups</h2>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 space-y-4">
              {/* Daily Full Backup */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-800">Daily Full Backup</div>
                  <div className="text-sm text-blue-600">Every day at 3:00 AM • Complete database</div>
                </div>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Scheduled</span>
              </div>

              {/* Incremental Backup */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-800">Incremental Backup</div>
                  <div className="text-sm text-blue-600">Every 6 hours • Changes only</div>
                </div>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
              </div>

              {/* Weekly Archive */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-800">Weekly Archive</div>
                  <div className="text-sm text-blue-600">Sunday at 1:00 AM • Long term storage</div>
                </div>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Scheduled</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-slate-700 text-white px-3 py-2 rounded text-sm">Edit Schedule</button>
              <button className="bg-green-500 text-white px-3 py-2 rounded text-sm">Add Backup Job</button>
            </div>
          </div>

          {/* Backup History */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">3</span>
                </div>
                <h2 className="text-lg font-semibold">Backup History</h2>
              </div>
              <span className="text-sm text-gray-500">LATEST: 6 HOURS AGO</span>
            </div>

            <div className="space-y-3">
              {/* Daily Full Backup */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Daily Full Backup</div>
                  <div className="text-sm text-gray-600">Complete database backup • 2.8GB</div>
                  <div className="text-xs text-gray-500">6 hours ago • 47 minutes</div>
                </div>
                <button className="text-green-600 text-sm font-medium">Download</button>
              </div>

              {/* Incremental Backup */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">i</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Incremental Backup</div>
                  <div className="text-sm text-gray-600">Changes only • 140MB • Normal</div>
                  <div className="text-xs text-gray-500">12 hours ago • 3 minutes</div>
                </div>
                <button className="text-green-600 text-sm font-medium">Download</button>
              </div>

              {/* Weekly Archive */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">A</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">Weekly Archive</div>
                  <div className="text-sm text-gray-600">Long term storage • 4.2GB •</div>
                  <div className="text-xs text-gray-500">Compressed</div>
                </div>
                <button className="text-green-600 text-sm font-medium">Download</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Storage Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">4</span>
                </div>
                <h2 className="text-lg font-semibold">Storage Management</h2>
              </div>
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">67% USED</span>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="font-medium text-orange-800">Storage Usage</span>
              </div>
              <div className="text-right mb-2">
                <span className="text-sm text-orange-600">15.2GB / 25GB</span>
              </div>
              <div className="text-right mb-3">
                <span className="text-xs text-orange-600">Used: 15.2GB</span>
                <span className="text-xs text-orange-600 ml-4">Available: 9.8GB</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-bold text-orange-700">8.4GB</div>
                  <div className="text-orange-600">Full Backups</div>
                </div>
                <div>
                  <div className="font-bold text-orange-700">3.2GB</div>
                  <div className="text-orange-600">Incremental</div>
                </div>
                <div>
                  <div className="font-bold text-orange-700">2.1GB</div>
                  <div className="text-orange-600">Archives</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mt-2">
                <div>
                  <div className="font-bold text-orange-700">0.9GB</div>
                  <div className="text-orange-600">Documents</div>
                </div>
                <div>
                  <div className="font-bold text-orange-700">0.4GB</div>
                  <div className="text-orange-600">System Logs</div>
                </div>
                <div>
                  <div className="font-bold text-orange-700">0.2GB</div>
                  <div className="text-orange-600">User Data</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-600">⚠️</span>
                <span className="font-medium text-red-800">Storage Warning</span>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Storage is approaching capacity. Consider upgrading or cleaning old backups.
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm w-full">Upgrade Storage</button>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">Clean Old Files</button>
              <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded text-sm">Optimize Storage</button>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">5</span>
                </div>
                <h2 className="text-lg font-semibold">Data Management</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">TOOLS READY</span>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="font-medium text-purple-800">Database Tools</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-blue-600">📤</span>
                  </div>
                  <div className="font-medium text-sm">Export Data</div>
                  <div className="text-xs text-gray-600">Download database in various formats</div>
                </div>

                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-green-600">📥</span>
                  </div>
                  <div className="font-medium text-sm">Import Data</div>
                  <div className="text-xs text-gray-600">Upload and merge external data</div>
                </div>

                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-red-600">🧹</span>
                  </div>
                  <div className="font-medium text-sm">Clean Database</div>
                  <div className="text-xs text-gray-600">Remove duplicate and orphaned records</div>
                </div>

                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-orange-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-orange-600">⚡</span>
                  </div>
                  <div className="font-medium text-sm">Optimize Tables</div>
                  <div className="text-xs text-gray-600">Improve database performance</div>
                </div>

                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-purple-600">📊</span>
                  </div>
                  <div className="font-medium text-sm">Data Analytics</div>
                  <div className="text-xs text-gray-600">Generate database usage reports</div>
                </div>

                <div className="text-center p-3 bg-white rounded border">
                  <div className="w-8 h-8 bg-teal-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-teal-600">🔍</span>
                  </div>
                  <div className="font-medium text-sm">Data Audit</div>
                  <div className="text-xs text-gray-600">Check data integrity and consistency</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">Quick Actions</div>
              <button className="w-full bg-slate-700 text-white py-2 rounded text-sm">Generate Database Report</button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded text-sm">Schedule Maintenance</button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded text-sm">Check Data Integrity</button>
            </div>
          </div>

          {/* Backup Configuration */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">6</span>
                </div>
                <h2 className="text-lg font-semibold">Backup Configuration</h2>
              </div>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">AUTO-CONFIGURED</span>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-600">⚙️</span>
                <span className="font-medium text-blue-800">Backup Settings</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Backup Frequency</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>Every 6 hours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Backup Retention</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>30 days</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Backup Location</label>
                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option>Local Storage + Cloud</option>
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Enable Compression</span>
                  <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                  <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Encrypt Backups</span>
                  <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-green-500 text-white py-2 rounded text-sm">Save Configuration</button>
              <button className="flex-1 bg-orange-500 text-white py-2 rounded text-sm">Test Backup</button>
            </div>
          </div>

          {/* Current Operations */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">7</span>
                </div>
                <h2 className="text-lg font-semibold">Current Operations</h2>
              </div>
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">1 RUNNING</span>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="font-medium">Incremental Backup in Progress</div>
                <div className="text-sm text-gray-600 mb-2">82%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                </div>
                <div className="text-xs text-gray-500">
                  Processing system records • 1,247 of 1,573 records completed • ETA: 3 minutes
                </div>
              </div>

              <div className="text-sm font-medium text-gray-700 mb-2">Scheduled Operations</div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Full Database Backup</span>
                  <span className="text-gray-500">Tonight at 3:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Archive Creation</span>
                  <span className="text-gray-500">Sunday at 1:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Database Optimization</span>
                  <span className="text-gray-500">Monthly - 1st Sunday</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-red-500 text-white py-2 rounded text-sm">Cancel Current</button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm">View All Operations</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackupAndData
