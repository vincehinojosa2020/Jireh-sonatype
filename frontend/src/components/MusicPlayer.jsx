import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Radio } from "lucide-react";

const YOUTUBE_VIDEO_ID = "v62uOI77DS0";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player("yt-player", {
        height: "0",
        width: "0",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
          }
        }
      });
    };

    // If API already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div
      data-testid="music-player"
      className="fixed bottom-4 left-4 z-50 transition-all duration-300"
    >
      {/* Hidden YouTube Player */}
      <div id="yt-player" className="hidden" />

      {/* Minimal Player UI */}
      <div className={`bg-[#0A4F60]/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? "w-48" : "w-auto"}`}>
        <div className="p-2 flex items-center gap-2">
          {/* Radio Icon */}
          <div className="w-8 h-8 rounded-md flex items-center justify-center bg-white/5">
            <Radio className={`w-4 h-4 ${isPlaying ? "text-[#F5A623] animate-pulse" : "text-white/40"}`} />
          </div>

          {/* Song Info (when expanded) */}
          {isExpanded && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs truncate">Ambient Music</p>
              <p className="text-white/40 text-[10px]">Jireh Vibes</p>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={togglePlay}
              className="p-2 rounded-md transition-all bg-white/10 text-white hover:bg-white/20"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            
            {isExpanded && (
              <button
                onClick={toggleMute}
                className="p-1.5 text-white/60 hover:text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </button>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-white/40 hover:text-white transition-colors"
              aria-label="Toggle expand"
            >
              <svg className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
