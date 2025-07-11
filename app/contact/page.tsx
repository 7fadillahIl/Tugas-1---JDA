"use client";

import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Hubungi Kami
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kontak Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationOn size={28} className="text-blue-500 mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Alamat</h2>
                <p className="text-sm text-gray-600">Jl. Hegarmanah Asri</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone size={28} className="text-blue-500 mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Telepon</h2>
                <p className="text-sm text-gray-600">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail size={28} className="text-blue-500 mt-1" />
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="text-sm text-gray-600">adminlohya@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
