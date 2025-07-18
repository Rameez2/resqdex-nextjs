"use client"

import { useState } from "react"

export default function AdoptionPipeline() {
  const [stages, setStages] = useState({
    intake: [
      {
        id: "charlie",
        name: "Charlie",
        breed: "Beagle Mix",
        age: "2 years",
        arrived: "2 days ago",
        status: "green",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
      {
        id: "daisy",
        name: "Daisy",
        breed: "Calico",
        age: "1 year",
        arrived: "1 day ago",
        status: "orange",
        emoji: "🐱",
        bgColor: "bg-yellow-200",
      },
      {
        id: "buddy",
        name: "Buddy",
        breed: "Pit Bull Mix",
        age: "4 years",
        arrived: "5 days ago",
        status: "red",
        emoji: "🐕",
        bgColor: "bg-blue-200",
      },
    ],
    evaluation: [
      {
        id: "max",
        name: "Max",
        breed: "German Shepherd",
        info: "Medical eval: In progress",
        status: "green",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
      {
        id: "luna",
        name: "Luna",
        breed: "Siamese Mix",
        info: "Medical eval: Completed",
        status: "orange",
        emoji: "🐱",
        bgColor: "bg-yellow-200",
      },
    ],
    ready: [
      {
        id: "bella",
        name: "Bella",
        breed: "Golden Retriever",
        info: "Available for adoption",
        status: "green",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
      {
        id: "whiskers",
        name: "Whiskers",
        breed: "Tabby Mix",
        info: "Profile live for 1 week",
        status: "orange",
        emoji: "🐱",
        bgColor: "bg-yellow-200",
      },
    ],
    applications: [
      {
        id: "rocky",
        name: "Rocky",
        breed: "Pit Bull Mix",
        info: "4 applications pending",
        status: "red",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
      {
        id: "mittens",
        name: "Mittens",
        breed: "Maine Coon",
        info: "2 applications approved",
        status: "green",
        emoji: "🐱",
        bgColor: "bg-yellow-200",
      },
    ],
    meetgreet: [
      {
        id: "oscar",
        name: "Oscar",
        breed: "Labrador",
        info: "Meetup scheduled tomorrow",
        status: "green",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
    ],
  })

  const [dragOver, setDragOver] = useState(null)

  function createDragImage(element) {
    // Create a canvas to draw the drag image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Set canvas size to match the element
    const rect = element.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Create a simple drag preview
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "#e5e7eb"
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    // Add some text
    ctx.fillStyle = "#374151"
    ctx.font = "14px system-ui"
    ctx.fillText("Moving...", 10, 30)

    return canvas
  }

  function handleDragStart(e, animal, fromStage) {
    // Create custom drag image
    const dragImage = createDragImage(e.currentTarget)

    // Set the custom drag image
    e.dataTransfer.setDragImage(dragImage, dragImage.width / 2, dragImage.height / 2)

    // Set drag data
    e.dataTransfer.setData("text", JSON.stringify({ animal, fromStage }))
    e.dataTransfer.effectAllowed = "move"

    // Add dragging class to original element
    e.currentTarget.style.opacity = "0.5"
  }

  function handleDragEnd(e) {
    // Reset original element opacity
    e.currentTarget.style.opacity = "1"
  }

  function handleDragOver(e) {
    e.preventDefault()
  }

  function handleDragEnter(e, stage) {
    setDragOver(stage)
  }

  function handleDragLeave() {
    setDragOver(null)
  }

  function handleDrop(e, toStage) {
    e.preventDefault()
    setDragOver(null)

    const data = JSON.parse(e.dataTransfer.getData("text"))
    const { animal, fromStage } = data

    if (fromStage === toStage) return

    setStages((prev) => ({
      ...prev,
      [fromStage]: prev[fromStage].filter((a) => a.id !== animal.id),
      [toStage]: [...prev[toStage], animal],
    }))
  }

  function AnimalCard({ animal, stage }) {
    const statusColor =
      animal.status === "green" ? "bg-green-400" : animal.status === "orange" ? "bg-orange-400" : "bg-red-400"

    return (
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, animal, stage)}
        onDragEnd={handleDragEnd}
        className="bg-white rounded-lg p-4 shadow-sm border cursor-move hover:shadow-md transition-all relative"
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "none",
        }}
      >
        <div className={`absolute top-2 right-2 w-2 h-2 ${statusColor} rounded-full`}></div>
        <div className="flex items-center space-x-3 mb-3">
          <div className={`w-10 h-10 ${animal.bgColor} rounded-lg flex items-center justify-center`}>
            <span className="text-lg pointer-events-none">{animal.emoji}</span>
          </div>
          <div className="pointer-events-none">
            <h4 className="font-medium text-gray-900">{animal.name}</h4>
            <p className="text-xs text-gray-500">{animal.breed}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-3 pointer-events-none">
          {animal.age ? `Age: ${animal.age} • Arrived: ${animal.arrived}` : animal.info}
        </p>
        <div className="flex items-center space-x-2 pointer-events-none">
          <button className="text-xs text-gray-600 hover:text-gray-800">View</button>
          <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-700">Move →</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Adoption Pipeline</h1>
            <p className="text-sm text-gray-500">Animals › Adoption Pipeline</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-700">📊 Pipeline Report</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-700">⚡ Optimize Flow</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            <span className="text-sm font-medium">+ Add to Pipeline</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">{Object.values(stages).flat().length}</div>
          <div className="text-sm text-gray-600 mb-2">Animals in Pipeline</div>
          <div className="text-xs text-green-600">↗ +3 this week</div>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
          <div className="text-sm text-gray-600 mb-2">Average Days</div>
          <div className="text-xs text-red-600">↘ -2 days improved</div>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">87%</div>
          <div className="text-sm text-gray-600 mb-2">Success Rate</div>
          <div className="text-xs text-green-600">↗ +5% this month</div>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
          <div className="text-sm text-gray-600 mb-2">Bottlenecks</div>
          <div className="text-xs text-red-600">↘ -1 resolved</div>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
          <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-sm text-gray-600 mb-2">Adoptions This Month</div>
          <div className="text-xs text-green-600">↗ +4 vs last month</div>
        </div>
      </div>

      {/* Pipeline */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600">🔄</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Interactive Adoption Pipeline</h2>
          </div>
          <p className="text-sm text-gray-500">Drag animals between stages • Real-time updates</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {/* Intake */}
          <div
            className={`bg-gray-50 rounded-xl p-4 border-l-4 border-blue-400 min-h-96 ${dragOver === "intake" ? "bg-blue-50 ring-2 ring-blue-300" : ""}`}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, "intake")}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, "intake")}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-700">🏠 Intake</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                {stages.intake.length}
              </span>
            </div>
            <div className="space-y-3">
              {stages.intake.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} stage="intake" />
              ))}
            </div>
            <div
              className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center ${dragOver === "intake" ? "border-blue-400 bg-blue-100" : "border-gray-300"}`}
            >
              <p className="text-sm text-gray-500">{dragOver === "intake" ? "Drop here!" : "Drop animals here"}</p>
            </div>
          </div>

          {/* Evaluation */}
          <div
            className={`bg-gray-50 rounded-xl p-4 border-l-4 border-orange-400 min-h-96 ${dragOver === "evaluation" ? "bg-blue-50 ring-2 ring-blue-300" : ""}`}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, "evaluation")}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, "evaluation")}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-700">🏥 Evaluation</span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                {stages.evaluation.length}
              </span>
            </div>
            <div className="space-y-3">
              {stages.evaluation.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} stage="evaluation" />
              ))}
            </div>
            <div
              className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center ${dragOver === "evaluation" ? "border-blue-400 bg-blue-100" : "border-gray-300"}`}
            >
              <p className="text-sm text-gray-500">{dragOver === "evaluation" ? "Drop here!" : "Drop animals here"}</p>
            </div>
          </div>

          {/* Ready */}
          <div
            className={`bg-gray-50 rounded-xl p-4 border-l-4 border-green-400 min-h-96 ${dragOver === "ready" ? "bg-blue-50 ring-2 ring-blue-300" : ""}`}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, "ready")}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, "ready")}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-700">✅ Ready</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                {stages.ready.length}
              </span>
            </div>
            <div className="space-y-3">
              {stages.ready.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} stage="ready" />
              ))}
            </div>
            <div
              className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center ${dragOver === "ready" ? "border-blue-400 bg-blue-100" : "border-gray-300"}`}
            >
              <p className="text-sm text-gray-500">{dragOver === "ready" ? "Drop here!" : "Drop animals here"}</p>
            </div>
          </div>

          {/* Applications */}
          <div
            className={`bg-gray-50 rounded-xl p-4 border-l-4 border-purple-400 min-h-96 ${dragOver === "applications" ? "bg-blue-50 ring-2 ring-blue-300" : ""}`}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, "applications")}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, "applications")}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-700">📝 Applications</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                {stages.applications.length}
              </span>
            </div>
            <div className="space-y-3">
              {stages.applications.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} stage="applications" />
              ))}
            </div>
            <div
              className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center ${dragOver === "applications" ? "border-blue-400 bg-blue-100" : "border-gray-300"}`}
            >
              <p className="text-sm text-gray-500">
                {dragOver === "applications" ? "Drop here!" : "Drop animals here"}
              </p>
            </div>
          </div>

          {/* Meet & Greet */}
          <div
            className={`bg-gray-50 rounded-xl p-4 border-l-4 border-yellow-400 min-h-96 ${dragOver === "meetgreet" ? "bg-blue-50 ring-2 ring-blue-300" : ""}`}
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, "meetgreet")}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, "meetgreet")}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm font-medium text-gray-700">🤝 Meet & Greet</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                {stages.meetgreet.length}
              </span>
            </div>
            <div className="space-y-3">
              {stages.meetgreet.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} stage="meetgreet" />
              ))}
            </div>
            <div
              className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center ${dragOver === "meetgreet" ? "border-blue-400 bg-blue-100" : "border-gray-300"}`}
            >
              <p className="text-sm text-gray-500">{dragOver === "meetgreet" ? "Drop here!" : "Drop animals here"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
