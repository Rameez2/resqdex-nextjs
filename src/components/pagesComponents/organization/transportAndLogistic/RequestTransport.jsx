import {
  CalendarDaysIcon,
  TruckIcon,
  SaveIcon,
  MapPinIcon,
  UsersIcon,
  ListChecksIcon,
  RouteIcon,
  PhoneIcon,
  AlertTriangleIcon,
} from "lucide-react"

export default function RequestTransport() {
  return (
    <div className="min-h-screen bg-dark-green p-4 md:p-8 text-white">
      {/* Header Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1: Pending Requests */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-4xl font-bold">15</h2>
            <p className="text-sm text-gray-600">Pending Requests</p>
          </div>
          <div className="bg-light-green text-dark-green text-xs px-2 py-1 rounded-full inline-block">
            +3 since yesterday
          </div>
        </div>
        {/* Card 2: Urgent Priority */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-4xl font-bold">7</h2>
            <p className="text-sm text-gray-600">Urgent Priority</p>
          </div>
          <div className="bg-light-pink text-dark-pink text-xs px-2 py-1 rounded-full inline-block">
            Needs assignment
          </div>
        </div>
        {/* Card 3: Available Drivers */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-4xl font-bold">12</h2>
            <p className="text-sm text-gray-600">Available Drivers</p>
          </div>
          <div className="bg-light-green text-dark-green text-xs px-2 py-1 rounded-full inline-block">
            Ready for pickup
          </div>
        </div>
        {/* Card 4: Avg Response Time */}
        <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-4xl font-bold">2.3hrs</h2>
            <p className="text-sm text-gray-600">Avg Response Time</p>
          </div>
          <div className="bg-light-green text-dark-green text-xs px-2 py-1 rounded-full inline-block">
            Within targets
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: New Transport Request Form */}
        <div className="lg:col-span-2 bg-white text-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-dark-green">
            <TruckIcon className="w-6 h-6" /> New Transport Request
          </h2>

          {/* Pickup Location */}
          <div className="mb-4">
            <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location *
            </label>
            <input
              id="pickup-location"
              type="text"
              placeholder="Austin Animal Control - 7201 Levander Loop"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Destination */}
          <div className="mb-6">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Destination *
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Dallas Forever Homes - 1542 Oak Street"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Route Preview */}
          <div className="bg-route-preview-bg rounded-lg p-4 mb-6 border border-dashed border-gray-300">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-orange-accent mb-3">
              <MapPinIcon className="w-4 h-4" /> Route Preview
            </div>
            <p className="text-center text-gray-700 mb-4">Austin Animal Control → Dallas Forever Homes</p>
            <div className="grid grid-cols-3 text-center">
              <div>
                <p className="text-xl font-bold">247</p>
                <p className="text-xs text-gray-600">Miles</p>
              </div>
              <div>
                <p className="text-xl font-bold">4h 15m</p>
                <p className="text-xs text-gray-600">Est. Time</p>
              </div>
              <div>
                <p className="text-xl font-bold">$89</p>
                <p className="text-xs text-gray-600">Est. Cost</p>
              </div>
            </div>
          </div>

          {/* Pickup Date & Preferred Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Date *
              </label>
              <div className="relative">
                <input
                  id="pickup-date"
                  type="text"
                  placeholder="07 / 25 / 2025"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                />
                <CalendarDaysIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select
                id="preferred-time"
                defaultValue="morning"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 9PM)</option>
              </select>
            </div>
          </div>

          {/* Priority Level */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level *</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground flex flex-col h-auto py-3 border-gray-300 text-gray-700">
                <span className="font-semibold">Low Priority</span>
                <span className="text-xs text-gray-500">Standard transport</span>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-yellow-orange hover:bg-yellow-orange/90 text-white flex flex-col h-auto py-3 border border-yellow-orange">
                <span className="font-semibold">Standard</span>
                <span className="text-xs text-white/80">Normal urgency</span>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground flex flex-col h-auto py-3 border-emergency-red text-emergency-red">
                <span className="font-semibold">Emergency</span>
                <span className="text-xs text-emergency-red/80">Urgent medical</span>
              </button>
            </div>
          </div>

          {/* Select Animals */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Animals *</label>
            <div className="space-y-3">
              {/* Animal 1 */}
              <div className="flex items-start space-x-3 p-4 border border-yellow-orange rounded-lg bg-light-yellow">
                <input
                  type="checkbox"
                  id="animal-bella"
                  defaultChecked
                  className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1 border-yellow-orange checked:bg-yellow-orange checked:text-white"
                />
                <label htmlFor="animal-bella" className="flex flex-col cursor-pointer">
                  <span className="font-semibold text-gray-800">Bella - Golden Retriever</span>
                  <span className="text-sm text-gray-600">Female, 3 years, 65 lbs • Medical: Up to date</span>
                </label>
              </div>
              {/* Animal 2 */}
              <div className="flex items-start space-x-3 p-4 border border-yellow-orange rounded-lg bg-light-yellow">
                <input
                  type="checkbox"
                  id="animal-max"
                  defaultChecked
                  className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1 border-yellow-orange checked:bg-yellow-orange checked:text-white"
                />
                <label htmlFor="animal-max" className="flex flex-col cursor-pointer">
                  <span className="font-semibold text-gray-800">Max - German Shepherd</span>
                  <span className="text-sm text-gray-600">Male, 5 years, 80 lbs • Medical: Recent surgery</span>
                </label>
              </div>
              {/* Animal 3 */}
              <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg bg-white">
                <input
                  type="checkbox"
                  id="animal-luna"
                  className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1"
                />
                <label htmlFor="animal-luna" className="flex flex-col cursor-pointer">
                  <span className="font-semibold text-gray-800">Luna - Siamese Cat</span>
                  <span className="text-sm text-gray-600">Female, 2 years, 8 lbs • Medical: Up to date</span>
                </label>
              </div>
              {/* Animal 4 */}
              <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg bg-white">
                <input
                  type="checkbox"
                  id="animal-rocky"
                  className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground mt-1"
                />
                <label htmlFor="animal-rocky" className="flex flex-col cursor-pointer">
                  <span className="font-semibold text-gray-800">Rocky - Pit Bull Mix</span>
                  <span className="text-sm text-gray-600">Male, 4 years, 70 lbs • Medical: Recovering injury</span>
                </label>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-6">
            <label htmlFor="special-instructions" className="block text-sm font-medium text-gray-700 mb-1">
              Special Instructions
            </label>
            <textarea
              id="special-instructions"
              placeholder="Max requires gentle handling due to recent surgery. Please ensure minimal stress during transport."
              rows={3}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Contact Person & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="contact-person" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person *
              </label>
              <input
                id="contact-person"
                type="text"
                placeholder="Sarah Johnson"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                id="phone-number"
                type="text"
                placeholder="(555) 892-3456"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-submit-orange hover:bg-submit-orange/90 text-white rounded-lg flex items-center gap-2">
              <TruckIcon className="w-5 h-5" /> Submit Transport Request
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-save-purple text-save-purple hover:bg-save-purple/10 rounded-lg flex items-center gap-2">
              <SaveIcon className="w-5 h-5" /> Save Draft
            </button>
          </div>
        </div>

        {/* Right Column: Pending Requests, Available Drivers, Quick Actions */}
        <div className="space-y-6">
          {/* Pending Requests */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-dark-green">
              <ListChecksIcon className="w-5 h-5" /> Pending Requests
            </h2>
            <div className="space-y-4">
              {/* Request 1 */}
              <div className="p-3 bg-light-yellow rounded-lg border border-yellow-orange">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold text-gray-800">Emergency Pickup → Vet Clinic</p>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-assign-green hover:bg-assign-green/90 text-white text-xs h-7 px-3">
                      Assign
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-yellow-orange text-yellow-orange hover:bg-yellow-orange/10 text-xs h-7 px-3">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Rocky • Submitted 2 hours ago</p>
              </div>
              {/* Request 2 */}
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold text-gray-800">Houston → San Antonio</p>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-assign-green hover:bg-assign-green/90 text-white text-xs h-7 px-3">
                      Assign
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-yellow-orange text-yellow-orange hover:bg-yellow-orange/10 text-xs h-7 px-3">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">3 cats • Submitted 5 hours ago</p>
              </div>
              {/* Request 3 */}
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-semibold text-gray-800">Austin → Dallas</p>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-assign-green hover:bg-assign-green/90 text-white text-xs h-7 px-3">
                      Assign
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground border-yellow-orange text-yellow-orange hover:bg-yellow-orange/10 text-xs h-7 px-3">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">2 dogs • Submitted 1 day ago</p>
              </div>
            </div>
          </div>

          {/* Available Drivers */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-dark-green">
              <UsersIcon className="w-5 h-5" /> Available Drivers
            </h2>
            <div className="space-y-4">
              {/* Driver 1 */}
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-assign-green rounded-full"></span>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Martinez</p>
                  <p className="text-sm text-gray-600">Austin area • Ready now</p>
                </div>
              </div>
              {/* Driver 2 */}
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-assign-green rounded-full"></span>
                <div>
                  <p className="font-semibold text-gray-800">Jennifer Adams</p>
                  <p className="text-sm text-gray-600">Dallas area • Available 2PM</p>
                </div>
              </div>
              {/* Driver 3 */}
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-emergency-red rounded-full"></span>
                <div>
                  <p className="font-semibold text-gray-800">Mike Rodriguez</p>
                  <p className="text-sm text-gray-600">En route • Back at 4PM</p>
                </div>
              </div>
              {/* Driver 4 */}
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-assign-green rounded-full"></span>
                <div>
                  <p className="font-semibold text-gray-800">David Wilson</p>
                  <p className="text-sm text-gray-600">Houston area • Ready now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-dark-green">
              <AlertTriangleIcon className="w-5 h-5" /> Quick Actions
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700 hover:text-dark-green cursor-pointer">
                <ListChecksIcon className="w-5 h-5 text-yellow-orange" /> View All Requests
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-dark-green cursor-pointer">
                <RouteIcon className="w-5 h-5 text-save-purple" /> Route Optimizer
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-dark-green cursor-pointer">
                <PhoneIcon className="w-5 h-5 text-submit-orange" /> Contact Drivers
              </div>
              <div className="flex items-center gap-3 text-gray-700 hover:text-dark-green cursor-pointer">
                <AlertTriangleIcon className="w-5 h-5 text-emergency-red" /> Emergency Request
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
