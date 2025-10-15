/* ========================================
   AI Chatbot Widget JavaScript
   ======================================== */

class PersonalChatbot {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.init();
    }

    init() {
        this.createChatbotHTML();
        this.bindEvents();
        this.addWelcomeMessage();
    }

    createChatbotHTML() {
        // Create floating button
        const toggleButton = document.createElement('button');
        toggleButton.className = 'chatbot-toggle';
        toggleButton.innerHTML = '💬';
        toggleButton.setAttribute('aria-label', 'Open chat');
        document.body.appendChild(toggleButton);

        // Create chat window
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chatbot-window';
        chatWindow.innerHTML = `
            <div class="chatbot-header">
                <h3 class="chatbot-title">Ask me anything</h3>
                <button class="chatbot-close" aria-label="Close chat">×</button>
            </div>
            <div class="chatbot-welcome">
                Hi! I'm here to answer questions about Phong Vu. Try asking about his background, projects, or skills!
            </div>
            <div class="chatbot-messages"></div>
            <div class="chatbot-typing">
                <div class="chatbot-typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="chatbot-input-area">
                <div class="chatbot-input-container">
                    <input type="text" class="chatbot-input" placeholder="Type your question here..." maxlength="500">
                    <button class="chatbot-send">→</button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWindow);

        // Store references
        this.toggleButton = toggleButton;
        this.chatWindow = chatWindow;
        this.messagesContainer = chatWindow.querySelector('.chatbot-messages');
        this.inputField = chatWindow.querySelector('.chatbot-input');
        this.sendButton = chatWindow.querySelector('.chatbot-send');
        this.typingIndicator = chatWindow.querySelector('.chatbot-typing');
    }

    bindEvents() {
        // Toggle chat window
        this.toggleButton.addEventListener('click', () => this.toggleChat());
        
        // Close chat window
        this.chatWindow.querySelector('.chatbot-close').addEventListener('click', () => this.closeChat());
        
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.sendMessage());
        
        // Send message on Enter key
        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.chatWindow.contains(e.target) && !this.toggleButton.contains(e.target)) {
                this.closeChat();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.isOpen = true;
        this.chatWindow.classList.add('active');
        this.inputField.focus();
        this.toggleButton.innerHTML = '✕';
    }

    closeChat() {
        this.isOpen = false;
        this.chatWindow.classList.remove('active');
        this.toggleButton.innerHTML = '💬';
    }

    addWelcomeMessage() {
        const welcomeMessage = this.createBotMessage(
            "Hello! I'm here to help you learn about Phong Vu. You can ask me about:\n\n" +
            "• His background and education\n" +
            "• His projects (like Resume2Path)\n" +
            "• His technical skills\n" +
            "• His internship experience\n" +
            "• His career goals\n\n" +
            "What would you like to know?"
        );
        this.messagesContainer.appendChild(welcomeMessage);
    }

    sendMessage() {
        const message = this.inputField.value.trim();
        if (!message) return;

        // Add user message
        this.addUserMessage(message);
        
        // Clear input
        this.inputField.value = '';
        this.sendButton.disabled = true;

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate AI thinking time and get response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.getResponse(message);
            this.addBotMessage(response);
            this.sendButton.disabled = false;
            this.inputField.focus();
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    addUserMessage(message) {
        const messageElement = this.createUserMessage(message);
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messageElement = this.createBotMessage(message);
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    createUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.textContent = message;
        return messageDiv;
    }

    createBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.textContent = message;
        return messageDiv;
    }

    showTypingIndicator() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.typingIndicator.classList.remove('active');
    }

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    // FAQ Response System
    // TODO: Replace this with actual AI API integration
    getResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Education questions
        if (message.includes('education') || message.includes('school') || message.includes('university') || message.includes('college')) {
            return "Phong is currently a Computer Science student at Georgia State University (August 2024 - May 2026) with a 4.0 GPA and President's List honors. He's also been accepted to Georgia Institute of Technology where he'll continue his Bachelor of Science in Computer Science from August 2026 - May 2028.";
        }
        
        if (message.includes('gpa') || message.includes('grade')) {
            return "Phong has maintained a perfect 4.0 GPA and has been on the President's List at Georgia State University. He's also been accepted to Georgia Institute of Technology to continue his studies.";
        }

        // Project questions
        if (message.includes('resume2path') || message.includes('project')) {
            return "Resume2Path is Phong's flagship project - an AI-powered career mentorship platform built with Next.js and Google's Gemini 2.0 Flash model. It provides personalized career guidance, resume analysis, and real-time job market intelligence. You can check it out at https://resume2path.vercel.app/";
        }

        if (message.includes('github') || message.includes('code') || message.includes('repository')) {
            return "You can find Phong's projects and code on his GitHub: https://github.com/pvu06. His main project Resume2Path showcases his skills in AI/ML, web development, and real-time analytics.";
        }

        // Skills questions
        if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('language')) {
            return "Phong's technical skills include:\n\n• Programming Languages: Python, JavaScript, Java, C++\n• Web Technologies: React.js, Next.js, Node.js, Express.js\n• Databases: PostgreSQL, MongoDB\n• Cloud & DevOps: AWS, Docker, GitHub Actions\n• AI/ML: Machine Learning, Data Science, Google Gemini AI\n• Tools: Git, VS Code, Linux";
        }

        if (message.includes('ai') || message.includes('machine learning') || message.includes('ml')) {
            return "Phong has strong experience in AI and Machine Learning, particularly demonstrated through Resume2Path which uses Google's Gemini 2.0 Flash model for AI-powered career guidance. He's also worked on predictive analytics platforms and has interests in AI/ML for his career focus.";
        }

        // Experience questions
        if (message.includes('experience') || message.includes('internship') || message.includes('work') || message.includes('job')) {
            return "Phong has completed 4 software engineering internships:\n\n• FinBud AI (May 2025 - Aug 2025): Deployed microservices, streamlined data integrations\n• Esmart Solutions Agency (Apr 2024 - Aug 2024): Refactored APIs, automated data pipelines\n• CF Hub (Aug 2023 - Dec 2023): Designed secure APIs, automated CI/CD workflows\n• Quantfident (May 2023 - Aug 2023): Built predictive analytics platforms";
        }

        if (message.includes('finbud') || message.includes('esmart') || message.includes('cf hub') || message.includes('quantfident')) {
            return "Phong has interned at several companies:\n\n• FinBud AI (Chicago, IL): Financial technology with microservices and data integrations\n• Esmart Solutions Agency (Saint Paul, MN): API optimization and data pipeline automation\n• CF Hub (Smithfield, VA): Secure API development and CI/CD automation\n• Quantfident (Hanoi, Vietnam): Predictive analytics and data engineering";
        }

        // Career goals
        if (message.includes('goal') || message.includes('career') || message.includes('future') || message.includes('internship')) {
            return "Phong is seeking internship opportunities in Software Engineering, Data Science & Analytics, and Machine Learning & AI. He wants to work on meaningful projects, learn from experienced professionals, gain hands-on experience with scalable systems, contribute to diverse teams, and build professional relationships.";
        }

        // Contact information
        if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('linkedin')) {
            return "You can reach Phong at:\n\n• Email: vuanphong06@gmail.com\n• GitHub: https://github.com/pvu06\n• LinkedIn: https://www.linkedin.com/in/phongvu06\n• Location: Duluth, Georgia";
        }

        if (message.includes('location') || message.includes('where') || message.includes('live')) {
            return "Phong is located in Duluth, Georgia. He's currently studying at Georgia State University and will be transferring to Georgia Institute of Technology.";
        }

        // General questions about Phong
        if (message.includes('who') || message.includes('about') || message.includes('tell me about')) {
            return "Phong Vu is a Computer Science student passionate about technology and problem-solving. He's currently exploring AI, software engineering, and data science while seeking internship opportunities. He has completed multiple software engineering internships and built projects like Resume2Path, an AI-powered career mentorship platform.";
        }

        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! I'm here to help you learn about Phong Vu. Feel free to ask me about his background, projects, skills, or career goals!";
        }

        // Default response for unrecognized questions
        const defaultResponses = [
            "That's an interesting question! While I don't have specific information about that, I can tell you about Phong's background, projects, skills, or career goals. What would you like to know?",
            "I'm not sure about that specific detail, but I'd be happy to share information about Phong's education, work experience, or technical projects. What interests you most?",
            "Great question! I might not have that exact information, but I can help you learn about Phong's technical skills, internship experience, or his Resume2Path project. What would you like to explore?"
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all styles are loaded
    setTimeout(() => {
        window.personalChatbot = new PersonalChatbot();
    }, 500);
});

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PersonalChatbot;
}
