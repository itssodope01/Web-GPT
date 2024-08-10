# 🤖 Web-GPT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)](https://tailwindcss.com/)

A cutting-edge Chat Application that enables users to interact with a context-aware chatbot. Leveraging the power of Machine Learning and efficient data storage, this chatbot provides responses based on the content of the website, creating a truly interactive and intelligent conversational experience.

Deployed: [Web-GPT](https://web-gpt-sandy.vercel.app/)

## 🌟 Features

- **🧠 Contextual Intelligence**: Generates relevant responses by understanding the current webpage's content.
- **🔗 Seamless Session Handling**: Maintains persistent chat sessions with unique IDs tracked via cookies.
- **📑 Dynamic Content Indexing**: Automatically indexes interacted pages for up-to-date responses.
- **💾 Persistent Chat History**: Stores conversations in Redis for seamless continuation.
- **⚡ Real-time Streaming**: Delivers chatbot responses in a streaming fashion for a fluid user experience.

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[Upstash Redis](https://upstash.com/)**: Serverless Redis for chat history and URL indexing.
- **[Upstash Vector Database](https://upstash.com/vector)**: For efficient storage and retrieval of vectorized webpage content.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety and improves code quality.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for responsive design.

## 🧠 Model Information

The chatbot is powered by the **Meta-Llama-3-8B-Instruct** model, a state-of-the-art language model designed for instruction-following and conversational tasks. It's seamlessly integrated using the `@upstash/rag-chat` package, leveraging Upstash's vector database for efficient context storage and retrieval.

### Key Model Features:

- Large-scale instruction-following capabilities
- Optimized for conversational interactions
- Seamless integration with Upstash services for scalable performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itssodope01/Web-GPT.git
   cd Web-GPT
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install the Upstash RAG Chat package:
   ```bash
   npm install @upstash/rag-chat
   ```

### Environment Setup

Create a `.env` file in the root directory with the following content:

```env
UPSTASH_VECTOR_REST_URL="GET THE URL"
UPSTASH_VECTOR_REST_TOKEN="Your_Vector_REST_Token"
QSTASH_TOKEN="Your_QSTASH_Token"
UPSTASH_REDIS_REST_URL="GET THE URL"
UPSTASH_REDIS_REST_TOKEN="Your_Redis_REST_Token"
```

Replace the placeholder values with your actual Upstash credentials.

### Running the Application

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to interact with the chatbot.

## 🔧 API Routes

- `POST /api/chat-stream`: Handles chat interactions, processing user input and returning streamed responses.

## 🎨 Styling

The project utilizes Tailwind CSS for a sleek, responsive design. Customize the look and feel by modifying the `tailwind.config.js` file in the root directory.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgements

- [Upstash](https://upstash.com/) for their excellent Redis and Vector Database services
- [Meta AI](https://ai.meta.com/) for the Llama model
- [Vercel](https://vercel.com/) for Next.js and hosting solutions

---
