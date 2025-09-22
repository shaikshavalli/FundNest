import React, { useState } from 'react'
import { Lightbulb, Plus, Edit3, Trash2, Eye, Heart, MessageCircle, Share2 } from 'lucide-react'

// Mock user's ideas
const mockMyIdeas = [
  {
    id: '1',
    title: 'EcoWaste - Smart Waste Management System',
    description: 'An IoT-based smart waste management system that optimizes garbage collection routes and reduces environmental impact through real-time monitoring.',
    category: 'Environmental',
    stage: 'Prototype',
    fundingNeeded: 50000,
    timeframe: '6 months',
    status: 'active',
    likes: 124,
    comments: 18,
    shares: 7,
    views: 450,
    createdDate: '2024-01-15',
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    title: 'Campus Food Sharing App',
    description: 'A mobile app that connects students to share leftover food from dining halls and reduce food waste on campus.',
    category: 'Social Impact',
    stage: 'Concept',
    fundingNeeded: 25000,
    timeframe: '4 months',
    status: 'draft',
    likes: 67,
    comments: 12,
    shares: 3,
    views: 230,
    createdDate: '2024-01-10',
    lastUpdated: '2024-01-18'
  }
]

export function MyIdeas() {
  const [ideas, setIdeas] = useState(mockMyIdeas)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingIdea, setEditingIdea] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50'
      case 'draft': return 'text-yellow-600 bg-yellow-50'
      case 'archived': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'text-blue-600 bg-blue-50'
      case 'Healthcare': return 'text-green-600 bg-green-50'
      case 'Education': return 'text-purple-600 bg-purple-50'
      case 'Environmental': return 'text-emerald-600 bg-emerald-50'
      case 'Social Impact': return 'text-pink-600 bg-pink-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  const deleteIdea = (ideaId: string) => {
    setIdeas(ideas.filter(idea => idea.id !== ideaId))
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Ideas</h1>
          <p className="text-gray-600">Manage and track your innovative ideas</p>
        </div>
        
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Idea
        </button>
      </div>

      {/* Ideas Grid */}
      <div className="grid gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-3">{idea.description}</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(idea.category)}`}>
                      {idea.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(idea.status)}`}>
                      {idea.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      Updated {new Date(idea.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingIdea(idea)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit3 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => deleteIdea(idea.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Funding Needed</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(idea.fundingNeeded)}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Timeframe</p>
                  <p className="text-lg font-bold text-gray-900">{idea.timeframe}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Stage</p>
                  <p className="text-lg font-bold text-gray-900">{idea.stage}</p>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center text-gray-600">
                    <Eye className="h-5 w-5 mr-1" />
                    <span>{idea.views}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Heart className="h-5 w-5 mr-1" />
                    <span>{idea.likes}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MessageCircle className="h-5 w-5 mr-1" />
                    <span>{idea.comments}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    <span>{idea.shares}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  View Public Page
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Share
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Analytics
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {ideas.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No ideas yet</h3>
          <p className="text-gray-600 mb-6">Start by creating your first innovative idea</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Your First Idea
          </button>
        </div>
      )}

      {/* Create/Edit Idea Modal */}
      {(showCreateForm || editingIdea) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingIdea ? 'Edit Idea' : 'Create New Idea'}
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Title
                </label>
                <input
                  type="text"
                  defaultValue={editingIdea?.title || ''}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Give your idea a catchy title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  defaultValue={editingIdea?.description || ''}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Describe your idea in detail"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select 
                    defaultValue={editingIdea?.category || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Social Impact">Social Impact</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Stage
                  </label>
                  <select 
                    defaultValue={editingIdea?.stage || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Stage</option>
                    <option value="Concept">Concept</option>
                    <option value="Research">Research</option>
                    <option value="Prototype">Prototype</option>
                    <option value="MVP">MVP</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Needed
                  </label>
                  <input
                    type="number"
                    defaultValue={editingIdea?.fundingNeeded || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Amount in USD"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    defaultValue={editingIdea?.timeframe || ''}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 6 months"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select 
                  defaultValue={editingIdea?.status || 'draft'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false)
                    setEditingIdea(null)
                  }}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {editingIdea ? 'Update Idea' : 'Create Idea'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}