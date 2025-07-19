"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProjectWidget {
    constructor(config) {
        this.config = config;
        this.container = config.container || document.body;
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.fetchProjectData(this.config.projectId);
                console.log('Welcome to Memoir', data);
            }
            catch (error) {
                console.error('Memoir failed to load:', error);
            }
        });
    }
    fetchProjectData(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: projectId,
                name: `Project ${projectId}`,
                description: `This is a description for project ${projectId}.`,
                // Simulate fetching data from an API
                // In a real application, you would replace this with an actual API call
            };
        });
    }
    // Static method to auto-initialize from data attributes
    static autoInit() {
        const elements = document.querySelectorAll('[data-project-id]');
        elements.forEach(element => {
            const projectId = element.getAttribute('data-project-id');
            if (projectId) {
                new ProjectWidget({
                    projectId,
                    container: element
                });
            }
        });
    }
}
// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProjectWidget.autoInit());
}
else {
    ProjectWidget.autoInit();
}
// Export for manual initialization
window.ProjectWidget = ProjectWidget;
