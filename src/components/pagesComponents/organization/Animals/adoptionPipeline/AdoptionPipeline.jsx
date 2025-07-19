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
    finalization: [
      {
        id: "cooper",
        name: "Cooper",
        breed: "Border Collie",
        info: "Paperwork completed • Pickup scheduled Friday",
        status: "green",
        emoji: "🐕",
        bgColor: "bg-orange-200",
      },
      {
        id: "princess",
        name: "Princess",
        breed: "Persian",
        info: "Final paperwork in progress • Adopter contacted",
        status: "orange",
        emoji: "🐱",
        bgColor: "bg-yellow-200",
      },
    ],
  })

  const [dragOver, setDragOver] = useState(null)
  const [draggedFrom, setDraggedFrom] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Define stage order and valid transitions
  const stageOrder = ["intake", "evaluation", "ready", "applications", "meetgreet", "finalization"]

  function getStageIndex(stage) {
    return stageOrder.indexOf(stage)
  }

  function isValidMove(fromStage, toStage) {
    const fromIndex = getStageIndex(fromStage)
    const toIndex = getStageIndex(toStage)

    // Can only move to the next stage (forward by 1)
    return toIndex === fromIndex + 1
  }

  function showInvalidMoveToast() {
    if (showToast) return // Don't show if already showing
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  function createDragImage(element) {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = 200
    canvas.height = 60

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "#e5e7eb"
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#374151"
    ctx.font = "14px system-ui"
    ctx.fillText("Moving...", 10, 30)

    return canvas
  }

  function handleDragStart(e, animal, fromStage) {
    setDraggedFrom(fromStage)
    setIsDragging(true)

    const dragImage = createDragImage(e.currentTarget)
    e.dataTransfer.setDragImage(dragImage, dragImage.width / 2, dragImage.height / 2)
    e.dataTransfer.setData("text", JSON.stringify({ animal, fromStage }))
    e.dataTransfer.effectAllowed = "move"

    // Find the parent card and set opacity
    const card = e.currentTarget.closest(".animal-card")
    if (card) {
      card.style.opacity = "0.5"
    }
  }

  function handleDragEnd(e) {
    // Find the parent card and reset opacity
    const card = e.currentTarget.closest(".animal-card")
    if (card) {
      card.style.opacity = "1"
    }
    setDraggedFrom(null)
    setIsDragging(false)
    setDragOver(null) // Clear any drag over states
  }

  function handleDragOver(e) {
    e.preventDefault()
  }

  function handleDragEnter(e, stage) {
    // Only highlight if it's a valid move
    if (draggedFrom && isValidMove(draggedFrom, stage)) {
      setDragOver(stage)
    }
  }

  function handleDragLeave() {
    setDragOver(null)
  }

  function handleDrop(e, toStage) {
    e.preventDefault()
    setDragOver(null)

    const data = JSON.parse(e.dataTransfer.getData("text"))
    const { animal, fromStage } = data

    // Check if move is valid
    if (!isValidMove(fromStage, toStage)) {
      showInvalidMoveToast()
      return // Invalid move, show toast and do nothing
    }

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
      <div className="animal-card bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-all relative">
        <div className={`absolute top-2 right-2 w-2 h-2 ${statusColor} rounded-full`}></div>

        {/* Drag Handle */}
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, animal, stage)}
          onDragEnd={handleDragEnd}
          className="absolute top-2 left-2 cursor-move text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "none",
          }}
          title="Drag to move"
        >
          ⋮⋮
        </div>

        <div className="flex items-center space-x-3 mb-3 ml-6">
          <div className={`w-10 h-10 ${animal.bgColor} rounded-lg flex items-center justify-center`}>
            <span className="text-lg">{animal.emoji}</span>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{animal.name}</h4>
            <p className="text-xs text-gray-500">{animal.breed}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-3 ml-6">
          {animal.age ? `Age: ${animal.age} • Arrived: ${animal.arrived}` : animal.info}
        </p>
        <div className="flex items-center space-x-2 ml-6">
          <button className="text-xs text-gray-600 hover:text-gray-800 cursor-pointer">View</button>
          <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-md hover:bg-green-700 cursor-pointer">
            Complete
          </button>
        </div>
      </div>
    )
  }

  function DropZone({ stage, title, emoji, count, borderColor, bgColor, children }) {
    const isValidTarget = draggedFrom && isValidMove(draggedFrom, stage)
    const isDropTarget = dragOver === stage && isValidTarget

    return (
      <div
        className={`bg-gray-50 rounded-xl p-4 border-l-4 ${borderColor} min-h-96 transition-all ${
          isDropTarget ? "bg-blue-50 ring-2 ring-blue-300" : ""
        }`}
        onDragOver={handleDragOver}
        onDragEnter={(e) => handleDragEnter(e, stage)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, stage)}
      >
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm font-medium text-gray-700">
            {emoji} {title}
          </span>
          <span className={`${bgColor} text-xs font-medium px-2 py-1 rounded-full`}>{count}</span>
        </div>
        <div className="space-y-3">{children}</div>
        <div
          className={`mt-4 p-4 border-2 border-dashed rounded-lg text-center transition-colors ${
            isDropTarget ? "border-blue-400 bg-blue-100" : "border-gray-300"
          }`}
        >
          <p className="text-sm text-gray-500">{isDropTarget ? "Drop here!" : "Drop animals here"}</p>
        </div>
      </div>
    )
  }

  function Toast() {
    if (!showToast) return null

    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top duration-300">
        <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Cannot move backward, cards must move forward in order</span>
          <button onClick={() => setShowToast(false)} className="ml-2 text-white hover:text-gray-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Toast />

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
          <p className="text-sm text-gray-500">Drag animals to next stage only • Sequential workflow</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <DropZone
            stage="intake"
            title="Intake"
            emoji="🏠"
            count={stages.intake.length}
            borderColor="border-blue-400"
            bgColor="bg-blue-100 text-blue-800"
          >
            {stages.intake.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="intake" />
            ))}
          </DropZone>

          <DropZone
            stage="evaluation"
            title="Evaluation"
            emoji="🏥"
            count={stages.evaluation.length}
            borderColor="border-orange-400"
            bgColor="bg-orange-100 text-orange-800"
          >
            {stages.evaluation.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="evaluation" />
            ))}
          </DropZone>

          <DropZone
            stage="ready"
            title="Ready"
            emoji="✅"
            count={stages.ready.length}
            borderColor="border-green-400"
            bgColor="bg-green-100 text-green-800"
          >
            {stages.ready.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="ready" />
            ))}
          </DropZone>

          <DropZone
            stage="applications"
            title="Applications"
            emoji="📝"
            count={stages.applications.length}
            borderColor="border-purple-400"
            bgColor="bg-purple-100 text-purple-800"
          >
            {stages.applications.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="applications" />
            ))}
          </DropZone>

          <DropZone
            stage="meetgreet"
            title="Meet & Greet"
            emoji="🤝"
            count={stages.meetgreet.length}
            borderColor="border-yellow-400"
            bgColor="bg-yellow-100 text-yellow-800"
          >
            {stages.meetgreet.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="meetgreet" />
            ))}
          </DropZone>
          <DropZone
            stage="finalization"
            title="Finalization"
            emoji="🏠"
            count={stages.finalization.length}
            borderColor="border-green-400"
            bgColor="bg-green-100 text-green-800"
          >
            {stages.finalization.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} stage="finalization" />
            ))}
          </DropZone>
        </div>
      </div>
    </div>
  )
}
