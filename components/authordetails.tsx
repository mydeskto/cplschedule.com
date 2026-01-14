import Image from 'next/image'

import CPLTeamPic from '@/public/images/bpl-logo.avif'

export default function AuthorDetails() {
  return (
    <div className="bg-[#122754] rounded-lg shadow-sm border border-gray-200 p-4  mt-5">
      <div className="flex items-start space-x-4">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={CPLTeamPic}
              alt="CPL T20 Team"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-2">
              Coastal Premier League (CPL) 2026 Team
              </h3>
              
              {/* Description */}
              <p className="text-sm text-white leading-relaxed mb-3">
              Written by the CPL T20 Team — experienced cricket writers and editors covering the Coastal Premier League 2026. With years of hands-on coverage and a deep understanding of the game, we deliver accurate match reports, in-depth player profiles, up-to-date points table insights, and detailed venue guides. Our work reflects a passionate, analytical, and fan-focused approach, with all content verified through official and trusted local sources.              </p>
            
            </div>
          </div>
        </div>       
      </div>
    </div>
  )
}


