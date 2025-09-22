import React, { useState } from 'react'
import { Lightbulb, Users, Heart, MessageCircle, Share2, Plus, Search, Filter, Star, Calendar, User, TrendingUp, Video, Phone, Mail } from 'lucide-react'

// Mock student ideas data with enhanced details
const mockIdeas = [
  {
    id: '1',
    title: 'EcoWaste - Smart Waste Management System',
    description: 'An IoT-based smart waste management system that optimizes garbage collection routes and reduces environmental impact through real-time monitoring.',
    author: {
      name: 'Sohail',
      university: 'MIT',
      major: 'Environmental Engineering',
      year: 'Senior',
      avatar: 'https://thumbs.dreamstime.com/b/young-indian-student-18617603.jpg',
      gpa: '3.8',
      achievements: ['Dean\'s List', 'Sustainability Award'],
      skills: ['IoT', 'Python', 'Data Analytics']
    },
    category: 'Environmental',
    tags: ['IoT', 'Sustainability', 'Smart Cities'],
    fundingNeeded: 50000,
    timeframe: '6 months',
    stage: 'Prototype',
    likes: 124,
    comments: 18,
    shares: 7,
    views: 450,
    postedDate: '2024-01-15',
    featured: true,
    details: {
      problem: 'Current waste management systems are inefficient and contribute to environmental pollution.',
      solution: 'Smart sensors in waste bins that communicate with collection trucks to optimize routes.',
      market: 'Municipal governments and waste management companies',
      competition: 'Traditional waste management companies',
      team: 'Looking for co-founders with business and tech background',
      businessModel: 'SaaS subscription for municipalities',
      uniqueValue: 'First IoT solution combining route optimization with environmental tracking'
    },
    communicationPrefs: {
      video: true,
      messaging: true,
      phone: true,
      email: true
    },
    responseTime: '< 24 hours',
    availability: 'Mon-Fri 2PM-6PM EST'
  },
  {
    id: '2',
    title: 'StudyBuddy - AI-Powered Learning Assistant',
    description: 'An AI-powered platform that creates personalized study plans and connects students with study partners based on learning styles and subjects.',
    author: {
      name: 'Priya Patel',
      university: 'Stanford University',
      major: 'Computer Science',
      year: 'Junior',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      gpa: '3.9',
      achievements: ['Google Scholar', 'Hackathon Winner'],
      skills: ['AI/ML', 'React', 'Python']
    },
    category: 'Education',
    tags: ['AI', 'EdTech', 'Social Learning'],
    fundingNeeded: 75000,
    timeframe: '8 months',
    stage: 'Concept',
    likes: 89,
    comments: 23,
    shares: 12,
    views: 320,
    postedDate: '2024-01-10',
    featured: false,
    details: {
      problem: 'Students struggle with effective study methods and finding compatible study partners.',
      solution: 'AI algorithm that matches students and creates optimal study schedules.',
      market: 'College students and educational institutions',
      competition: 'Study apps like Quizlet and Anki',
      team: 'Seeking AI/ML engineer and UX designer',
      businessModel: 'Freemium with premium AI features',
      uniqueValue: 'Advanced AI that adapts to individual learning patterns'
    },
    communicationPrefs: {
      video: true,
      messaging: true,
      phone: false,
      email: true
    },
    responseTime: '< 12 hours',
    availability: 'Tue-Thu 3PM-7PM PST'
  },
  {
    id: '3',
    title: 'HealthTrack - Wearable Health Monitor for Elderly',
    description: 'A comprehensive health monitoring system for elderly people that tracks vital signs and alerts family members and doctors in case of emergencies.',
    author: {
      name: 'Raju',
      university: 'Harvard University',
      major: 'Biomedical Engineering',
      year: 'Graduate',
      avatar: 'https://media.gettyimages.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.jpg?s=612x612&w=0&k=20&c=BbwgfMOtFOIJn1Km-ASix_EBbF9SHW5h0FtWbna5nFk=',
      gpa: '3.7',
      achievements: ['Research Publication', 'Innovation Grant'],
      skills: ['Hardware Design', 'Medical Devices', 'IoT']
    },
    category: 'Healthcare',
    tags: ['Wearables', 'Healthcare', 'IoT'],
    fundingNeeded: 100000,
    timeframe: '12 months',
    stage: 'MVP',
    likes: 156,
    comments: 31,
    shares: 19,
    views: 680,
    postedDate: '2024-01-08',
    featured: true,
    details: {
      problem: 'Elderly people living alone face health risks without immediate medical attention.',
      solution: 'Wearable device with sensors and emergency alert system.',
      market: 'Elderly care facilities and families with aging parents',
      competition: 'Apple Watch, Fitbit health features',
      team: 'Looking for hardware engineer and healthcare professional',
      businessModel: 'Direct sales and healthcare partnerships',
      uniqueValue: 'Medical-grade accuracy with family connectivity'
    },
    communicationPrefs: {
      video: true,
      messaging: true,
      phone: true,
      email: true
    },
    responseTime: '< 6 hours',
    availability: 'Mon-Fri 10AM-4PM EST'
  },
  {
    id: '4',
    title: 'FarmTech - Precision Agriculture Platform',
    description: 'A drone-based precision agriculture platform that helps farmers optimize crop yields through real-time monitoring and data analytics.',
    author: {
      name: 'Sarah Williams',
      university: 'UC Davis',
      major: 'Agricultural Engineering',
      year: 'Senior',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      gpa: '3.6',
      achievements: ['Agriculture Innovation Award', 'Sustainability Prize'],
      skills: ['Drone Technology', 'Data Analytics', 'Agriculture']
    },
    category: 'Agriculture',
    tags: ['Drones', 'Agriculture', 'Data Analytics'],
    fundingNeeded: 80000,
    timeframe: '10 months',
    stage: 'Research',
    likes: 67,
    comments: 14,
    shares: 8,
    views: 290,
    postedDate: '2024-01-05',
    featured: false,
    details: {
      problem: 'Farmers lack real-time data about crop health and soil conditions.',
      solution: 'Drone surveillance with AI-powered crop analysis.',
      market: 'Small to medium-sized farms',
      competition: 'John Deere precision agriculture tools',
      team: 'Seeking drone engineer and agricultural scientist',
      businessModel: 'Equipment sales and data subscription',
      uniqueValue: 'Affordable precision agriculture for small farms'
    },
    communicationPrefs: {
      video: false,
      messaging: true,
      phone: true,
      email: true
    },
    responseTime: '< 48 hours',
    availability: 'Weekends 1PM-5PM PST'
  }
]

export function StudentIdeas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [stageFilter, setStageFilter] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState<any>(null)
  const [showCommunicationModal, setShowCommunicationModal] = useState(false)

  const filteredIdeas = mockIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = categoryFilter === 'all' || idea.category === categoryFilter
    const matchesStage = stageFilter === 'all' || idea.stage === stageFilter
    return matchesSearch && matchesCategory && matchesStage
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'text-blue-600 bg-blue-50'
      case 'Healthcare': return 'text-green-600 bg-green-50'
      case 'Education': return 'text-purple-600 bg-purple-50'
      case 'Environmental': return 'text-emerald-600 bg-emerald-50'
      case 'Agriculture': return 'text-orange-600 bg-orange-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Concept': return 'text-yellow-600 bg-yellow-50'
      case 'Research': return 'text-blue-600 bg-blue-50'
      case 'Prototype': return 'text-purple-600 bg-purple-50'
      case 'MVP': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  const startVideoCall = (idea: any) => {
    alert(`Starting video call with ${idea.author.name}...`)
  }

  const sendMessage = (idea: any) => {
    setShowCommunicationModal(true)
  }

  const scheduleCall = (idea: any) => {
    alert(`Scheduling call with ${idea.author.name}...`)
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Innovation Hub
        </h1>
        <p className="text-gray-600 text-lg">Discover innovative ideas from students seeking investment and mentorship</p>
      </div>

      {/* Enhanced Header Actions */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Environmental">Environmental</option>
                  <option value="Agriculture">Agriculture</option>
                </select>
              </div>
              
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">All Stages</option>
                <option value="Concept">Concept</option>
                <option value="Research">Research</option>
                <option value="Prototype">Prototype</option>
                <option value="MVP">MVP</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center shadow-lg"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post Your Idea
          </button>
        </div>
      </div>

      {/* Enhanced Ideas Grid */}
      <div className="grid gap-8">
        {filteredIdeas.map((idea) => (
          <div key={idea.id} className={`bg-white rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${idea.featured ? 'border-purple-200 ring-2 ring-purple-100' : 'border-gray-100'}`}>
            {idea.featured && (
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 text-sm font-medium">
                <Star className="h-4 w-4 inline mr-2" />
                Featured Innovation
              </div>
            )}
            
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">{idea.description}</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(idea.category)}`}>
                      {idea.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(idea.stage)}`}>
                      {idea.stage}
                    </span>
                    {idea.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right ml-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-600">Views</p>
                    <p className="text-2xl font-bold text-gray-900">{idea.views}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Author Info */}
              <div className="flex items-center mb-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                <img
                  src={idea.author.avatar}
                  alt={idea.author.name}
                  className="w-16 h-16 rounded-full object-cover mr-6 border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{idea.author.name}</h4>
                  <p className="text-gray-600">{idea.author.major}, {idea.author.year}</p>
                  <p className="text-gray-500">{idea.author.university}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-blue-600 font-medium">GPA: {idea.author.gpa}</span>
                    <div className="flex gap-1">
                      {idea.author.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Posted</p>
                  <p className="text-sm font-medium">{new Date(idea.postedDate).toLocaleDateString()}</p>
                  <p className="text-xs text-green-600 mt-1">Responds {idea.responseTime}</p>
                </div>
              </div>

              {/* Communication Options */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Connect with Student</h4>
                <div className="flex gap-3 mb-3">
                  {idea.communicationPrefs.video && (
                    <button
                      onClick={() => startVideoCall(idea)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Video Call
                    </button>
                  )}
                  {idea.communicationPrefs.messaging && (
                    <button
                      onClick={() => sendMessage(idea)}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </button>
                  )}
                  {idea.communicationPrefs.phone && (
                    <button
                      onClick={() => scheduleCall(idea)}
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule Call
                    </button>
                  )}
                  <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </button>
                </div>
                <p className="text-sm text-gray-600">Available: {idea.availability}</p>
              </div>

              {/* Key Details with Enhanced Design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Funding Needed</p>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(idea.fundingNeeded)}</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Timeframe</p>
                  <p className="text-2xl font-bold text-gray-900">{idea.timeframe}</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Stage</p>
                  <p className="text-2xl font-bold text-gray-900">{idea.stage}</p>
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-6">
                  <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-5 w-5 mr-2" />
                    <span className="font-medium">{idea.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">{idea.comments}</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 className="h-5 w-5 mr-2" />
                    <span className="font-medium">{idea.shares}</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  {idea.views} views • {idea.comments} discussions
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedIdea(idea)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg"
                >
                  View Full Details
                </button>
                <button 
                  onClick={() => sendMessage(idea)}
                  className="px-6 py-3 border-2 border-purple-300 text-purple-600 rounded-xl hover:bg-purple-50 transition-colors font-semibold"
                >
                  Contact Student
                </button>
                <button className="px-6 py-3 border-2 border-green-300 text-green-600 rounded-xl hover:bg-green-50 transition-colors font-semibold">
                  Invest
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Communication Modal */}
      {showCommunicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Send Message</h3>
            <textarea
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              placeholder="Type your message..."
            ></textarea>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCommunicationModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Idea Details Modal */}
      {selectedIdea && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{selectedIdea.title}</h2>
              <button
                onClick={() => setSelectedIdea(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Problem Statement</h3>
                <p className="text-gray-600 mb-6">{selectedIdea.details.problem}</p>
                
                <h3 className="text-lg font-semibold mb-3">Proposed Solution</h3>
                <p className="text-gray-600 mb-6">{selectedIdea.details.solution}</p>
                
                <h3 className="text-lg font-semibold mb-3">Target Market</h3>
                <p className="text-gray-600 mb-6">{selectedIdea.details.market}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Competition Analysis</h3>
                <p className="text-gray-600 mb-6">{selectedIdea.details.competition}</p>
                
                <h3 className="text-lg font-semibold mb-3">Team Requirements</h3>
                <p className="text-gray-600 mb-6">{selectedIdea.details.team}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Investment Details</h4>
                  <p className="text-sm text-gray-600">Funding Needed: {formatCurrency(selectedIdea.fundingNeeded)}</p>
                  <p className="text-sm text-gray-600">Timeline: {selectedIdea.timeframe}</p>
                  <p className="text-sm text-gray-600">Current Stage: {selectedIdea.stage}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors">
                Invest in This Idea
              </button>
              <button 
                onClick={() => startVideoCall(selectedIdea)}
                className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center"
              >
                <Video className="h-4 w-4 mr-2" />
                Video Call
              </button>
              <button 
                onClick={() => sendMessage(selectedIdea)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Contact Student
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredIdeas.length === 0 && (
        <div className="text-center py-12">
          <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No ideas found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Create Idea Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Post Your Idea</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Idea Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Give your idea a catchy title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your idea in detail"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Stage
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Amount in USD"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 6 months"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., AI, Machine Learning, Healthcare"
                />
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Post Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}