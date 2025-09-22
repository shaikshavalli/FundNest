import React, { useState } from 'react'
import { Mail, User, Calendar, DollarSign, Building2, Eye, MessageCircle, CheckCircle, X, Star } from 'lucide-react'

// Mock student requests data
const mockRequests = [
  {
    id: '1',
    student: {
      name: 'Roshan',
      email: 'alex.Roshan@mit.edu',
      university: 'MIT',
      major: 'Environmental Engineering',
      year: 'Senior',
      avatar: 'https://media.istockphoto.com/id/1351018006/photo/smiling-male-student-sitting-in-university-classroom.jpg?s=612x612&w=0&k=20&c=G9doLib_ILUijluTSD5hstZBWqHHIcw4dBHhQcs-ON4='
    },
    idea: {
      title: 'EcoWaste - Smart Waste Management System',
      category: 'Environmental',
      stage: 'Prototype',
      description: 'An IoT-based smart waste management system that optimizes garbage collection routes and reduces environmental impact through real-time monitoring.',
      fundingNeeded: 50000,
      timeframe: '6 months',
      businessModel: 'SaaS subscription for municipalities and waste management companies',
      targetMarket: 'Municipal governments and private waste management companies',
      uniqueValue: 'First IoT solution that combines route optimization with environmental impact tracking'
    },
    submittedDate: '2024-01-15',
    status: 'new',
    priority: 'high'
  },
  {
    id: '2',
    student: {
      name: 'Lokesh',
      email: '.Lokesh@crescent.edu',
      university: 'Stanford University',
      major: 'Computer Science',
      year: 'Junior',
      avatar: 'https://media.istockphoto.com/id/1308970316/photo/college-student-going-to-class.jpg?s=612x612&w=0&k=20&c=ZIEsBqc6p54zhtNC6jF6_7cj7PtOK4-9E9RqrKt5BYU='
    },
    idea: {
      title: 'StudyBuddy - AI-Powered Learning Assistant',
      category: 'Education',
      stage: 'Concept',
      description: 'An AI-powered platform that creates personalized study plans and connects students with study partners based on learning styles and subjects.',
      fundingNeeded: 75000,
      timeframe: '8 months',
      businessModel: 'Freemium model with premium features for advanced AI tutoring',
      targetMarket: 'College students and educational institutions',
      uniqueValue: 'Advanced AI that adapts to individual learning patterns and social matching'
    },
    submittedDate: '2024-01-12',
    status: 'reviewed',
    priority: 'medium'
  },
  {
    id: '3',
    student: {
      name: 'Naveen',
      email: 'naveen@gmail.edu',
      university: 'Harvard University',
      major: 'Biomedical Engineering',
      year: 'Graduate',
      avatar: 'https://marketplace.canva.com/iZR3Y/MAGYSoiZR3Y/1/tl/canva-adult-student-learning-foreign-language-online-MAGYSoiZR3Y.jpg'
    },
    idea: {
      title: 'HealthTrack - Wearable Health Monitor for Elderly',
      category: 'Healthcare',
      stage: 'MVP',
      description: 'A comprehensive health monitoring system for elderly people that tracks vital signs and alerts family members and doctors in case of emergencies.',
      fundingNeeded: 100000,
      timeframe: '12 months',
      businessModel: 'Direct sales to consumers and partnerships with healthcare providers',
      targetMarket: 'Elderly care facilities and families with aging parents',
      uniqueValue: 'Medical-grade accuracy with consumer-friendly design and family connectivity'
    },
    submittedDate: '2024-01-10',
    status: 'interested',
    priority: 'high'
  }
]

export function StudentRequests() {
  const [selectedRequest, setSelectedRequest] = useState<any>(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  const filteredRequests = mockRequests.filter(request => {
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || request.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-600 bg-blue-50'
      case 'reviewed': return 'text-yellow-600 bg-yellow-50'
      case 'interested': return 'text-green-600 bg-green-50'
      case 'rejected': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'text-blue-600 bg-blue-50'
      case 'Healthcare': return 'text-green-600 bg-green-50'
      case 'Education': return 'text-purple-600 bg-purple-50'
      case 'Environmental': return 'text-emerald-600 bg-emerald-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  const updateRequestStatus = (requestId: string, newStatus: string) => {
    // In a real app, this would update the database
    console.log(`Updating request ${requestId} to status: ${newStatus}`)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Requests</h1>
        <p className="text-gray-600">Review and respond to student ideas seeking investment and mentorship</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="interested">Interested</option>
            <option value="rejected">Rejected</option>
          </select>
          
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            <option value="all">All Priority</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Requests List */}
      <div className="grid gap-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={request.student.avatar}
                    alt={request.student.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{request.idea.title}</h3>
                    <p className="text-gray-600">{request.student.name} • {request.student.university}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(request.idea.category)}`}>
                        {request.idea.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                        {request.priority} priority
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="text-sm font-medium">{new Date(request.submittedDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Idea Summary */}
              <p className="text-gray-700 mb-4">{request.idea.description}</p>

              {/* Key Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Funding Needed</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(request.idea.fundingNeeded)}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-gray-900">Timeframe</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{request.idea.timeframe}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Building2 className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium text-gray-900">Stage</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{request.idea.stage}</p>
                </div>
              </div>

              {/* Student Info */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-900 mb-2">Student Information</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-blue-600">Major:</span>
                    <p className="font-medium text-blue-900">{request.student.major}</p>
                  </div>
                  <div>
                    <span className="text-blue-600">Year:</span>
                    <p className="font-medium text-blue-900">{request.student.year}</p>
                  </div>
                  <div>
                    <span className="text-blue-600">University:</span>
                    <p className="font-medium text-blue-900">{request.student.university}</p>
                  </div>
                  <div>
                    <span className="text-blue-600">Email:</span>
                    <p className="font-medium text-blue-900">{request.student.email}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedRequest(request)}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  View Full Details
                </button>
                <button
                  onClick={() => updateRequestStatus(request.id, 'interested')}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Interested
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Request Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedRequest.idea.title}</h2>
                <p className="text-gray-600">by {selectedRequest.student.name}</p>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Idea Description</h3>
                <p className="text-gray-600 mb-6">{selectedRequest.idea.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">Business Model</h3>
                <p className="text-gray-600 mb-6">{selectedRequest.idea.businessModel}</p>
                
                <h3 className="text-lg font-semibold mb-3">Target Market</h3>
                <p className="text-gray-600 mb-6">{selectedRequest.idea.targetMarket}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Unique Value Proposition</h3>
                <p className="text-gray-600 mb-6">{selectedRequest.idea.uniqueValue}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-medium mb-3">Investment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Funding Needed:</span>
                      <span className="font-medium">{formatCurrency(selectedRequest.idea.fundingNeeded)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-medium">{selectedRequest.idea.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Stage:</span>
                      <span className="font-medium">{selectedRequest.idea.stage}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-3">Student Profile</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-600">Name:</span>
                      <span className="font-medium text-blue-900">{selectedRequest.student.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">University:</span>
                      <span className="font-medium text-blue-900">{selectedRequest.student.university}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Major:</span>
                      <span className="font-medium text-blue-900">{selectedRequest.student.major}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Academic Year:</span>
                      <span className="font-medium text-blue-900">{selectedRequest.student.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => updateRequestStatus(selectedRequest.id, 'interested')}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Express Interest
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Meeting
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600">No student requests match your current filters</p>
        </div>
      )}
    </div>
  )
}