"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, CreditCard, Droplets, History, Home, Lightbulb, Phone, ShieldCheck, Trophy, Wallet, Zap } from "lucide-react";

const ScreenContainer = ({ children, active = false }: { children: React.ReactNode, active?: boolean }) => (
  <div className={`w-[280px] h-[580px] bg-white rounded-[40px] border-[8px] border-nexea-navy shadow-2xl overflow-hidden relative shrink-0 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-40'}`}>
    {/* iPhone Notch */}
    <div className="absolute top-0 inset-x-0 h-6 bg-nexea-navy rounded-b-3xl w-40 mx-auto z-50"></div>
    {/* Status Bar */}
    <div className="h-12 w-full bg-white flex items-center justify-between px-6 pt-2 text-xs font-medium text-gray-800 z-40 relative">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
        <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
      </div>
    </div>
    <div className="h-[calc(100%-3rem)] w-full overflow-y-auto overflow-x-hidden pb-10 bg-gray-50 hide-scrollbar">
      {children}
    </div>
  </div>
);

const HomeDashboardScreen = () => (
  <ScreenContainer active>
    <div className="px-5 pt-4 pb-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-nexea-blue to-nexea-cyan flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div>
            <p className="text-xs text-gray-500">Welcome back,</p>
            <p className="text-sm font-semibold text-nexea-navy">John Doe</p>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-nexea-navy">
          <ShieldCheck size={16} />
        </button>
      </div>

      {/* Balance Card */}
      <div className="w-full rounded-2xl bg-gradient-to-br from-nexea-navy to-[#0F2040] p-5 text-white shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-nexea-cyan/20 rounded-full blur-xl -ml-10 -mb-10"></div>
        
        <p className="text-white/70 text-sm mb-1 relative z-10">Total Balance</p>
        <div className="flex items-end gap-2 mb-4 relative z-10">
          <span className="text-3xl font-bold tracking-tight">₦245,500.00</span>
        </div>
        
        <div className="flex gap-2 relative z-10">
          <button className="flex-1 bg-white text-nexea-navy py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
            <Zap size={14} /> Add Money
          </button>
          <button className="flex-1 bg-white/10 backdrop-blur-md text-white border border-white/20 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
            <ArrowRightLeft size={14} /> Send
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <h3 className="text-sm font-semibold text-nexea-navy mb-3">Quick Services</h3>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { icon: <Phone size={20} />, label: "Airtime", color: "bg-blue-100 text-blue-600" },
          { icon: <Droplets size={20} />, label: "Data", color: "bg-cyan-100 text-cyan-600" },
          { icon: <Lightbulb size={20} />, label: "Power", color: "bg-yellow-100 text-yellow-600" },
          { icon: <Trophy size={20} />, label: "Rewards", color: "bg-emerald-100 text-emerald-600" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-sm`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-medium text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h3 className="text-sm font-semibold text-nexea-navy mb-3">Recent Activity</h3>
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
              <Lightbulb size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Electricity Bill</p>
              <p className="text-xs text-gray-400">Today, 10:24 AM</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-gray-800">-₦15,000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
              <ArrowRightLeft size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Received USDT</p>
              <p className="text-xs text-gray-400">Yesterday, 14:30 PM</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-600">+₦45,200</span>
        </div>
      </div>
    </div>
    
    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-2 z-40 pb-4">
      <div className="flex flex-col items-center text-nexea-blue gap-1"><Home size={20} /><span className="text-[10px] font-medium">Home</span></div>
      <div className="flex flex-col items-center text-gray-400 gap-1"><ArrowRightLeft size={20} /><span className="text-[10px] font-medium">Swap</span></div>
      <div className="flex flex-col items-center text-gray-400 gap-1"><History size={20} /><span className="text-[10px] font-medium">History</span></div>
      <div className="flex flex-col items-center text-gray-400 gap-1"><Trophy size={20} /><span className="text-[10px] font-medium">Rewards</span></div>
    </div>
  </ScreenContainer>
);

const SwapScreen = () => (
  <ScreenContainer>
    <div className="px-5 pt-4 pb-20 h-full flex flex-col bg-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-nexea-navy">Swap Assets</h2>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 font-medium">Stellar Network</span>
      </div>

      {/* Swap UI */}
      <div className="flex-1">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-2 relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500 font-medium">You Pay</span>
            <span className="text-xs text-gray-500">Balance: $450.00</span>
          </div>
          <div className="flex justify-between items-center">
            <input type="text" value="100.00" readOnly className="text-3xl font-bold bg-transparent w-3/5 text-nexea-navy focus:outline-none" />
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">₮</div>
              <span className="font-semibold text-sm">USDT</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-3 relative z-10">
          <button className="w-10 h-10 bg-nexea-blue text-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
            <ArrowRightLeft size={16} className="rotate-90" />
          </button>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500 font-medium">You Receive</span>
            <span className="text-xs text-gray-500">Balance: ₦24,500</span>
          </div>
          <div className="flex justify-between items-center">
            <input type="text" value="114,500" readOnly className="text-3xl font-bold bg-transparent w-3/5 text-nexea-navy focus:outline-none" />
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px] font-bold">₦</div>
              <span className="font-semibold text-sm">NGN</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Exchange Rate</span>
            <span className="font-medium text-nexea-navy">1 USDT = 1,145 NGN</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Network Fee</span>
            <span className="font-medium text-green-500">Free (Stellar)</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-nexea-blue text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 mt-auto">
        Confirm Swap
      </button>
    </div>
  </ScreenContainer>
);

const RewardsScreen = () => (
  <ScreenContainer>
    <div className="px-5 pt-4 pb-20 bg-emerald-50/50 min-h-full">
      <h2 className="text-lg font-bold text-nexea-navy mb-6">NEXEA Rewards</h2>
      
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-3xl p-6 text-white text-center shadow-lg shadow-emerald-500/20 mb-6">
        <Trophy size={32} className="mx-auto mb-2 text-yellow-300" />
        <p className="text-emerald-100 text-sm mb-1">Available Points</p>
        <p className="text-4xl font-bold">12,450</p>
        <p className="text-xs text-emerald-100 mt-2 bg-emerald-600/30 inline-block px-3 py-1 rounded-full">
          Gold Tier • 2,550 to Platinum
        </p>
      </div>

      <h3 className="text-sm font-semibold text-nexea-navy mb-3">Redeem For</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Phone size={14}/></div>
          <span className="text-sm font-medium text-gray-800">₦500 Airtime</span>
          <span className="text-xs font-bold text-emerald-500">1,000 pts</span>
        </div>
        <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center"><Droplets size={14}/></div>
          <span className="text-sm font-medium text-gray-800">1GB Data</span>
          <span className="text-xs font-bold text-emerald-500">1,500 pts</span>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-nexea-navy mb-3">Earn Points</h3>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Wallet size={18}/></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Fund Wallet</p>
            <p className="text-xs text-gray-500">Earn 50 pts per ₦10,000</p>
          </div>
          <button className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">Do it</button>
        </div>
      </div>
    </div>
  </ScreenContainer>
);

const TransactionScreen = () => (
  <ScreenContainer>
    <div className="px-5 pt-4 pb-20 bg-white h-full">
      <h2 className="text-lg font-bold text-nexea-navy mb-4">Transactions</h2>
      
      <div className="flex gap-2 overflow-x-auto hide-scrollbar mb-6">
        {["All", "Sent", "Received", "Swaps", "Bills"].map((f, i) => (
          <button key={i} className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${i === 0 ? 'bg-nexea-navy text-white' : 'bg-gray-100 text-gray-600'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">Today</h3>
          <div className="space-y-4">
            {[
              { title: "Netflix Subscription", time: "14:20 PM", amount: "-₦4,500", icon: <CreditCard size={18}/>, color: "bg-red-50 text-red-500" },
              { title: "USDT Swap", time: "09:15 AM", amount: "+₦114,500", icon: <ArrowRightLeft size={18}/>, color: "bg-blue-50 text-blue-500" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.color}`}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{t.title}</p>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">Yesterday</h3>
          <div className="space-y-4">
            {[
              { title: "MTN Airtime", time: "18:45 PM", amount: "-₦2,000", icon: <Phone size={18}/>, color: "bg-orange-50 text-orange-500" },
              { title: "Transfer from Alex", time: "11:30 AM", amount: "+₦50,000", icon: <ArrowRightLeft size={18} className="rotate-45"/>, color: "bg-green-50 text-green-500" },
              { title: "Ikeja Electric", time: "08:10 AM", amount: "-₦15,000", icon: <Lightbulb size={18}/>, color: "bg-yellow-50 text-yellow-500" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.color}`}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{t.title}</p>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                </div>
                <span className={`text-sm font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </ScreenContainer>
);

export default function PhoneMockups() {
  return (
    <div className="relative w-full h-[600px] perspective-[2000px] flex items-center justify-center">
      {/* 3D Rotating Stack using Framer Motion */}
      <motion.div 
        className="relative w-[280px] h-[580px] preserve-3d"
        animate={{
          rotateY: [0, -10, -20, -10, 0],
          rotateX: [5, 10, 5, 0, 5]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute inset-0 preserve-3d"
          animate={{ x: 0, z: 0 }}
        >
          <HomeDashboardScreen />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 preserve-3d origin-left opacity-90"
          animate={{ x: 120, z: -100, rotateY: -15, scale: 0.9 }}
        >
          <SwapScreen />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 preserve-3d origin-left opacity-80"
          animate={{ x: 240, z: -200, rotateY: -25, scale: 0.8 }}
        >
          <RewardsScreen />
        </motion.div>

        <motion.div 
          className="absolute inset-0 preserve-3d origin-right opacity-90"
          animate={{ x: -120, z: -100, rotateY: 15, scale: 0.9 }}
        >
          <TransactionScreen />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .perspective-[2000px] {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
