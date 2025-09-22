import React from 'react'
import { ArrowUpRight, ArrowDownLeft, Filter, Calendar } from 'lucide-react'

// Mock transaction data
const mockTransactions = [
  {
    id: '1',
    fund_name: 'Vanguard Total Stock Market Index Fund',
    fund_symbol: 'VTSAX',
    type: 'buy',
    shares: 100,
    price_per_share: 112.45,
    total_amount: 11245,
    transaction_date: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    fund_name: 'Fidelity Bond Index Fund',
    fund_symbol: 'FXNAX',
    type: 'buy',
    shares: 200,
    price_per_share: 10.89,
    total_amount: 2178,
    transaction_date: '2024-01-10T14:20:00Z'
  },
  {
    id: '3',
    fund_name: 'Vanguard S&P 500 Index Fund',
    fund_symbol: 'VFIAX',
    type: 'sell',
    shares: 50,
    price_per_share: 425.30,
    total_amount: 21265,
    transaction_date: '2024-01-08T09:15:00Z'
  }
]

export function Transactions() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Transaction History</h1>
        <p className="text-gray-600">View all your fund transactions and activity</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
            <option value="all">All Transactions</option>
            <option value="buy">Buy Only</option>
            <option value="sell">Sell Only</option>
          </select>
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
            <option value="all">All Time</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 3 Months</option>
            <option value="365">Last Year</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    transaction.type === 'buy' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'buy' ? (
                      <ArrowDownLeft className="h-5 w-5" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{transaction.fund_name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{transaction.fund_symbol}</span>
                      <span>•</span>
                      <span className="capitalize">{transaction.type}</span>
                      <span>•</span>
                      <span>{transaction.shares.toLocaleString()} shares</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`text-lg font-semibold ${
                    transaction.type === 'buy' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {transaction.type === 'buy' ? '-' : '+'}${transaction.total_amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${transaction.price_per_share.toFixed(2)} per share
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.transaction_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {mockTransactions.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No transactions yet</h3>
          <p className="text-gray-600">Your transaction history will appear here</p>
        </div>
      )}
    </div>
  )
}