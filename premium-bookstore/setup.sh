#!/bin/bash
# Quick Start Script for PageTurner

echo "🚀 PageTurner - Premium Bookstore Setup"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📖 Available commands:"
echo "   npm run dev    - Start development server (http://localhost:3000)"
echo "   npm run build  - Build for production"
echo "   npm start      - Run production build"
echo ""
echo "📚 Documentation:"
echo "   - README.md for project overview"
echo "   - ARCHITECTURE.md for detailed architecture guide"
echo ""
echo "🚀 Getting started:"
echo "   1. npm run dev"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Explore the demo bookstore!"
echo ""
