"use client";

import { FaUsers, FaEnvelope, FaTools } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <MdDashboard size={40} className="text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Pengguna"
          value="120"
          icon={<FaUsers />}
          color="bg-green-100"
        />
        <StatCard
          title="Surat Masuk"
          value="87"
          icon={<FaEnvelope />}
          color="bg-yellow-100"
        />
        <StatCard
          title="Pengaduan"
          value="34"
          icon={<FaTools />}
          color="bg-red-100"
        />
      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Aktivitas Terbaru
        </h2>
        <ul className="space-y-4">
          {[
            "Surat dari warga diterima",
            "Pengaduan mengenai jalan rusak ditambahkan",
            "Akun pegawai baru dibuat",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <BsCheckCircleFill className="text-green-500" />
              <span className="text-gray-700 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <div className={`p-6 rounded-xl shadow-md text-gray-700 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="text-4xl opacity-30">{icon}</div>
      </div>
    </div>
  );
}
