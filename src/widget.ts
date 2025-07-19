interface WidgetConfig {
    projectId: string;
    container?: HTMLElement;
    theme?: 'light' | 'dark';
}

class ProjectWidget {
    private config: WidgetConfig;
    private container: HTMLElement;

    constructor(config: WidgetConfig) {
        this.config = config;
        this.container = config.container || document.body;
        this.init();
    }

    private async init() {
        try {
            const data = await this.fetchProjectData(this.config.projectId);
            console.log('Welcome to Memoir', data);
        } catch (error) {
            console.error('Memoir failed to load:', error);
        }
    }

    private async fetchProjectData(projectId: string) {
        return {
            id: projectId,
            name: `Project ${projectId}`,
            description: `This is a description for project ${projectId}.`,
            // Simulate fetching data from an API
            // In a real application, you would replace this with an actual API call
        }
    }

    // Static method to auto-initialize from data attributes
    static autoInit() {
        const elements = document.querySelectorAll('[data-project-id]');
        elements.forEach(element => {
            const projectId = element.getAttribute('data-project-id');
            if (projectId) {
                new ProjectWidget({
                    projectId,
                    container: element as HTMLElement
                });
            }
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProjectWidget.autoInit());
} else {
    ProjectWidget.autoInit();
}

// Export for manual initialization
(window as any).ProjectWidget = ProjectWidget;