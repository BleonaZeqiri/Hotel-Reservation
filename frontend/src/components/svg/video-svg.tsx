

export function VideoSvg({ clr = 'currentColor' }: { clr?: string }) {
    return (
        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 13L0.5 25.9904V0.00961876L23 13Z" fill={clr} />
        </svg>
    )
}

export function VideoSvgTwo() {
    return (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 11L0 21.3923V0.607696L18 11Z" fill="currentColor" />
        </svg>
    )
}
