(() => {

    const getConfig = async (projectId) => {
        const response = fetch(`http://localhost:5080/projects/${projectId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("Failed to load config")
        return await response.json();
    }

    const scriptTag = document.currentScript
    const projectId = scriptTag?.dataset.projectId || 'unknown'

    getConfig(projectId).then((config)=>{
        if (!config) return;
        console.log(`Loaded memoir and found a valid connection\nWelcome to ${config.apiUrl}`);
    });

})()
