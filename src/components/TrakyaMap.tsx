"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Map component to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import("./Map/CustomMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#0a0c10] text-white/30">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[#c5f536]/30 border-t-[#c5f536] rounded-full animate-spin" />
                <span className="text-sm">Harita Yükleniyor...</span>
            </div>
        </div>
    ),
});

export const TrakyaMap = () => {
    return (
        <div className="w-full relative bg-[#020305]">
            <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto bg-[#0a0c10] rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl z-0">
                <LeafletMap />
            </div>

            <p className="text-center text-xs text-white/30 mt-4">* İşaretli bölgeler ana hizmet noktalarımızdır. Tüm Trakya'ya hizmet veriyoruz.</p>
        </div>
    );
};
