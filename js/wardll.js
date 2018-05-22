$('.body').vidbg({
    'mp4': 'http://example.com/video.mp4',
    'webm': 'path/to/video.webm',
    'poster': 'path/to/fallback-image.png',
}, {

    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    position: '100% 100%',
    resizing: true,
    overlay: false,
});