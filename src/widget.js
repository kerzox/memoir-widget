(() => {
    // Get script tag and project ID
    const scriptTag = document.currentScript
    const projectId = scriptTag?.dataset.projectId || 'unknown'

    // Create a floating badge
    const badge = document.createElement('div')
    badge.innerText = `📌 Memoir Active\nProject: ${projectId}`
    badge.style.position = 'fixed'
    badge.style.bottom = '10px'
    badge.style.right = '10px'
    badge.style.zIndex = 9999
    badge.style.background = '#111'
    badge.style.color = '#fff'
    badge.style.padding = '8px 12px'
    badge.style.fontSize = '12px'
    badge.style.borderRadius = '6px'
    badge.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'
    badge.style.whiteSpace = 'pre-line'
    badge.style.fontFamily = 'monospace'
    badge.style.cursor = 'default'

    // Add to the page
    document.body.appendChild(badge)

    // Log to console
    console.log(`[Memoir] Widget running for project: ${projectId}`)
})()
