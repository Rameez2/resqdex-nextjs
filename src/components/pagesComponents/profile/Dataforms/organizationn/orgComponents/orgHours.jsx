const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timeOptions = [
  "", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM"
];

const OrgHours = ({data,onChange}) => {
    const handleChange = (dayIndex, type, value) => {
    const current = data[dayIndex] || "";
    let open = "", close = "";

    if (current === "Closed" || !current.includes("-")) {
      open = "";
      close = "";
    } else {
      [open, close] = current.split(" - ").map((s) => s.trim());
    }

    if (value === "Closed") {
      onChange([
        ...data.slice(0, dayIndex),
        "Closed",
        ...data.slice(dayIndex + 1),
      ]);
      return;
    }

    if (type === "open") open = value;
    if (type === "close") close = value;

    const result = open && close ? `${open} - ${close}` : "";

    onChange([
      ...data.slice(0, dayIndex),
      result,
      ...data.slice(dayIndex + 1),
    ]);
  };
  
  
    return (
        <>
                   {/* Hours Section */}
<div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          Hours (visible to public)
        </h2>
        <p className="text-gray-600 mt-1">
          Open and close hours; if you are not open on a day, please leave the fields blank or choose "Closed".
        </p>
      </div>

      <div className="p-6 space-y-4">
        {daysOfWeek.map((day, index) => {
          const raw = data[index] || "";
          let open = "", close = "";

          if (raw === "Closed") {
            open = "Closed";
            close = "";
          } else if (raw.includes(" - ")) {
            [open, close] = raw.split(" - ").map((s) => s.trim());
          }

          return (
            <div key={day} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">{day}</label>
              </div>

              <div className="md:col-span-1">
                <select
                  value={open}
                  onChange={(e) => handleChange(index, "open", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Opening Time</option>
                  <option value="Closed">Closed</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-1 text-center text-sm text-gray-500">to</div>

              <div className="md:col-span-1">
                <select
                  value={close}
                  onChange={(e) => handleChange(index, "close", e.target.value)}
                  disabled={open === "Closed"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 bg-white disabled:bg-gray-100"
                >
                  <option value="">Closing Time</option>
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> These hours will be displayed publicly. Set to "Closed" or leave both times blank if closed.
          </p>
        </div>
      </div>
    </div>
        </>
    );
}

export default OrgHours;
